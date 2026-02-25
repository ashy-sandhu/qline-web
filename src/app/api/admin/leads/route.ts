import { NextResponse } from 'next/server';
import { query, ensureTables } from '@/lib/db';

export async function GET(request: Request) {
    try {
        await ensureTables();
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        let sql = 'SELECT * FROM leads';
        const params = [];

        if (status && status !== 'all') {
            sql += ' WHERE status = ?';
            params.push(status);
        }

        sql += ' ORDER BY createdAt DESC';

        const leads = await query(sql, params);
        return NextResponse.json(leads);
    } catch (error: any) {
        console.error('ADMIN LEADS GET ERROR:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        await ensureTables();
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
        }

        await query(
            'UPDATE leads SET status = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
            [status, id]
        );

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('ADMIN LEADS PATCH ERROR:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
