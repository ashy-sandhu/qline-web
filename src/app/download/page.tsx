'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
    Download,
    ShieldCheck,
    Key,
    MonitorSmartphone,
    Zap,
    Info,
    ChevronRight,
    User,
    Lock,
    Cpu,
    Globe,
    LayoutDashboard
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

export default function DownloadPage() {
    const [isHuman, setIsHuman] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const features = [
        {
            icon: <Zap className="text-[var(--primary-teal)]" />,
            title: "Real-time Sync",
            desc: "Instant data propagation across all nodes using our proprietary Flutter core."
        },
        {
            icon: <MonitorSmartphone className="text-sky-500" />,
            title: "Multi-Platform",
            desc: "Native performance on Windows, Android, and Web with zero compromise."
        },
        {
            icon: <ShieldCheck className="text-emerald-500" />,
            title: "Secure Ledger",
            desc: "Cryptographically signed transaction logs for 100% financial integrity."
        },
        {
            icon: <Cpu className="text-purple-500" />,
            title: "Low Latency",
            desc: "Under 0.1ms response time even during peak dashboard traffic."
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--bg-main)] overflow-x-hidden pt-24 pb-20">
            {/* Background Accents */}
            <div className="fixed inset-0 -z-10 opacity-30">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-teal)]/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[var(--accent-blue)]/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="content-container">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="text-[var(--primary-teal)] font-black uppercase tracking-[0.6em] text-[10px] mb-4 block"
                    >
                        System Distribution
                    </motion.span>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-black text-[var(--primary-teal-dark)] mb-6 tracking-tight"
                    >
                        Deploy the <span className="text-teal-gradient">Evolution</span>.
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
                    >
                        Download the latest production build of Q-LINE POS. Standardized, secure, and ready for high-frequency operations.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Dynamic Content & Features */}
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <h2 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-8 flex items-center gap-3">
                                <LayoutDashboard className="text-[var(--primary-teal)]" size={24} />
                                Core Capabilities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="premium-card p-6 glass-panel border-white/40 hover:border-[var(--primary-teal)]/20 transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[var(--primary-teal)]">
                                            {f.icon}
                                        </div>
                                        <h3 className="text-lg font-black text-[var(--primary-teal-dark)] mb-2 uppercase tracking-tight">{f.title}</h3>
                                        <p className="text-sm text-[var(--text-muted)] font-medium leading-relaxed">{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section className="premium-card glass-panel dark:bg-black/5 p-8 border-white/20">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-teal)]/10 flex items-center justify-center text-[var(--primary-teal)] shrink-0">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tight mb-1">System Requirements</h2>
                                    <p className="text-xs text-[var(--text-muted)] font-bold tracking-widest uppercase opacity-60">Optimized for V4.0 Engine</p>
                                </div>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Windows 10/11 (64-bit Required)",
                                    "4GB RAM Available (8GB Recommended)",
                                    "DirectX 11 Compatible Graphics",
                                    "Stable Internet Connection",
                                    "1080p Display Resolution",
                                    "Admin Privileges for Installation"
                                ].map((req, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-[var(--primary-teal-dark)]/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)]" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Demo Guide & Download Action */}
                    <div className="lg:col-span-5 space-y-8 h-fit lg:sticky lg:top-32 font-bold">
                        {/* Login Guide */}
                        <div className="premium-card bg-[var(--primary-teal-dark)] p-8 text-white shadow-2xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>

                            <div className="flex items-center gap-3 mb-8 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-[var(--primary-teal)] flex items-center justify-center">
                                    <Key size={20} />
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tight">Demo Access</h2>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <p className="text-sm text-teal-100/70 leading-relaxed font-medium">Use the following credentials to access the system after installation for evaluation.</p>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-teal-400 mb-2">Username</div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-black tracking-widest">demo</span>
                                            <User size={18} className="text-white/30" />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-teal-400 mb-2">Password</div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-black tracking-widest">demo</span>
                                            <Lock size={18} className="text-white/30" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-100 font-medium">
                                    <Info size={16} className="shrink-0 text-teal-400" />
                                    Note: Demo account has restricted administrative permissions.
                                </div>
                            </div>
                        </div>

                        {/* Download Action */}
                        <div className="premium-card glass-panel border-white/40 p-8 shadow-xl">
                            <h2 className="text-xl font-black text-[var(--primary-teal-dark)] mb-6 uppercase tracking-tight">Secure Download</h2>

                            <div className="space-y-6">
                                <div
                                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group ${isHuman ? 'bg-emerald-50 border-emerald-500/20' : 'bg-gray-50 border-black/5 hover:border-[var(--primary-teal)]/20'
                                        }`}
                                    onClick={() => setIsHuman(!isHuman)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${isHuman ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-black/10 group-hover:border-[var(--primary-teal)]/30'
                                            }`}>
                                            {isHuman && <ShieldCheck size={16} className="text-white" />}
                                        </div>
                                        <span className={`text-sm font-black uppercase tracking-widest ${isHuman ? 'text-emerald-700' : 'text-gray-400'}`}>I am a human</span>
                                    </div>
                                    {!isHuman && <div className="text-[10px] font-black text-[var(--primary-teal)] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Verify Now</div>}
                                </div>

                                <button
                                    disabled={!isHuman || isDownloading}
                                    className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest shadow-xl ${isHuman
                                        ? 'btn-primary shadow-[var(--primary-teal)]/20 hover:shadow-[var(--primary-teal)]/40 hover:-translate-y-1'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed grayscale shadow-none'
                                        }`}
                                    onClick={() => {
                                        setIsDownloading(true);
                                        setTimeout(() => setIsDownloading(false), 2000);
                                    }}
                                >
                                    <Download size={20} className={isDownloading ? 'animate-bounce' : ''} />
                                    {isDownloading ? 'Initializing...' : 'Download V4.0'}
                                </button>

                                <p className="text-center text-[10px] text-[var(--text-muted)] font-black uppercase tracking-widest opacity-60">
                                    Build: 2024.1.28.A | SHA-256 Verified
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
