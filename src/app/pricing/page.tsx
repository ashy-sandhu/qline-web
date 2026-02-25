'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    X,
    ChevronRight,
    ChevronDown,
    CreditCard,
    Smartphone,
    Wallet,
    Lock
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
    { id: '1m', label: '1 Month', months: 1 },
    { id: '3m', label: '3 Months', months: 3 },
    { id: '6m', label: '6 Months', months: 6 },
    { id: '1y', label: '1 Year', months: 12 }
];

const formatPKR = (num: number) => {
    return num.toLocaleString('en-US');
};

const parsePKR = (str: string) => {
    return parseInt(str.replace(/,/g, ''), 10);
};

const paymentMethods = [
    { id: 'jazzcash', name: 'JazzCash / EasyPaisa', icon: Smartphone, color: '#DE0000', desc: 'Pay via Mobile Wallet' },
    { id: 'safepay', name: 'Debit / Credit Card', icon: CreditCard, color: '#1A1F71', desc: 'Secure card payment via Safepay' },
    { id: 'bank', name: 'Bank Transfer', icon: Wallet, color: '#10b981', desc: 'Direct IBFT / Raast' }
];

export default function PricingPage() {
    const [selectedDuration, setSelectedDuration] = useState(durations[3]); // Default to 1 Year (index 3)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activePlan, setActivePlan] = useState<any>(null);
    const [checkoutStep, setCheckoutStep] = useState<'summary' | 'processing' | 'success'>('summary');
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const openCheckout = (plan: any) => {
        setActivePlan(plan);
        setCheckoutStep('summary');
        setSelectedPayment(null);
    };

    const handlePayment = () => {
        if (!selectedPayment) return;
        setCheckoutStep('processing');
        setTimeout(() => {
            setCheckoutStep('success');
        }, 2500);
    };

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
                    <div className="relative z-50 mt-5! mb-10!">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4! px-4">
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
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-3xl font-black text-[var(--primary-teal-dark)] leading-none">
                                                PKR {plan.prices[selectedDuration.id as keyof typeof plan.prices]}
                                            </span>
                                            <span className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-wider mt-1 opacity-70">
                                                / month
                                            </span>
                                        </div>
                                        <div className="mt-3 flex flex-col items-center text-center">
                                            {selectedDuration.months > 1 && (
                                                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wide">
                                                    Total: PKR {formatPKR(parsePKR(plan.prices[selectedDuration.id as keyof typeof plan.prices]) * selectedDuration.months)} for {selectedDuration.label}
                                                </span>
                                            )}
                                            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-tight mt-0.5">
                                                *Plus applicable taxes
                                            </span>
                                        </div>
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

                                <button
                                    onClick={() => openCheckout(plan)}
                                    className={`w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-lg ${plan.btnClass}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table Section */}
                <div className="content-container relative z-10 py-24 border-t border-slate-100">
                    <div className="mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[var(--primary-teal-dark)] mb-4">Compare Features</h2>
                            <p className="text-[var(--text-muted)] font-medium">Find the perfect set of tools for your business growth.</p>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100 bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="py-6 px-8 text-sm font-black text-[var(--primary-teal-dark)]/50 uppercase tracking-widest border-b border-slate-100">Feature</th>
                                        {plans.map(plan => (
                                            <th key={plan.id} className="py-6 px-4 text-center border-b border-slate-100">
                                                <span className="text-xs font-black uppercase tracking-widest" style={{ color: plan.color }}>{plan.name}</span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonGroups.map((group, gIndex) => (
                                        <React.Fragment key={gIndex}>
                                            <tr style={{ backgroundColor: `${group.color}10` }}>
                                                <td colSpan={5} className="py-4 px-8 text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: group.color }}>
                                                    {group.category}
                                                </td>
                                            </tr>
                                            {group.features.map((feature, fIndex) => (
                                                <tr key={fIndex} className="group hover:bg-slate-50 transition-colors duration-150">
                                                    <td className="py-3 px-8 text-xs font-bold text-[var(--primary-teal-dark)] border-b border-slate-50">{feature.name}</td>
                                                    {feature.plans.map((included, pIndex) => (
                                                        <td key={pIndex} className="py-3 px-4 text-center border-b border-slate-50">
                                                            {included ? (
                                                                <div className="flex justify-center">
                                                                    <Check size={18} className="text-teal-500" strokeWidth={3} />
                                                                </div>
                                                            ) : (
                                                                <div className="flex justify-center">
                                                                    <X size={14} className="text-slate-200" />
                                                                </div>
                                                            )}
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
                </div>

                {/* Checkout Modal Overlay */}
                <AnimatePresence>
                    {activePlan && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActivePlan(null)}
                                className="absolute inset-0 bg-[var(--primary-teal-dark)]/40 backdrop-blur-sm"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setActivePlan(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>

                                <div className="p-10">
                                    {checkoutStep === 'summary' && (
                                        <>
                                            <div className="mb-8">
                                                <div className="flex items-center gap-2 text-[var(--primary-teal)] mb-2">
                                                    <Lock size={14} strokeWidth={3} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Secure Checkout</span>
                                                </div>
                                                <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-2 uppercase tracking-tight">Subscribe Now</h3>
                                                <p className="text-sm font-medium text-[var(--text-muted)]">Order #QL-{Math.floor(1000 + Math.random() * 9000)}</p>
                                            </div>

                                            <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-black/5">
                                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-black/5">
                                                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">Selected Plan</span>
                                                    <div className="text-right">
                                                        <span className="block text-sm font-black text-[var(--primary-teal-dark)] uppercase">{activePlan.name} Tier</span>
                                                        <span className="block text-[10px] font-bold text-[var(--text-muted)] uppercase">{selectedDuration.label} / Billed monthly</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-black uppercase tracking-wider text-slate-400">Total Amount</span>
                                                        <span className="text-[9px] font-bold text-slate-400 uppercase">*Plus applicable taxes</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xl font-black text-[var(--primary-teal)]">
                                                            PKR {formatPKR(parsePKR(activePlan.prices[selectedDuration.id]) * selectedDuration.months)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal)] mb-4">
                                                    Payment Method
                                                </label>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {paymentMethods.map((method) => (
                                                        <button
                                                            key={method.id}
                                                            onClick={() => setSelectedPayment(method.id)}
                                                            className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedPayment === method.id
                                                                ? 'border-[var(--primary-teal)] bg-[var(--primary-teal)]/5 shadow-md'
                                                                : 'border-slate-100 bg-white hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${selectedPayment === method.id ? 'bg-[var(--primary-teal)] text-white' : 'bg-slate-50 text-slate-400'}`}>
                                                                <method.icon size={20} strokeWidth={2.5} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <span className="block text-xs font-black uppercase tracking-wider text-[var(--primary-teal-dark)]">{method.name}</span>
                                                                <span className="block text-[10px] font-medium text-[var(--text-muted)]">{method.desc}</span>
                                                            </div>
                                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedPayment === method.id ? 'border-[var(--primary-teal)] bg-[var(--primary-teal)]' : 'border-slate-200'}`}>
                                                                {selectedPayment === method.id && <Check size={12} strokeWidth={4} className="text-white" />}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                disabled={!selectedPayment}
                                                onClick={handlePayment}
                                                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-xl shadow-[var(--primary-teal)]/20 ${selectedPayment
                                                    ? 'bg-[var(--primary-teal)] text-white hover:bg-[var(--primary-teal-dark)]'
                                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                Pay Now
                                            </button>
                                        </>
                                    )}

                                    {checkoutStep === 'processing' && (
                                        <div className="py-20 flex flex-col items-center justify-center">
                                            <div className="w-16 h-16 border-4 border-slate-100 border-t-[var(--primary-teal)] rounded-full animate-spin mb-8"></div>
                                            <h3 className="text-xl font-black text-[var(--primary-teal-dark)] mb-2 uppercase tracking-tight">Processing Payment</h3>
                                            <p className="text-sm font-medium text-[var(--text-muted)]">Please wait while we secure your session...</p>
                                        </div>
                                    )}

                                    {checkoutStep === 'success' && (
                                        <div className="py-10 flex flex-col items-center justify-center text-center">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
                                                <Check size={40} className="text-green-500" strokeWidth={4} />
                                            </div>
                                            <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-3 uppercase tracking-tight">Welcome to Q-Line!</h3>
                                            <p className="text-sm font-medium text-[var(--text-muted)] mb-8 leading-relaxed max-w-[260px]">
                                                Your {activePlan.name} subscription is now active. Let's get your store started.
                                            </p>
                                            <button
                                                onClick={() => setActivePlan(null)}
                                                className="px-10 py-4 bg-[var(--primary-teal-dark)] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
                                            >
                                                Go to Dashboard
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
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
