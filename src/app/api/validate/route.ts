import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { token, hwid } = body;

        if (!token || !hwid) {
            return NextResponse.json({ success: false, message: 'Missing parameters' }, { status: 400 });
        }

        // 1. Verify JWT
        let decoded: any;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (err) {
            return NextResponse.json({
                success: false,
                message: 'Invalid or expired token',
                status: 'INVALID_TOKEN'
            }, { status: 401 });
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
