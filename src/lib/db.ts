import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Environment variables provided by Hostinger
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'qline_licensing',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Helper to execute queries cleanly
export async function query(sql: string, params: any[] = []) {
    const [results] = await pool.execute(sql, params);
    return results;
}

// Initial Setup Function (Async)
async function initDB() {
    try {
        const connection = await pool.getConnection();

        await connection.query(`
            CREATE TABLE IF NOT EXISTS admins (
                id VARCHAR(36) PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS licenses (
                id VARCHAR(36) PRIMARY KEY,
                key_code VARCHAR(255) UNIQUE NOT NULL,
                hwid VARCHAR(255),
                status VARCHAR(50) DEFAULT 'INACTIVE',
                restaurantName VARCHAR(255),
                activatedAt DATETIME,
                expiresAt DATETIME,
                version VARCHAR(50) DEFAULT '4.0.0',
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Seed Admin
        const [rows]: any = await connection.execute('SELECT * FROM admins WHERE username = ?', ['admin']);
        if (rows.length === 0) {
            const password = process.env.ADMIN_PASSWORD || 'admin_change_me_2026';
            const hashedPassword = bcrypt.hashSync(password, 10);
            await connection.execute(
                'INSERT INTO admins (id, username, password) VALUES (?, ?, ?)',
                [uuidv4(), 'admin', hashedPassword]
            );
            console.log('DATABASE: Created default admin account.');
        }

        connection.release();
    } catch (e) {
        console.error('DATABASE INIT ERROR:', e);
    }
}

// Run init (fire and forget for now, or await in entry entry point)
initDB();

export default pool;
