import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Since this is used in Next.js Server Components/API, 
// environment variables should already be loaded.
const dbPath = process.env.DATABASE_PATH || 'qline_licensing.db';
const fullPath = path.resolve(process.cwd(), dbPath);

// Ensure directory exists
const dbDir = path.dirname(fullPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(fullPath);

// Enable WAL mode for performance
db.pragma('journal_mode = WAL');

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS licenses (
        id TEXT PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        hwid TEXT,
        status TEXT DEFAULT 'INACTIVE', -- ACTIVE, INACTIVE, SUSPENDED
        restaurantName TEXT,
        activatedAt DATETIME,
        expiresAt DATETIME,
        version TEXT DEFAULT '4.0.0',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

// Self-seeding for first admin
const seedAdmin = () => {
    const username = 'admin';
    // Use a default password if not provided in env
    const password = process.env.ADMIN_PASSWORD || 'admin_change_me_2026';

    const existing = db.prepare('SELECT * FROM admins WHERE username = ?').get(username);

    if (!existing) {
        try {
            // Use sync version for direct initialization
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.prepare('INSERT OR IGNORE INTO admins (id, username, password) VALUES (?, ?, ?)')
                .run(uuidv4(), username, hashedPassword);
            console.log('-------------------------------------------');
            console.log('DATABASE: Initialized admin account check.');
            console.log('-------------------------------------------');
        } catch (e) {
            // Ignore if another worker already did it
        }
    }
};

seedAdmin();

export default db;
