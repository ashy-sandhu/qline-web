import { NextRequest, NextResponse } from 'next/server';
import db, { ensureTables, query } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

const SETUP_KEY = 'qline-setup-2026';
const DEFAULT_USER = 'admin';
const DEFAULT_PASS = process.env.ADMIN_PASSWORD || 'admin_change_me_2026';

export async function GET(req: NextRequest) {
    const key = req.nextUrl.searchParams.get('key');

    if (key !== SETUP_KEY) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
        console.log('--- STARTING REMOTE DATABASE SETUP ---');

        // 1. Ensure tables exist
        await ensureTables();

        // 1b. Migration: Add lastSeen if missing (for existing users)
        try {
            await query('ALTER TABLE licenses ADD COLUMN lastSeen DATETIME AFTER activatedAt');
            console.log('Migration: lastSeen column added.');
        } catch (e) {
            console.log('Migration Info: lastSeen column already exists or table busy.');
        }

        console.log('Tables verified.');

        // 2. Check if admin already exists
        const existing: any = await query('SELECT * FROM admins WHERE username = ?', [DEFAULT_USER]);

        if (existing && existing.length > 0) {
            return NextResponse.json({
                success: true,
                message: 'Database already initialized. Admin exists.',
                setup_status: 'ALREADY_DONE'
            });
        }

        // 3. Create default admin
        const hashedPassword = await bcrypt.hash(DEFAULT_PASS, 10);
        await query(`
            INSERT INTO admins (id, username, password, createdAt, updatedAt)
            VALUES (?, ?, ?, NOW(), NOW())
        `, [uuidv4(), DEFAULT_USER, hashedPassword]);

        console.log('Admin account created.');

        return NextResponse.json({
            success: true,
            message: 'Database initialized successfully. Tables created and Admin seeded.',
            setup_status: 'COMPLETED',
            credentials: {
                username: DEFAULT_USER,
                password: 'Check your environment variables for password'
            }
        });

    } catch (error: any) {
        console.error('SETUP ERROR:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to initialize database.',
            error: error.message
        }, { status: 500 });
    }
}
