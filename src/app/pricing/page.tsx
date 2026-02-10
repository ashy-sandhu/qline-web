'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    X,
    ChevronRight,
    ChevronDown
} from 'lucide-react';
import OrganicFlowBackground from '../components/OrganicFlowBackground';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        subtitle: 'The Operational Core',
        description: 'Perfect for small cafes, stalls, and quick-service points.',
        prices: {
            '1m': '999',
            '3m': '899',
            '6m': '799',
            '1y': '699'
        },
        color: '#4CAF50',
        icon: '/images/plan_images/starter_plan.png',
        baseFeatures: [
            'Order Management (Sale & Return)',
            'Menu, Deal & Table Management',
            'Thermal Printing (KOT & Bills)',
            'Sales Reports',
            'Operator Permissions',
            'Activity Audit Logs',
            'Detailed Day Closing'
        ],
        additionalFeatures: [],
        accentClass: 'border-green-500 shadow-green-100',
        btnClass: 'bg-[#4CAF50] hover:bg-green-600',
        glowClass: 'bg-green-500/10'
    },
    {
        id: 'regular',
        name: 'Regular',
        subtitle: 'Growth & Credit Control',
        description: 'Empower your team and build customer loyalty with integrated credit billing.',
        prices: {
            '1m': '1,499',
            '3m': '1,399',
            '6m': '1,299',
            '1y': '1,099'
        },
        color: '#FF9800',
        icon: '/images/plan_images/regular_plan.png',
        baseFeatures: [
            'Order Management (Sale & Return)',
            'Menu, Deal & Table Management',
            'Thermal Printing (KOT & Bills)',
            'Sales Reports',
            'Operator Permissions',
            'Activity Audit Logs',
            'Detailed Day Closing'
        ],
        additionalFeatures: [
            'Staff & Customer Accounts',
            'Staff Attendance & Salary',
            'Customer Recovery Vouchers'
        ],
        accentClass: 'border-orange-500 shadow-orange-100',
        btnClass: 'bg-[#FF9800] hover:bg-orange-600',
        glowClass: 'bg-orange-500/10'
    },
    {
        id: 'pro',
        name: 'Pro',
        subtitle: 'Inventory & Vendor Glory',
        description: 'The complete enterprise suite for total inventory and production management.',
        prices: {
            '1m': '2,499',
            '3m': '2,299',
            '6m': '2,099',
            '1y': '1,899'
        },
        color: '#2196F3',
        icon: '/images/plan_images/pro_plan.png',
        baseFeatures: [
            'Order Management',
            'Menu & Table Management',
            'Thermal Printing',
            'Sales Reports & Audit Logs',
            'Customer & Staff Accounts',
            'Staff Attendance & Salary',
            'Recovery Vouchers'
        ],
        additionalFeatures: [
            'Vendor Accounts',
            'Invoices (Purchase & Return)',
            'Cash Receive/Payment Vouchers',
            'Real-time Stock Tracking',
            'Recipe Formula Creation',
            'Production Management',
            'Unified Ledger'
        ],
        accentClass: 'border-blue-500 shadow-blue-100',
        btnClass: 'bg-[#2196F3] hover:bg-blue-600',
        glowClass: 'bg-blue-500/10'
    },
    {
        id: 'business',
        name: 'Business',
        subtitle: 'Total Cloud Freedom',
        description: 'Multi-terminal enterprise system with cloud synchronization.',
        prices: {
            '1m': '3,999',
            '3m': '3,699',
            '6m': '3,399',
            '1y': '3,099'
        },
        color: '#9C27B0',
        icon: '/images/plan_images/cloud_plan.png',
        baseFeatures: [
            'Core POS Operations',
            'Detailed Sales Reports',
            'Full Staff & HR Suite',
            'Complete Inventory Control',
            'Production & Recipes',
            'Unified Ledger',
            'Activity Audit Logs'
        ],
        additionalFeatures: [
            'Multi-Terminal Support',
            'Desktop/Tablet/Mobile Apps',
            'Real-time Cloud Sync',
            'Advanced Permissions',
            '24/7 Priority Support'
        ],
        accentClass: 'border-purple-500 shadow-purple-100',
        btnClass: 'bg-[#9C27B0] hover:bg-purple-600',
        glowClass: 'bg-purple-500/10'
    }
];

