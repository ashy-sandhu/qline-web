import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
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
        const { token, hwid } = body;

        if (!token || !hwid) {
            return NextResponse.json(
                { success: false, message: 'Missing parameters' },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        // 1. Verify JWT via jose
        let decoded: any;
        try {
            const { payload } = await jwtVerify(token, secret);
            decoded = payload;
        } catch (err) {
            return NextResponse.json({
                success: false,
                message: 'Invalid or expired token',
                status: 'INVALID_TOKEN'
            }, { status: 401, headers: CORS_HEADERS });
        }

        // 2. Cross-verify with DB using query helper
        const rows: any = await query('SELECT * FROM licenses WHERE key_code = ?', [decoded.licenseKey]);
        const license = rows[0];

        if (!license) {
            return NextResponse.json({
                success: false,
                message: 'License record not found',
                status: 'NOT_FOUND'
            }, { status: 404, headers: CORS_HEADERS });
        }

        if (license.status === 'SUSPENDED') {
            return NextResponse.json({
                success: false,
                message: 'License has been suspended',
                status: 'SUSPENDED'
            }, { status: 403, headers: CORS_HEADERS });
        }

        if (license.hwid !== hwid) {
            return NextResponse.json({
                success: false,
                message: 'Hardware ID mismatch',
                status: 'HWID_MISMATCH'
            }, { status: 403, headers: CORS_HEADERS });
        }

        // 3. New Check: Expiry Status
        if (license.expiresAt && new Date(license.expiresAt) < new Date()) {
            return NextResponse.json({
                success: false,
                message: 'License has expired',
                status: 'EXPIRED'
            }, { status: 403, headers: CORS_HEADERS });
        }

        // 4. Update lastSeen status
        await query('UPDATE licenses SET lastSeen = NOW() WHERE id = ?', [license.id]);

        return NextResponse.json({
            success: true,
            status: license.status,
            message: 'License is valid.'
        }, { status: 200, headers: CORS_HEADERS });

    } catch (error: any) {
        console.error('Validation Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error', error: error.message },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}
