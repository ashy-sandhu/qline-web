'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                // Redirect to dashboard
                window.location.href = '/admin/dashboard';
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err: any) {
            console.error(err);
            setError(`Error: ${err.message || JSON.stringify(err)}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--primary-teal)]/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--primary-teal-dark)]/5 blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 relative z-10"
            >
                <div className="premium-card p-10 glass-panel border-white/40">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--primary-teal-dark)] flex items-center justify-center mb-4 shadow-xl">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-teal-gradient">Admin Portal</h1>
                        <p className="text-muted text-sm mt-1">Licensed Management System</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-[var(--primary-teal-dark)] mb-2">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary-teal)]" size={18} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-[var(--primary-teal)]/20 focus:border-[var(--primary-teal)] outline-none transition-all"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[var(--primary-teal-dark)] mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary-teal)]" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-[var(--primary-teal)]/20 focus:border-[var(--primary-teal)] outline-none transition-all"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm font-medium text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-primary w-full justify-center py-4 text-lg"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
