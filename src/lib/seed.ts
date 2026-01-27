import db from './db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export async function seedAdmin() {
    const username = 'admin';
    const password = process.env.ADMIN_PASSWORD || 'admin_change_me_2026';

    const existing = db.prepare('SELECT * FROM admins WHERE username = ?').get(username);

    if (!existing) {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.prepare('INSERT INTO admins (id, username, password) VALUES (?, ?, ?)')
            .run(uuidv4(), username, hashedPassword);
        console.log('Admin user created successfully.');
    } else {
        console.log('Admin user already exists.');
    }
}
