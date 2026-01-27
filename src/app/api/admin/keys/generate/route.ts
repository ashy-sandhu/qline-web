import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { verifyAdmin } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const count = parseInt(body.count) || 1;
        const prefix = body.prefix || 'QLINE';

        const numToGenerate = Math.min(Math.max(count, 1), 50); // Limit to 50 at a time
        const keyPrefix = prefix.toUpperCase();

        const generatedKeys = [];
        // Note: MySQL usage of "NOW()" or standard ISO strings is fine.
        const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // MySQL DATETIME format

        for (let i = 0; i < numToGenerate; i++) {
            // Generate a secure-looking key: PREFIX-XXXX-XXXX-XXXX
            const randomPart = () => Math.random().toString(36).substring(2, 6).toUpperCase();
            const key = `${keyPrefix}-${randomPart()}-${randomPart()}-${randomPart()}`;

            // Note: DB column is 'key_code' in MySQL schema to avoid reserved word 'key'
            await db.query(`
                INSERT INTO licenses (id, key_code, status, createdAt, updatedAt)
                VALUES (?, ?, 'INACTIVE', ?, ?)
            `, [uuidv4(), key, now, now]);

            generatedKeys.push(key);
        }

        return NextResponse.json({
            success: true,
            message: `Successfully generated ${numToGenerate} keys.`,
            keys: generatedKeys
        });

    } catch (error) {
        console.error('Key Generation Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
