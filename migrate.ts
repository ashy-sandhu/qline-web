import { query } from './src/lib/db';

async function migrate() {
    try {
        console.log('Running migration: Adding duration_months to licenses...');
        await query('ALTER TABLE licenses ADD COLUMN IF NOT EXISTS duration_months INT DEFAULT 0 AFTER hwid;');
        console.log('Migration successful.');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();
