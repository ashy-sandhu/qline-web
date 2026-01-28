import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { verifyAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const body = await req.json();
        const { status, clearHwid, restaurantName } = body;

        // Note: MySQL usage of "NOW()" or standard ISO strings is fine.
        const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // MySQL DATETIME format

        if (clearHwid) {
            await db.query('UPDATE licenses SET hwid = NULL, status = "INACTIVE", updatedAt = ? WHERE id = ?', [now, id]);
        } else if (status) {
            await db.query('UPDATE licenses SET status = ?, updatedAt = ? WHERE id = ?', [status, now, id]);
        }

        if (restaurantName) {
            await db.query('UPDATE licenses SET restaurantName = ?, updatedAt = ? WHERE id = ?', [restaurantName, now, id]);
        }

        return NextResponse.json({ success: true, message: 'License updated successfully.' });

    } catch (error) {
        console.error('License Update Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        await db.query('DELETE FROM licenses WHERE id = ?', [id]);

        return NextResponse.json({ success: true, message: 'License deleted successfully.' });

    } catch (error) {
        console.error('License Deletion Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
