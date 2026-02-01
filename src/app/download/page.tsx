'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
    Download,
    ShieldCheck,
    Zap,
    Check,
    Loader2,
    ArrowRight,
    Monitor,
    Shield,
    Smartphone,
    CreditCard,
    Users
} from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

// Compact Robot Verification
const RobotCheck = ({ onVerify }: { onVerify: (val: boolean) => void }) => {
    const [status, setStatus] = useState<'idle' | 'verifying' | 'verified'>('idle');

    const handleCheck = () => {
        if (status !== 'idle') return;
        setStatus('verifying');
        setTimeout(() => {
            setStatus('verified');
            onVerify(true);
        }, 1200);
    };

    return (
        <div
            onClick={handleCheck}
            className={`flex items-center gap-3 px-5 py-3 rounded-lg border transition-all cursor-pointer ${status === 'verified' ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
        >
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${status === 'verified' ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'
                }`}>
                {status === 'verifying' && <Loader2 size={12} className="animate-spin text-teal-600" />}
                {status === 'verified' && <Check size={12} className="text-white" strokeWidth={3} />}
            </div>
            <span className={`text-xs font-bold tracking-tight ${status === 'verified' ? 'text-emerald-700' : 'text-slate-600'}`}>
                {status === 'verified' ? 'Verified Participant' : "I'm not a robot"}
            </span>
        </div>
    );
};

export default function DownloadPage() {
    const [isVerified, setIsVerified] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const plans = [
        {
            name: "Evaluation Build",
            tag: "For Testing Only",
            desc: "A restricted environment designed for compatibility testing and staff training.",
            features: [
                "Single Admin User Limit",
                "Restricted Customization",
                "Local-Only Transaction Storage",
                "Basic Feature Access",
                "No Cloud Synchronization"
            ],
            cta: "Download Demo",
            highlight: false
        },
        {
            name: "Commercial License",
            tag: "Production Ready",
            desc: "The complete, unlocked Q-Line experience for professional operations.",
            features: [
                "Unlimited SKU & Inventory Matrix",
                "Granular Access Control Protocols (RBAC)",
                "Real-Time Multi-Node Ledger Sync",
                "Deep Financial Intelligence Suite",
                "Biometric Staff Identity & Audit Trails",
                "Automated Cloud Disaster Recovery",
                "Industrial Hardware Protocol Integration",
                "24/7 Priority Engineering Support Channel"
            ],
            cta: "Purchase License",
            highlight: true
        }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-jakarta antialiased selection:bg-teal-100 selection:text-teal-900">
            {/* Header / Hero */}
            <div className="mx-auto px-6 pt-20 pb-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-6 text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
                    >
                        Q-Line Software <span className="text-teal-600">Distribution</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-slate-500 font-medium leading-relaxed"
                    >
                        Choose the version that fits your scale. Fully optimized for Windows 10/11 Architecture.
                    </motion.p>
                </motion.div>
            </div>

            {/* Plans Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-24">
                    {plans.map((plan, i) => (
                        <div key={i} className="flex-1 max-w-md w-full bg-white p-12 flex flex-col items-center text-center space-y-10 border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/20">
                            <div className="space-y-2 flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-bold tracking-tight text-slate-900 uppercase">{plan.name}</h2>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${plan.highlight ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {plan.tag}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 font-normal leading-relaxed">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 w-full flex flex-col items-center">
                                <div className="space-y-4 w-fit">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-4 group">
                                            <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 transition-colors group-hover:bg-teal-100 shrink-0">
                                                <Check size={10} className="text-teal-600" />
                                            </div>
                                            <span className="text-base font-medium text-slate-700 leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </div>
                            </ul>

                            {/* Verification & Action for Free Plan, Placeholder for Pro */}
                            {i === 0 ? (
                                <div className="space-y-6 pt-4 w-full flex flex-col items-center">
                                    <RobotCheck onVerify={setIsVerified} />

                                    <button
                                        disabled={!isVerified || isDownloading}
                                        onClick={() => {
                                            setIsDownloading(true);
                                            setTimeout(() => {
                                                setIsDownloading(false);
                                                window.location.href = '#'; // Simulated download
                                            }, 2000);
                                        }}
                                        className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-xs transition-all ${isVerified
                                            ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 active:scale-95'
                                            : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                                            }`}
                                    >
                                        {isDownloading ? (
                                            <><Loader2 size={16} className="animate-spin" /> Retrieving Build...</>
                                        ) : (
                                            <><Download size={16} /> {plan.cta}</>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="pt-4 w-full mt-auto flex flex-col items-center">
                                    <button className="w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-xs bg-slate-900 text-white hover:bg-slate-800 transition-all group active:scale-95">
                                        {plan.cta}
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* System Info Footnote */}
            <div className="mx-auto px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
                    {[
                        { label: "OS Support", val: "Windows 10/11", icon: <Monitor size={14} /> },
                        { label: "Architecture", val: "x64 Optimized", icon: <Zap size={14} /> },
                        { label: "Security", val: "SHA-256 Verified", icon: <Shield size={14} /> },
                        { label: "Binary Size", val: "Build Optimized", icon: <ArrowRight size={14} /> }
                    ].map((item, i) => (
                        <div key={i} className="space-y-2 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                {item.icon}
                                {item.label}
                            </div>
                            <div className="text-base font-bold text-slate-700">{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Minimal Footer Spacer */}
            <div className="h-20" />
        </main>
    );
}
