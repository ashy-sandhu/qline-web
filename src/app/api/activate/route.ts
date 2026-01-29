import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: CORS_HEADERS
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { licenseKey, hwid, restaurantName } = body;

        if (!licenseKey || !hwid) {
            return NextResponse.json(
                { message: 'License key and Hardware ID are required.' },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        // 1. Fetch license from DB using query helper
        const rows: any = await query('SELECT * FROM licenses WHERE key_code = ?', [licenseKey]);
        const license = rows[0];

        if (!license) {
            return NextResponse.json(
                { message: 'Invalid license key. Please check and try again.' },
                { status: 403, headers: CORS_HEADERS }
            );
        }

        // 2. Check status
        if (license.status === 'SUSPENDED') {
            return NextResponse.json(
                { message: 'This license has been suspended. Please contact support.' },
                { status: 403, headers: CORS_HEADERS }
            );
        }

        // 3. Check HWID binding
        if (license.hwid && license.hwid !== hwid) {
            return NextResponse.json(
                { message: 'This key is already bound to another machine.' },
                { status: 403, headers: CORS_HEADERS }
            );
        }

        // 4. Update license if not yet activated
        const now = new Date();
        const nowSql = now.toISOString().slice(0, 19).replace('T', ' ');

        if (!license.hwid) {
            let expiresAt = null;
            if (license.duration_months > 0) {
                const expiry = new Date(now);
                expiry.setMonth(expiry.getMonth() + license.duration_months);
                expiresAt = expiry.toISOString().slice(0, 19).replace('T', ' ');
            }

            await query(`
                UPDATE licenses 
                SET hwid = ?, 
                    restaurantName = ?, 
                    status = 'ACTIVE', 
                    activatedAt = ?,
                    expiresAt = ?,
                    lastSeen = NOW(),
                    updatedAt = ?
                WHERE id = ?
            `, [hwid, restaurantName || 'Generic Restaurant', nowSql, expiresAt, nowSql, license.id]);

            // Re-fetch or assign for JWT
            license.expiresAt = expiresAt;
        }

        // 5. Generate signed activation token
        const token = await new SignJWT({
            licenseKey,
            hwid,
            restaurantName: restaurantName || license.restaurantName || 'Generic Restaurant',
            activatedAt: nowSql,
            expiresAt: license.expiresAt,
            version: license.version || '4.0.0',
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('365d')
            .sign(secret);

        return NextResponse.json({
            success: true,
            message: 'Activation successful.',
            token,
            activationDate: now,
        }, { status: 200, headers: CORS_HEADERS });

    } catch (error: any) {
        console.error('Activation Error:', error);
        return NextResponse.json(
            { message: 'Internal server error during activation.', error: error.message },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}
