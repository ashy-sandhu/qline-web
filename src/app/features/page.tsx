'use client';

import { motion } from 'framer-motion';
import {
    BarChart3,
    Users,
    Settings,
    CreditCard,
    ClipboardCheck,
    Map,
    ShieldCheck,
    Zap,
    TrendingUp,
    Clock,
    LayoutDashboard,
    Printer,
    FileSpreadsheet,
    Wallet,
    ArrowUpRight
} from 'lucide-react';

export default function Features() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const featureGroups = [
        {
            title: "Core Operations",
            description: "High-performance modules for floor and kitchen management.",
            features: [
                {
                    icon: <LayoutDashboard size={32} />,
                    title: "Intelligent POS Terminal",
                    desc: "Touch-optimized interface for lightning-fast order entry. Support for Dine-In, Takeaway, and Home Delivery.",
                    details: ["Order Modifiers", "Kitchen Display Sync", "Split Billing"]
                },
                {
                    icon: <Map size={32} />,
                    title: "Floor Evolution",
                    desc: "Visual representation of your restaurant layout. Track occupancy and waiter assignments in real-time.",
                    details: ["Drag-and-drop seating", "Timed occupancy", "Multi-floor support"]
                },
                {
                    icon: <Printer size={32} />,
                    title: "Hardware Native",
                    desc: "Seamless connectivity with thermal receipt printers and cash drawers without driver headaches.",
                    details: ["Bluetooth/Wi-Fi Print", "Multiple Kitchen Routing", "Auto-Label Gen"]
                }
            ]
        },
        {
            title: "Financial Armor",
            description: "Deep accounting modules that solve the 'missing cash' mystery.",
            features: [
                {
                    icon: <Wallet size={32} />,
                    title: "Voucher Cycles",
                    desc: "Professional Cash Payment (CP) and Cash Receive (CR) vouchers. Track every penny moving in and out.",
                    details: ["Bank Account Integration", "Expense Tracking", "Capital Management"]
                },
                {
                    icon: <ShieldCheck size={32} />,
                    title: "Audit Day Closing",
                    desc: "Automated end-of-day reconciliation. Cross-reference sales and vouchers to ensure 100% accuracy.",
                    details: ["Automatic P&L", "Cash Reconcile", "Closing Summary PDF"]
                },
                {
                    icon: <TrendingUp size={32} />,
                    title: "Intel Analytics",
                    desc: "50+ industry-standard reports. Analyze best-selling items and peak hours with zero effort.",
                    details: ["Hourly Trends", "Inventory Wastage", "Customer Lifespan"]
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--bg-main)] pt-48 pb-24">
            <div className="content-container">
                {/* Header */}
                <section className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-[var(--primary-teal)]/10 rounded-full border border-[var(--primary-teal)]/20"
                    >
                        Feature Library v4.2
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 text-[var(--primary-teal-dark)] leading-tight tracking-tighter">
                        Built for the <br />
                        <span className="text-teal-gradient">Relentless.</span>
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] font-medium max-w-2xl mx-auto">
                        Q-Line is a complete operating system for your restaurant, designed to eliminate operational friction.
                    </p>
                </section>

                {/* Evolutionary Features Map */}
                <div className="flex flex-col gap-32">
                    {featureGroups.map((group, gIdx) => (
                        <motion.div
                            key={gIdx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={stagger}
                            className="relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-l-8 border-[var(--primary-teal)] pl-8">
                                <div>
                                    <h2 className="text-4xl font-black text-[var(--primary-teal-dark)]">{group.title}</h2>
                                    <p className="text-[var(--text-muted)] text-lg font-medium mt-2">{group.description}</p>
                                </div>
                                <div className="text-6xl font-black text-[var(--primary-teal)]/5 tracking-tighter">0{gIdx + 1}</div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {group.features.map((feature, fIdx) => (
                                    <motion.div
                                        key={fIdx}
                                        variants={fadeInUp}
                                        className="premium-card p-10 flex flex-col h-full bg-white shadow-sm"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--primary-teal)]/5 text-[var(--primary-teal)] flex items-center justify-center mb-8 border border-[var(--primary-teal)]/10 group-hover:bg-[var(--primary-teal)] group-hover:text-white transition-all">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-4">{feature.title}</h3>
                                        <p className="text-[var(--text-muted)] text-[15px] font-medium leading-relaxed mb-10">
                                            {feature.desc}
                                        </p>
                                        <div className="mt-auto space-y-3">
                                            {feature.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex items-center gap-2 text-xs font-bold text-[var(--primary-teal-dark)]/70">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)]"></div>
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA */}
                <section className="mt-32">
                    <div className="bg-[var(--primary-teal-dark)] rounded-[60px] p-16 md:p-24 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-teal)_0%,transparent_50%)] opacity-20"></div>
                        <h2 className="text-4xl md:text-6xl font-black mb-12">Stop treating symptoms.</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button className="btn-primary !bg-white !text-[var(--primary-teal-dark)] !px-12 !py-6 text-xl">
                                Request Enterprise Demo
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
