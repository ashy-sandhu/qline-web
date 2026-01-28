import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { token, hwid } = body;

        if (!token || !hwid) {
            return NextResponse.json({ success: false, message: 'Missing parameters' }, { status: 400 });
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
            }, {
                status: 401,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        // 2. Cross-verify with DB
        const [rows]: any = await db.execute('SELECT * FROM licenses WHERE key_code = ?', [decoded.licenseKey]);
        const license = rows[0];

        if (!license) {
            return NextResponse.json({
                success: false,
                message: 'License record not found',
                status: 'NOT_FOUND'
            }, { status: 404 });
        }

        if (license.status === 'SUSPENDED') {
            return NextResponse.json({
                success: false,
                message: 'License has been suspended',
                status: 'SUSPENDED'
            }, { status: 403 });
        }

        if (license.hwid !== hwid) {
            return NextResponse.json({
                success: false,
                message: 'Hardware ID mismatch',
                status: 'HWID_MISMATCH'
            }, { status: 403 });
        }

        return NextResponse.json({
            success: true,
            status: license.status,
            message: 'License is valid.'
        });

    } catch (error) {
        console.error('Validation Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
