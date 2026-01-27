import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { licenseKey, hwid, restaurantName } = body;

        if (!licenseKey || !hwid) {
            return NextResponse.json(
                { message: 'License key and Hardware ID are required.' },
                { status: 400 }
            );
        }

        // 1. Fetch license from DB
        const [rows]: any = await db.execute('SELECT * FROM licenses WHERE key_code = ?', [licenseKey]);
        const license = rows[0];

        if (!license) {
            return NextResponse.json(
                { message: 'Invalid license key. Please check and try again.' },
                { status: 403 }
            );
        }

        // 2. Check status
        if (license.status === 'SUSPENDED') {
            return NextResponse.json(
                { message: 'This license has been suspended. Please contact support.' },
                { status: 403 }
            );
        }

        // 3. Check HWID binding
        if (license.hwid && license.hwid !== hwid) {
            return NextResponse.json(
                { message: 'This key is already bound to another machine.' },
                { status: 403 }
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

        // 5. Generate signed activation token
        const token = jwt.sign(
            {
                licenseKey,
                hwid,
                restaurantName: restaurantName || license.restaurantName || 'Generic Restaurant',
                activatedAt: now,
                version: license.version || '4.0.0',
            },
            JWT_SECRET,
            { expiresIn: '365d' }
        );

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
