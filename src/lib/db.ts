import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Environment variables provided by Hostinger
if (!process.env.DB_HOST && process.env.NODE_ENV === 'production') {
    console.warn('DATABASE WARNING: DB_HOST is not set in production. Falling back to localhost.');
}

const poolConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'qline_licensing',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
};

// Log loaded config (masked) for debugging
if (process.env.NODE_ENV === 'production') {
    console.log('DB CONFIG LOADED:', {
        host: poolConfig.host,
        user: poolConfig.user,
        db: poolConfig.database,
        hasPassword: !!poolConfig.password,
        raw_host_env: process.env.DB_HOST ? 'PRESENT' : 'MISSING'
    });
}

const pool = mysql.createPool(poolConfig);

// Helper to execute queries cleanly
export async function query(sql: string, params: any[] = []) {
    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error: any) {
        console.error(`DATABASE QUERY ERROR [${sql}]:`, error.message);
        throw error;
    }
}

// Manual initialization - can be called if needed, but not on every import
export async function ensureTables() {
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
        connection.release();
    } catch (e) {
        console.error('DATABASE ENSURE TABLES ERROR:', e);
    }
}

export default pool;
