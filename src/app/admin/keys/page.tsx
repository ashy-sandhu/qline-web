'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Key,
    Copy,
    Check,
    ChevronRight,
    ArrowLeft,
    ShieldPlus,
    Hash,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function KeysPage() {
    const [count, setCount] = useState(1);
    const [prefix, setPrefix] = useState('QLINE');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedKeys, setGeneratedKeys] = useState<string[]>([]);
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setGeneratedKeys([]);

        try {
            const res = await fetch('/api/admin/keys/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ count, prefix }),
            });

            const data = await res.json();
            if (data.success) {
                setGeneratedKeys(data.keys);
            }
        } catch (error) {
            console.error('Error generating keys:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (key: string) => {
        navigator.clipboard.writeText(key);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    return (
        <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
                <Link href="/admin/dashboard" className="p-2 hover:bg-white/50 rounded-lg transition-colors text-muted hover:text-[var(--primary-teal)]">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-teal-gradient uppercase tracking-tight">Generate Keys</h1>
                    <p className="text-muted text-sm font-medium">Issue new product keys for software distribution</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Form Section */}
                <div className="md:col-span-1">
                    <div className="premium-card p-6 glass-panel border-white/40 h-fit sticky top-28 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldPlus className="text-[var(--primary-teal)]" size={20} />
                            <h2 className="font-bold text-[var(--primary-teal-dark)] text-lg">Key Config</h2>
                        </div>

                        <form onSubmit={handleGenerate} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Key Prefix</label>
                                <div className="relative">
                                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--primary-teal)]/50" size={16} />
                                    <input
                                        type="text"
                                        value={prefix}
                                        onChange={(e) => setPrefix(e.target.value.toUpperCase().slice(0, 8))}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-teal-500/10 focus:border-teal-500 outline-none transition-all font-mono text-sm"
                                        placeholder="E.g. QLINE"
                                    />
                                </div>
                                <p className="text-[10px] text-muted mt-2 font-medium">Auto-capitalized (Max 8 chars)</p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Quantity</label>
                                <div className="relative">
                                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--primary-teal)]/50" size={16} />
                                    <input
                                        type="number"
                                        min="1"
                                        max="50"
                                        value={count}
                                        onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 border border-teal-500/10 focus:border-teal-500 outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <p className="text-[10px] text-muted mt-2 font-medium">Batch limit: 50 keys per operation</p>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full justify-center py-4 text-sm font-bold uppercase tracking-widest"
                            >
                                {isLoading ? 'Processing...' : 'Generate Batch'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Results Section */}
                <div className="md:col-span-2">
                    <div className="premium-card min-h-[460px] glass-panel border-white/40 overflow-hidden flex flex-col shadow-2xl">
                        <div className="p-6 border-b border-white/20 bg-[var(--primary-teal)]/5 flex items-center justify-between">
                            <h2 className="font-extrabold text-[var(--primary-teal-dark)] text-lg uppercase tracking-tight">Generated Queue</h2>
                            {generatedKeys.length > 0 && <span className="bg-[var(--primary-teal)] text-white text-[10px] font-black px-2 py-1 rounded-md">{generatedKeys.length} NEW</span>}
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto max-h-[500px] custom-scrollbar">
                            <AnimatePresence mode="popLayout">
                                {generatedKeys.length > 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="grid grid-cols-1 gap-3"
                                    >
                                        {generatedKeys.map((key, index) => (
                                            <motion.div
                                                key={key}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="group flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-teal-500/5 hover:border-teal-500/30 transition-all hover:bg-white/60 hover:shadow-lg"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] font-black text-muted w-6 opacity-40">{index + 1}.</span>
                                                    <span className="font-mono text-sm tracking-[0.2em] font-bold text-[var(--primary-teal-dark)]">{key}</span>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(key)}
                                                    className={`p-2.5 rounded-xl transition-all ${copiedKey === key ? 'text-green-500 bg-green-50 scale-110' : 'text-muted hover:text-[var(--primary-teal)] hover:bg-white active:scale-95'}`}
                                                >
                                                    {copiedKey === key ? <Check size={18} /> : <Copy size={18} />}
                                                </button>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="h-full py-20 flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 rounded-3xl bg-[var(--bg-main)] border-2 border-dashed border-[var(--primary-teal)]/30 flex items-center justify-center mb-6">
                                            <Plus size={40} className="text-[var(--primary-teal)]/20" />
                                        </div>
                                        <p className="font-extrabold text-[var(--primary-teal-dark)] text-xl tracking-tight">No keys generated yet</p>
                                        <p className="text-muted text-sm max-w-[240px] mx-auto mt-2 font-medium">Configure your issuance settings and click the button to generate a new batch.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {generatedKeys.length > 0 && (
                            <div className="p-4 bg-emerald-50/50 border-t border-emerald-100 flex items-center justify-center gap-3">
                                <CheckCircle2 size={16} className="text-emerald-500" />
                                <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                                    Queue saved securely to master database.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
