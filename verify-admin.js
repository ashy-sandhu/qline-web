const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

async function main() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'qline_licensing',
    });

    try {
        const [rows] = await connection.execute('SELECT * FROM admins');
        console.log('Found', rows.length, 'admins.');

        if (rows.length > 0) {
            for (const admin of rows) {
                console.log(`- Username: ${admin.username} (ID: ${admin.id})`);
                // Force reset to simple password
                console.log('  [FIX] Force resetting password to: admin123');
                const newHash = bcrypt.hashSync('admin123', 10);
                await connection.execute('UPDATE admins SET password = ? WHERE id = ?', [newHash, admin.id]);
                console.log('  [FIX] Password reset successful.');
            }
        } else {
            console.log('No admins found! Attempting to seed...');
            const hash = bcrypt.hashSync('admin123', 10);
            await connection.execute(
                'INSERT INTO admins (id, username, password) VALUES (?, ?, ?)',
                [uuidv4(), 'admin', hash]
            );
            console.log('Seeded default admin (admin/admin123).');
        }

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await connection.end();
    }
}

main();
