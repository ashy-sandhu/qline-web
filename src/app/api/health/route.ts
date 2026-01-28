import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const stats = {
            db_host: process.env.DB_HOST || 'localhost (fallback)',
            db_user: process.env.DB_USER || 'root (fallback)',
            db_name: process.env.DB_NAME || 'qline_licensing (fallback)',
            env: process.env.NODE_ENV
        };

        // Try a simple query
        const startTime = Date.now();
        const results: any = await db.execute('SELECT 1 as ping');
        const endTime = Date.now();

        return NextResponse.json({
            success: true,
            status: 'HEALTHY',
            latency: `${endTime - startTime}ms`,
            diagnostics: stats,
            ping: results[0][0]?.ping === 1 ? 'OK' : 'FAIL'
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            status: 'UNHEALTHY',
            error: error.message,
            diagnostics: {
                db_host: process.env.DB_HOST || 'NOT_SET',
                db_user: process.env.DB_USER || 'NOT_SET',
                db_name: process.env.DB_NAME || 'NOT_SET',
            }
        }, { status: 500 });
    }
}
