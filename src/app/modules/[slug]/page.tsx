'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    ChevronLeft,
    Zap,
    ShieldCheck,
    BarChart3,
    Users,
    Lock,
    Globe,
    MonitorSmartphone,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const moduleData: Record<string, any> = {
    'pos-node': {
        title: "Intelligent POS Node",
        tagline: "High-Velocity Transaction Engine",
        description: "The heartbeat of your floor operations. Designed for high-pressure environments where every millisecond counts.",
        fullDesc: "Our Intelligent POS Node isn't just a checkout tool; it's a mission control center for your restaurant. Built on a zero-latency architecture, it handles complex floor plans, instant order routing to KDS, and real-time synchronization across all devices.",
        features: [
            "Dynamic Floor Mapping: Real-time table status and server assignments.",
            "Lightning Takeaway: Optimized 3-tap order flow for quick service.",
            "Delivery Pulse: Native integration with global delivery partners.",
            "Split-Bill Intelligence: Sophisticated item and seat-based splitting logic."
        ],
        stats: [
            { label: "Sync Speed", value: "0.1ms" },
            { label: "Stability", value: "99.9%" },
            { label: "Efficiency", value: "x2" }
        ],
        image: "/images/modules/pos_node.png",
        color: "var(--primary-teal)"
    },
    'ledger': {
        title: "Forensic Ledger",
        tagline: "Military-Grade Financial Sovereignty",
        description: "Uncompromising financial auditing and debit recovery protocols for complete revenue protection.",
        fullDesc: "The Forensic Ledger module brings industrial-strength accounting to the hospitality sector. It tracks every cent with military precision, managing CP/CR vouchers, credit customer balances, and automated bank reconciliations.",
        features: [
            "Debit Recovery: Automated tracking and reminders for credit customers.",
            "Voucher Cycles: Sophisticated Cash Payment and Cash Receive workflows.",
            "Audit Trail: Permanent, immutable logs of every financial transaction.",
            "Bank Recon: Instant matching of digital payments with physical bank records."
        ],
        stats: [
            { label: "Accuracy", value: "100%" },
            { label: "Leakage", value: "0%" },
            { label: "Audit Time", value: "-80%" }
        ],
        image: "/images/modules/ledger.png",
        color: "#0ea5e9"
    },
    'attendance': {
        title: "Attendance Matrix",
        tagline: "Biometric Workforce Synchronization",
        description: "Advanced staff management feeding automated salary logic with biometric precision.",
        fullDesc: "Eliminate payroll friction with our Attendance Matrix. It uses biometric gates and smart geo-fencing to track staff shifts, calculate late-tolerances, and automate deduction reconciliations without human error.",
        features: [
            "Biometric Integration: Fingerprint and facial recognition support.",
            "Salary Automator: Instant payroll generation based on actual attendance.",
            "Shift Matrix: Complex scheduling with automated over-time logic.",
            "Leave Sovereignty: Digital leave application and balance tracking."
        ],
        stats: [
            { label: "Clock-in Accuracy", value: "100%" },
            { label: "Payroll Speed", value: "Instant" },
            { label: "Staff Satisfaction", value: "+40%" }
        ],
        image: "/images/modules/attendance.png",
        color: "#10b981"
    },
    'analytics': {
        title: "Revenue Pulse",
        tagline: "Total Operational Visibility",
        description: "Live inventory velocity and sales performance mapped to 50+ forensic reports.",
        fullDesc: "Knowledge is power. Revenue Pulse transforms raw data into actionable intelligence. Monitor stock depletion in real-time, predict busy periods, and identify top-performing menu items with zero delay.",
        features: [
            "Live Velocity: Real-time tracking of every stock item's movement.",
            "Forensic Reporting: 50+ industrial-grade reports for deep analysis.",
            "Predictive AI: Demand forecasting based on historical patterns.",
            "Leakage Detection: Automated variance alerts between stock and sales."
        ],
        stats: [
            { label: "Reports", value: "50+" },
            { label: "Data Latency", value: "Zero" },
            { label: "Insights", value: "Real-time" }
        ],
        image: "/images/modules/analytics.png",
        color: "#f59e0b"
    },
    'audit': {
        title: "The Audit Protocol",
        tagline: "Uncompromising Security Shield",
        description: "Role-based encryption and mandatory closure protocols for absolute data integrity.",
        fullDesc: "Secure your enterprise with The Audit Protocol. This module ensures that every day is closed correctly, every override is authorized, and every byte of sensitive data is protected by industry-leading encyption.",
        features: [
            "Mandatory Closure: Strict system gates for day-end reconciliation.",
            "Role Sovereignty: Granular permission matrix for every staff level.",
            "Override Shield: Real-time manager authorization for critical actions.",
            "Encryption Core: Military-grade data protection at rest and in transit."
        ],
        stats: [
            { label: "Security Level", value: "L5" },
            { label: "Breach Risk", value: "0%" },
            { label: "Encryption", value: "AES-256" }
        ],
        image: "/images/modules/audit.png",
        color: "#a855f7"
    },
    'cloud': {
        title: "Cloud Sovereignty",
        tagline: "Native Performance, Global Reach",
        description: "A single military-grade core delivering 60FPS performance across every platform.",
        fullDesc: "Experience total flexibility with Cloud Sovereignty. Powered by Google's Flutter engine, Q-Line provides a unified experience across Web, Mobile, and Desktop with instant data synchronization and offline-first reliability.",
        features: [
            "60FPS Native: Direct-to-canvas rendering on any device.",
            "Quantum Sync: Instant state synchronization via cloud nodes.",
            "Offline First: Full operational capability even without internet.",
            "Universal Support: Single core for iOS, Android, Windows, and Web."
        ],
        stats: [
            { label: "Cross Platform", value: "100%" },
            { label: "Frame Rate", value: "60FPS" },
            { label: "Nodes Connected", value: "Infinite" }
        ],
        image: "/images/modules/cloud_sovereignty.png",
        color: "#26a69a"
    }
};