const comparisonGroups = [
    {
        category: 'Core Operations',
        color: '#4CAF50', // Green
        features: [
            { name: 'Order Management (Sale & Return Invoices)', plans: [true, true, true, true] },
            { name: 'Menu, Deal, Table & Waiter Management', plans: [true, true, true, true] },
            { name: 'Thermal Printing (KOT, Bills, Transactions)', plans: [true, true, true, true] },
            { name: 'Sales Reports', plans: [true, true, true, true] },
            { name: 'Operator Permissions Restrictions', plans: [true, true, true, true] },
            { name: 'Activity Audit Logs', plans: [true, true, true, true] },
            { name: 'Detailed Day Closing', plans: [true, true, true, true] },
        ]
    },
    {
        category: 'Staff & Credit Accounts',
        color: '#FF9800', // Orange
        features: [
            { name: 'Accounts (Staff & Customers)', plans: [false, true, true, true] },
            { name: 'Staff Attendance & Salary', plans: [false, true, true, true] },
            { name: 'Customer Recovery Vouchers', plans: [false, true, true, true] },
        ]
    },
    {
        category: 'Inventory and Production',
        color: '#2196F3', // Blue
        features: [

            { name: 'Vendor Accounts', plans: [false, false, true, true] },
            { name: 'Invoices (Purchase & Purchase Return)', plans: [false, false, true, true] },
            { name: 'Cash Receive/Payment Vouchers', plans: [false, false, true, true] },
            { name: 'Real-time Stock Tracking', plans: [false, false, true, true] },
            { name: 'Recipe Formula Creation', plans: [false, false, true, true] },
            { name: 'Production Management', plans: [false, false, true, true] },
            { name: 'Unified Ledger', plans: [false, false, true, true] },
        ]
    },
    {
        category: 'Cloud & Ecosystem',
        color: '#9C27B0', // Purple
        features: [
            { name: 'Multi-Terminal Support', plans: [false, false, false, true] },
            { name: 'Desktop/Tablet/Mobile Apps', plans: [false, false, false, true] },
            { name: 'Real-time Cloud Sync', plans: [false, false, false, true] },
            { name: '24/7 Priority Support', plans: [false, false, false, true] },
        ]
    }
];

const durations = [
    { id: '1m', label: '1 Month', unit: 'per month' },
    { id: '3m', label: '3 Months', unit: 'per month' },
    { id: '6m', label: '6 Months', unit: 'per month' },
    { id: '1y', label: '1 Year', unit: 'per month' }
];

