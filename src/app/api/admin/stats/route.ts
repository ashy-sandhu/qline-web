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

        const stats = {
            totalLicenses: db.prepare('SELECT COUNT(*) as count FROM licenses').get() as any,
            activeLicenses: db.prepare('SELECT COUNT(*) as count FROM licenses WHERE status = "ACTIVE"').get() as any,
            inactiveLicenses: db.prepare('SELECT COUNT(*) as count FROM licenses WHERE status = "INACTIVE"').get() as any,
            suspendedLicenses: db.prepare('SELECT COUNT(*) as count FROM licenses WHERE status = "SUSPENDED"').get() as any,
        };

        return NextResponse.json({
            success: true,
            stats: {
                total: stats.totalLicenses.count || 0,
                active: stats.activeLicenses.count || 0,
                inactive: stats.inactiveLicenses.count || 0,
                suspended: stats.suspendedLicenses.count || 0,
            }
        });

    } catch (error) {
        console.error('Stats API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