export default function ModuleDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const data = moduleData[slug];

    if (!data) return (
        <div className="min-h-screen flex items-center justify-center font-black text-2xl">
            MODULE_NOT_FOUND
        </div>
    );

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--bg-main)]">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[var(--primary-teal)]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[var(--accent-blue)]/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="content-container relative z-10">
                    <Link
                        href="/#anatomy"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[var(--primary-teal)] transition-colors mb-12 shadow-sm"
                    >
                        <ChevronLeft size={16} />
                        Back to Anatomy
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] text-[10px] font-black uppercase tracking-widest mb-6">
                                <Zap size={12} />
                                Module Excellence
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-[var(--primary-teal-dark)] leading-tight mb-6 tracking-tighter">
                                {data.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-[var(--primary-teal)] mb-8 tracking-tight">
                                {data.tagline}
                            </p>
                            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-xl font-medium">
                                {data.description}
                            </p>
                            <div className="flex gap-4">
                                <button className="btn-primary">
                                    Request Module Demo
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative aspect-video rounded-3xl overflow-hidden shadow-4xl border-[12px] border-white ring-1 ring-black/5"
                        >
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            {/* Floating Stat Badges */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                                {data.stats.map((stat: any, i: number) => (
                                    <div key={i} className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                        <div className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">{stat.label}</div>
                                        <div className="text-lg font-black">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-24 bg-white">
                <div className="content-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-8 mb-16">
                            <div className="h-px flex-1 bg-black/5"></div>
                            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 whitespace-nowrap">The Intelligence Deep Dive</h2>
                            <div className="h-px flex-1 bg-black/5"></div>
                        </div>

                        <div className="mb-20">
                            <h3 className="text-2xl md:text-4xl font-black text-[var(--primary-teal-dark)] mb-8 tracking-tighter">
                                Engineering for <span className="text-teal-gradient">Industrial Stability.</span>
                            </h3>
                            <p className="text-xl text-[var(--text-muted)] leading-relaxed font-medium mb-12">
                                {data.fullDesc}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {data.features.map((feature: string, i: number) => {
                                    const [title, desc] = feature.split(': ');
                                    return (
                                        <div key={i} className="p-8 rounded-[32px] bg-[var(--bg-main)] border border-black/5 group hover:border-[var(--primary-teal)]/20 transition-all">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[var(--primary-teal)] mb-6 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <h4 className="text-xl font-black text-[var(--primary-teal-dark)] mb-3">{title}</h4>
                                            <p className="text-[var(--text-muted)] font-medium leading-relaxed">{desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dummy Showcase Section */}
                        <div className="space-y-12">
                            <div className="text-center">
                                <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tight mb-2">Interface Experience</h3>
                                <div className="h-1 w-12 bg-[var(--primary-teal)] mx-auto rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="aspect-[4/3] rounded-3xl bg-gray-100 border border-dashed border-black/10 flex items-center justify-center overflow-hidden group">
                                    <div className="text-xs font-black uppercase text-gray-400 group-hover:scale-110 transition-transform tracking-widest">[Primary Workspace Mockup]</div>
                                </div>
                                <div className="aspect-[4/3] rounded-3xl bg-gray-100 border border-dashed border-black/10 flex items-center justify-center overflow-hidden group">
                                    <div className="text-xs font-black uppercase text-gray-400 group-hover:scale-110 transition-transform tracking-widest">[Secondary Interface Mockup]</div>
                                </div>
                            </div>

                            <div className="w-full aspect-[21/9] rounded-3xl bg-gray-100 border border-dashed border-black/10 flex items-center justify-center overflow-hidden group">
                                <div className="text-xs font-black uppercase text-gray-400 group-hover:scale-110 transition-transform tracking-widest">[Panoramic Operational View]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[var(--primary-teal-dark)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-teal)_0%,transparent_70%)] opacity-20"></div>
                <div className="content-container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready to Deploy {data.title}?</h2>
                    <div className="flex justify-center gap-6">
                        <button className="btn-primary !bg-white !text-[var(--primary-teal-dark)] hover:!scale-105">
                            Contact Sales Matrix
                        </button>
                        <Link href="/#anatomy" className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                            Explore Other Modules
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
