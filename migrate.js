const mysql = require('mysql2/promise');

const poolConfig = {
    host: 'srv1983.hstgr.io',
    user: 'u303380656_admin',
    password: 'SAS@MIX3.get',
    database: 'u303380656_licensing',
};

async function migrate() {
    const connection = await mysql.createConnection(poolConfig);
    try {
        console.log('Running migration: Adding duration_months to licenses...');
        // Check if column exists first because MySQL 8.0 doesn't support ADD COLUMN IF NOT EXISTS easily without a procedure
        const [rows] = await connection.query("SHOW COLUMNS FROM licenses LIKE 'duration_months'");
        if (rows.length === 0) {
            await connection.query('ALTER TABLE licenses ADD COLUMN duration_months INT DEFAULT 0 AFTER hwid;');
            console.log('Migration successful: Column added.');
        } else {
            console.log('Migration skipped: Column already exists.');
        }
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await connection.end();
    }
}

migrate();