export default function PricingPage() {
    const [selectedDuration, setSelectedDuration] = useState(durations[3]); // Default to 1 Year (index 3)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <main className="min-h-screen pt-4 pb-20 relative overflow-hidden bg-white">
            <OrganicFlowBackground />

            <div className="content-container relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20 px-4 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[var(--primary-teal-dark)] mb-6 tracking-tight leading-tight w-full"
                    >
                        The <span className="text-teal-gradient">All-in-One POS</span> Evolution for Modern Dining
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-[var(--text-muted)] font-medium leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        Professional restaurant POS built with Flutter, scaling from basic order handling to full-scale enterprise management across four distinct tiers.
                    </motion.p>

                    {/* Duration Selector */}
                    <div className="relative z-50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal)] mb-3">
                                Select Plan Duration
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-4 px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl shadow-xl shadow-black/5 hover:border-[var(--primary-teal-light)] transition-all duration-300 group min-w-[200px] justify-between"
                                >
                                    <span className="text-sm font-black text-[var(--primary-teal-dark)] uppercase tracking-wider">
                                        {selectedDuration.label}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-[var(--primary-teal)] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-slate-100 shadow-2xl overflow-hidden z-[100]"
                                        >
                                            {durations.map((duration) => (
                                                <button
                                                    key={duration.id}
                                                    onClick={() => {
                                                        setSelectedDuration(duration);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`w-full px-6 py-4 text-left text-xs font-black uppercase tracking-wider transition-colors duration-200 ${selectedDuration.id === duration.id
                                                        ? 'bg-[var(--primary-teal)] text-white'
                                                        : 'text-[var(--primary-teal-dark)] hover:bg-slate-50'
                                                        }`}
                                                >
                                                    {duration.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 px-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className={`premium-card p-1 border-t-8 ${plan.accentClass} flex flex-col h-full bg-white shadow-lg`}
                        >
                            <div className="p-6 flex flex-col items-center flex-grow text-center w-full">
                                {/* Header Block: Icon through Description */}
                                <div className="w-full min-h-[11.5rem] flex flex-col items-center justify-start">
                                    <div className={`w-24 h-24 rounded-3xl ${plan.glowClass} flex items-center justify-center mb-6 relative overflow-hidden shrink-0`}>
                                        <Image
                                            src={plan.icon}
                                            alt={`${plan.name} Icon`}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>

                                    <h3 className="text-xl font-black text-[var(--primary-teal-dark)] mb-1 uppercase tracking-tight w-full">
                                        {plan.name}
                                    </h3>
                                    <p className="text-[10px] font-black text-[var(--primary-teal)] uppercase tracking-widest mb-1 w-full shrink-0">
                                        {plan.subtitle}
                                    </p>

                                    <div className="flex-grow flex items-start justify-center w-full px-2 mt-2">
                                        <p className="text-[var(--text-muted)] text-[13px] font-medium leading-snug">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Pricing Block */}
                                <div className="w-full mt-2 mb-6">
                                    <div className="flex flex-col items-center justify-center h-12">
                                        <span className="text-3xl font-black text-[var(--primary-teal-dark)] leading-none">PKR {plan.prices[selectedDuration.id as keyof typeof plan.prices]}</span>
                                        <span className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-wider mt-1 opacity-70">
                                            / month
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-slate-100 mb-6 shrink-0"></div>

                                <div className="w-full space-y-4 mb-6 flex-grow">
                                    {/* Base Features */}
                                    <ul className="text-left w-full space-y-2">
                                        {plan.baseFeatures.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-2 text-[11px] font-bold text-[var(--primary-teal-dark)]/60">
                                                <div className="mt-0.5 shrink-0">
                                                    <Check size={12} className="opacity-40" style={{ color: plan.color }} />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Additional Features Section */}
                                    {plan.additionalFeatures.length > 0 && (
                                        <div className="pt-4 border-t border-black/5">
                                            <p className="text-[9px] font-black uppercase tracking-[0.1em] mb-3 text-left opacity-80" style={{ color: plan.color }}>
                                                Additional Features
                                            </p>
                                            <ul className="text-left w-full space-y-2">
                                                {plan.additionalFeatures.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-start gap-2 text-[11px] font-black text-[var(--primary-teal-dark)]">
                                                        <div className="mt-0.5 shrink-0">
                                                            <Check size={12} strokeWidth={4} style={{ color: plan.color }} />
                                                        </div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <button className={`w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-black/5 hover:translate-y-[-2px] ${plan.btnClass}`}>
                                    Select Plan
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-6xl mx-auto px-4"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tight">
                            Detailed Feature Comparison
                        </h2>
                        <p className="text-[var(--text-muted)] mt-2 font-medium">Find the perfect plan for your business needs</p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm rounded-[32px] border border-black/5 overflow-hidden shadow-2xl shadow-teal-900/5">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-black/5 bg-slate-50/50">
                                        <th className="py-4 px-10 text-[11px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)] min-w-[280px]">Feature Capability</th>
                                        {plans.map(plan => (
                                            <th key={plan.id} className="py-4 px-4 text-center text-[11px] font-black uppercase tracking-widest" style={{ color: plan.color }}>
                                                {plan.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonGroups.map((group, gIndex) => (
                                        <React.Fragment key={gIndex}>
                                            <tr className="bg-slate-100/30">
                                                <td colSpan={5} className="py-3 px-10 text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: group.color }}>
                                                    {group.category}
                                                </td>
                                            </tr>
                                            {group.features.map((feature, fIndex) => (
                                                <tr key={fIndex} className="border-b border-black/5 last:border-0 hover:bg-[var(--primary-teal)]/5 transition-colors">
                                                    <td className="py-3 px-10 text-sm font-bold text-[var(--primary-teal-dark)]/90">{feature.name}</td>
                                                    {feature.plans.map((isIncluded, planIndex) => (
                                                        <td key={planIndex} className="py-3 px-4 text-center">
                                                            <div className="flex justify-center">
                                                                {isIncluded ? (
                                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow-md" style={{ backgroundColor: plans[planIndex].color }}>
                                                                        <Check size={12} strokeWidth={4} />
                                                                    </div>
                                                                ) : (
                                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-slate-300 bg-slate-200/50">
                                                                        <X size={12} strokeWidth={4} className="opacity-40" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="mt-32 text-center bg-[var(--primary-teal-dark)] rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-black/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-teal)]/10 blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] -ml-48 -mb-48"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight"> Ready to Evolve Your Restaurant? </h2>
                        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-medium"> Connect with our activation specialists today for a personalized demonstration and custom rollout plan. </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="btn-primary !py-5 !px-10 !text-sm">
                                <span className="font-black uppercase tracking-widest">Book a Demo Now</span>
                                <ChevronRight size={18} />
                            </button>
                            <button className="text-white font-black uppercase tracking-widest text-xs hover:text-[var(--primary-teal)] transition-colors py-4 px-8 border-2 border-white/20 rounded-full hover:border-[var(--primary-teal)]">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
