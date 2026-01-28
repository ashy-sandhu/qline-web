import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { verifyAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const licenses = await db.query('SELECT * FROM licenses ORDER BY createdAt DESC');

        return NextResponse.json({
            success: true,
            licenses
        });

    } catch (error) {
        console.error('Licenses API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
