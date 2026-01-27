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

        const now = new Date().toISOString();

        if (clearHwid) {
            db.prepare('UPDATE licenses SET hwid = NULL, status = "INACTIVE", updatedAt = ? WHERE id = ?')
                .run(now, id);
        } else if (status) {
            db.prepare('UPDATE licenses SET status = ?, updatedAt = ? WHERE id = ?')
                .run(status, now, id);
        }

        if (restaurantName) {
            db.prepare('UPDATE licenses SET restaurantName = ?, updatedAt = ? WHERE id = ?')
                .run(restaurantName, now, id);
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
        db.prepare('DELETE FROM licenses WHERE id = ?').run(id);

        return NextResponse.json({ success: true, message: 'License deleted successfully.' });

    } catch (error) {
        console.error('License Deletion Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
