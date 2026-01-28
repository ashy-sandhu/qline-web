import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { licenseKey, hwid, restaurantName } = body;

        if (!licenseKey || !hwid) {
            return NextResponse.json(
                { message: 'License key and Hardware ID are required.' },
                {
                    status: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    }
                }
            );
        }

        // 1. Fetch license from DB
        const [rows]: any = await db.execute('SELECT * FROM licenses WHERE key_code = ?', [licenseKey]);
        const license = rows[0];

        if (!license) {
            return NextResponse.json(
                { message: 'Invalid license key. Please check and try again.' },
                {
                    status: 403,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    }
                }
            );
        }

        // 2. Check status
        if (license.status === 'SUSPENDED') {
            return NextResponse.json(
                { message: 'This license has been suspended. Please contact support.' },
                {
                    status: 403,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    }
                }
            );
        }

        // 3. Check HWID binding
        if (license.hwid && license.hwid !== hwid) {
            return NextResponse.json(
                { message: 'This key is already bound to another machine.' },
                {
                    status: 403,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    }
                }
            );
        }

        // 4. Update license if not yet activated
        const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // MySQL DATETIME format
        if (!license.hwid) {
            await db.execute(`
                UPDATE licenses 
                SET hwid = ?, 
                    restaurantName = ?, 
                    status = 'ACTIVE', 
                    activatedAt = ?,
                    updatedAt = ?
                WHERE id = ?
            `, [hwid, restaurantName || 'Generic Restaurant', now, now, license.id]);
        }

        // 5. Generate signed activation token via jose
        const token = await new SignJWT({
            licenseKey,
            hwid,
            restaurantName: restaurantName || license.restaurantName || 'Generic Restaurant',
            activatedAt: now,
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
        });

    } catch (error) {
        console.error('Activation Error:', error);
        return NextResponse.json(
            { message: 'Internal server error during activation.' },
            { status: 500 }
        );
    }
}
