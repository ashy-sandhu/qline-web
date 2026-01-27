const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = 'qline_licensing.db';
const fullPath = path.resolve(process.cwd(), dbPath);

console.log('Opening Database:', fullPath);
const db = new Database(fullPath);

// Check if admin table exists
try {
    const admins = db.prepare('SELECT * FROM admins').all();
    console.log('Found', admins.length, 'admins.');

    if (admins.length > 0) {
        admins.forEach(admin => {
            console.log(`- Username: ${admin.username} (ID: ${admin.id})`);
            // Force reset to simple password
            console.log('  [FIX] Force resetting password to: admin123');
            const newHash = bcrypt.hashSync('admin123', 10);
            db.prepare('UPDATE admins SET password = ? WHERE id = ?').run(newHash, admin.id);
            console.log('  [FIX] Password reset successful.');
        });
    } else {
        console.log('No admins found! Attempting to seed...');
        // Insert default admin
        const id = require('uuid').v4(); // might fail if uuid import issue in js script, simpler to just use random string
        const hash = bcrypt.hashSync('admin_change_me_2026', 10);
        db.prepare('INSERT INTO admins (id, username, password) VALUES (?, ?, ?)')
            .run('admin-id-1', 'admin', hash);
        console.log('Seeded default admin.');
    }

} catch (e) {
    console.error('Error:', e);
}
