import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const [
            totalRes,
            activeRes,
            inactiveRes,
            suspendedRes
        ] = await Promise.all([
            query('SELECT COUNT(*) as count FROM licenses'),
            query('SELECT COUNT(*) as count FROM licenses WHERE status = "ACTIVE"'),
            query('SELECT COUNT(*) as count FROM licenses WHERE status = "INACTIVE"'),
            query('SELECT COUNT(*) as count FROM licenses WHERE status = "SUSPENDED"')
        ]) as any;

        return NextResponse.json({
            success: true,
            stats: {
                total: totalRes[0]?.count || 0,
                active: activeRes[0]?.count || 0,
                inactive: inactiveRes[0]?.count || 0,
                suspended: suspendedRes[0]?.count || 0,
            }
        });

    } catch (error) {
        console.error('Stats API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
