import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const stats = {
            db_host_env: process.env.DB_HOST ? 'PRESENT' : 'MISSING',
            db_user_env: process.env.DB_USER ? 'PRESENT' : 'MISSING',
            db_name_env: process.env.DB_NAME ? 'PRESENT' : 'MISSING',
            db_pass_env: process.env.DB_PASSWORD ? 'PRESENT' : 'MISSING',
            node_env: process.env.NODE_ENV,
            current_host: process.env.DB_HOST || 'localhost (fallback)'
        };

        // Try a simple query using the pool
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
                db_host_env: process.env.DB_HOST ? 'PRESENT' : 'MISSING',
                db_user_env: process.env.DB_USER ? 'PRESENT' : 'MISSING',
                db_name_env: process.env.DB_NAME ? 'PRESENT' : 'MISSING',
                node_env: process.env.NODE_ENV,
                host_fallback: 'localhost'
            }
        }, { status: 500 });
    }
}
