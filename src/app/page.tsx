'use client';

import React from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  BarChart3,
  Users,
  LayoutDashboard,
  Wallet,
  ShieldCheck,
  MonitorSmartphone,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Layers,
  Fingerprint,
  ShieldAlert,
  Lock,
  Activity,
  LayoutGrid
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- NARRATIVE MOTION ICONS ---

const POSNodeAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-4 h-4 rounded-full bg-[var(--primary-teal)]"
    />
    {[0, 90, 180, 270].map((rot) => (
      <motion.div
        key={rot}
        animate={{ x: [0, rot === 90 || rot === 270 ? 0 : rot === 0 ? 20 : -20], y: [0, rot === 0 || rot === 180 ? 0 : rot === 90 ? 20 : -20], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: rot / 360 }}
        className="absolute w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)]"
      />
    ))}
    <LayoutDashboard size={24} className="relative z-10" />
  </div>
);

const LedgerAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ y: [-15, 15] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      className="absolute w-full h-[2px] bg-amber-400/30 blur-sm"
    />
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="text-amber-500"
    >
      <Wallet size={32} />
    </motion.div>
    <div className="absolute inset-0 flex flex-col justify-around py-2 items-center opacity-20 text-amber-500">
      {[1, 2, 3].map(i => <div key={i} className="w-6 h-[1px] bg-current" />)}
    </div>
  </div>
);

const AttendanceAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-t-2 border-r-2 border-[var(--primary-teal)]/20 rounded-full"
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Fingerprint size={32} />
    </motion.div>
    <motion.div
      animate={{ height: [0, 20, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute bottom-0 w-[2px] bg-[var(--primary-teal)]"
    />
  </div>
);

const PulseAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 50">
      <motion.path
        d="M0 25 L15 25 L20 10 L30 40 L35 25 L50 25"
        fill="transparent"
        stroke="#0ea5e9"
        strokeWidth="2"
        animate={{ pathLength: [0, 1], pathOffset: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    <BarChart3 size={24} className="relative z-10 opacity-40 text-sky-500" />
  </div>
);

const AuditAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ rotateY: [0, 180, 360] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="text-purple-500"
    >
      <ShieldCheck size={32} />
    </motion.div>
    <motion.div
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl"
    />
  </div>
);

const CloudAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute inset-0 border border-sky-400/20 rounded-full"
    />
    <motion.div
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-sky-500"
    >
      <MonitorSmartphone size={32} />
    </motion.div>
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]"
    />
  </div>
);

const QuantumPOSAnim = () => (
  <div className="relative w-8 h-8">
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        animate={{ x: [0, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        className="h-1 bg-[var(--primary-teal)]/40 rounded-full mb-2"
        style={{ width: i === 1 ? '100%' : '60%' }}
      />
    ))}
    <LayoutDashboard size={20} className="absolute -left-6 top-2 text-[var(--primary-teal)]" />
  </div>
);

const BioHRAnim = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute w-12 h-12 border border-dashed border-[var(--primary-teal)]/30 rounded-full"
    />
    <Fingerprint size={24} className="text-[var(--primary-teal)]" />
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-10 h-10 bg-[var(--primary-teal)] rounded-full blur-md"
    />
  </div>
);

const ForensicLedgerV4Anim = () => (
  <div className="relative w-8 h-8">
    <motion.div
      animate={{ scaleY: [1, 1.2, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-amber-500"
    >
      <ShieldAlert size={28} />
    </motion.div>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
    />
  </div>
);

const ClosureAnim = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-14 h-14 border-b-2 border-l-2 border-amber-400/40 rounded-full"
    />
    <Lock size={24} className="text-amber-500" />
    <motion.div
      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-6 h-6 border-2 border-amber-500 rounded-full"
    />
  </div>
);

// --- COMMAND CENTER INTELLIGENCE NODES ---

const RevenueVelocityNode = () => (
  <div className="relative w-full h-full min-h-[160px] flex items-end overflow-hidden rounded-3xl bg-black/5 border border-white/10">
    <motion.div
      initial={{ height: "30%" }}
      animate={{ height: ["40%", "65%", "55%", "80%", "60%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-gradient-to-t from-[var(--primary-teal)] to-[var(--primary-teal-light)] relative"
    >
      <div className="absolute top-0 left-0 right-0 h-4 bg-white/30 skew-y-2 blur-sm" />
      <div className="absolute top-4 left-4 text-white/50 text-[10px] font-black uppercase tracking-widest">Live Flow</div>
    </motion.div>
    <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
      <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white font-black text-2xl tracking-tighter">
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >$</motion.span>
        8,420
      </div>
    </div>
  </div>
);

const ForensicStreamNode = () => (
  <div className="relative w-full h-full min-h-[160px] bg-[var(--primary-teal-dark)] rounded-3xl p-4 overflow-hidden border border-[var(--primary-teal)]/20 shadow-inner">
    <motion.div
      animate={{ y: [0, -200] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="space-y-4"
    >
      {[
        "BILLING: TABLE 12 SAVED",
        "INVENTORY: STOCK -1",
        "AUTH: MANAGER LOGIN",
        "SYNC: CLOUD VERIFIED",
        "REVENUE: $140 ADDED",
        "LEDGER: CR VOUCHER 042",
        "BILLING: DELIVERY READY",
        "AUDIT: DAY CLOSING INIT",
        "BILLING: TABLE 08 PAY",
        "REVENUE: $42 ADDED",
        "SYNC: MOBILE LINKED",
      ].map((log, i) => (
        <div key={i} className="text-[9px] font-black tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)] animate-pulse" />
          <span className="text-white/60 uppercase">{log}</span>
          <span className="ml-auto text-white/20">0.00{i}ms</span>
        </div>
      ))}
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-teal-dark)] via-transparent to-[var(--primary-teal-dark)] pointer-events-none" />
  </div>
);

const NeuralPerformanceNode = () => (
  <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-gray-50 rounded-3xl border border-black/5 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {[1, 2, 3].map(i => (
        <div key={i} className="absolute border border-black/[0.03] rounded-full" style={{ width: i * 60, height: i * 60 }} />
      ))}
    </div>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute w-[200px] h-[200px] bg-gradient-to-r from-[var(--primary-teal)]/10 to-transparent rounded-full origin-center"
      style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
    />
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      className="absolute top-12 right-20 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"
    />
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      className="absolute bottom-16 left-24 w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_orange]"
    />
    <Users size={32} className="text-[var(--primary-teal-dark)]/20 relative z-10" />
  </div>
);

const InventoryFrictionNode = () => (
  <div className="relative w-full h-full min-h-[160px] bg-white rounded-3xl p-6 flex flex-col justify-end border border-black/5 shadow-2xl shadow-black/5">
    <div className="flex gap-1 mb-6 items-end">
      {[40, 70, 45, 90, 65, 30, 85].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 1, delay: i * 0.1 }}
          className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-red-400' : 'bg-[var(--primary-teal)]/40'}`}
        />
      ))}
    </div>
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Stock Velocity</span>
        <span className="text-xl font-black text-[var(--primary-teal-dark)]">92.4 <span className="text-xs text-emerald-500">%</span></span>
      </div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500"
      >
        <Sparkles size={16} />
      </motion.div>
    </div>
  </div>
);

// --- OPERATIONAL ECOSYSTEM COMPONENTS ---

const PartnerTile = ({ name, nodeID }: { name: string, nodeID: string }) => (
  <div className="group relative bg-white/40 backdrop-blur-xl rounded-[32px] border border-black/[0.03] p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
    <div className="flex justify-between items-start">
      <div className="text-[10px] font-black tracking-[0.3em] text-[var(--primary-teal)]/40 uppercase">NODE_{nodeID}</div>
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
    </div>
    <div className="h-20 flex items-center justify-center py-3 grayscale group-hover:grayscale-0 transition-all duration-700">
      <span className="text-xl font-black text-[var(--primary-teal-dark)]/10 group-hover:text-[var(--primary-teal-dark)] transition-colors tracking-tighter uppercase">{name}</span>
    </div>
    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border-t border-black/5 pt-3">Operational Center</div>
  </div>
);

const MetricTile = ({ label, value, trend }: { label: string, value: string, trend: string }) => (
  <div className="bg-[var(--primary-teal-dark)] rounded-[32px] p-8 flex flex-col justify-between border border-white/5">
    <div className="text-[10px] font-black tracking-[0.3em] text-[var(--primary-teal)] uppercase">{label}</div>
    <div className="my-5">
      <div className="text-3xl font-black text-white tracking-tighter">{value}</div>
      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">{trend}</div>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "70%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-[var(--primary-teal)]"
      />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] overflow-x-hidden">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 -z-20 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[var(--primary-teal)] blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--accent-blue)] blur-[100px] animation-delay-2000"></div>
      </div>

      {/* Text Header Section - Immediately after Navbar */}
      <section className="pb-16 md:pb-6 bg-white relative overflow-hidden">
        {/* Subtle Background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary-teal)]/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[var(--accent-blue)]/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="content-container relative z-10 w-full text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto flex flex-col items-center"
          >
            {/* V4.0 Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--primary-teal)]/5 text-[var(--primary-teal)] text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-[var(--primary-teal)]/10"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary-teal)]"></span>
              </div>
              Quantum Engine V4.0
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-[900] text-[var(--primary-teal-dark)] leading-[1.15] tracking-[-0.04em] mb-6"
            >
              The OS for <br />
              <span className="text-teal-gradient">Dominating</span> the Floor.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mb-8 leading-relaxed font-medium opacity-90"
            >
              Precision-engineered for high-pressure dining. Zero lag, military-grade financial auditing, and biometric staff sync.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <button className="btn-primary !px-10 !py-5 !text-lg !rounded-2xl shadow-2xl group hover:scale-105 transition-all">
                Claim Your Evolution
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section - With Corner Floating Elements */}
      <section className="relative px-2 bg-white overflow-visible">
        <div className="max-w-[1700px] mx-auto relative w-full">

          {/* Main Container for Video and its framing elements */}
          <div className="relative w-full">

            {/* Corner Elements - Positioned relative to this container */}
            {/* Badge 1: Top Left - Latency */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20, y: -20 }}
              whileInView={{
                opacity: 1,
                x: 12,
                y: -55,
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
              }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 z-30 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, -8, 5, 0], x: [0, 5, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(38, 166, 154, 0.3)" }}
                className="dark-glass py-2 md:py-2.5 pl-2.5 md:pl-3 pr-5 md:pr-8 rounded-[18px] md:rounded-[24px] flex items-center gap-3 md:gap-4 border-white/10 border shadow-2xl backdrop-blur-3xl"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Zap size={18} className="fill-[var(--primary-teal)] md:w-5 md:h-5 drop-shadow-[0_0_8px_var(--primary-teal)]" />
                </div>
                <div className="text-left">
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/40 tracking-[0.25em] mb-0.5 leading-none">Latency</div>
                  <div className="text-xs md:text-xl font-black text-white leading-none tabular-nums">0.1ms</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 2: Top Right - Uptime */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
              whileInView={{
                opacity: 1,
                x: -12,
                y: -55,
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
              }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 z-30 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 10, -8, 0], x: [0, -5, 3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
                className="dark-glass py-2 md:py-2.5 pl-2.5 md:pl-3 pr-5 md:pr-8 rounded-[18px] md:rounded-[24px] flex items-center gap-3 md:gap-4 border-white/10 border shadow-2xl backdrop-blur-3xl"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <ShieldCheck size={18} className="md:w-5 md:h-5 text-[var(--accent-blue)] drop-shadow-[0_0_8px_var(--accent-blue)]" />
                </div>
                <div className="text-left">
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/40 tracking-[0.25em] mb-0.5 leading-none">Uptime</div>
                  <div className="text-xs md:text-xl font-black text-white leading-none tabular-nums">99.9%</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 3: Bottom Left - Global Sync */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
              whileInView={{
                opacity: 1,
                x: 12,
                y: 55,
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
              }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 z-30 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 8, -5, 0], x: [0, 6, -4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
                className="dark-glass py-2 md:py-2.5 pl-2.5 md:pl-3 pr-5 md:pr-8 rounded-[18px] md:rounded-[24px] flex items-center gap-3 md:gap-4 border-white/10 border shadow-2xl backdrop-blur-3xl"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <LayoutGrid size={18} className="md:w-5 md:h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,1)]" />
                </div>
                <div className="text-left">
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/40 tracking-[0.25em] mb-0.5 leading-none">Global</div>
                  <div className="text-xs md:text-lg font-black text-white leading-none tracking-tight">SYNC</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 4: Bottom Right - AI Audit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20, y: 20 }}
              whileInView={{
                opacity: 1,
                x: -12,
                y: 55,
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }
              }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 z-30 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, -10, 8, 0], x: [0, -6, 4, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
                className="dark-glass py-2 md:py-2.5 pl-2.5 md:pl-3 pr-5 md:pr-8 rounded-[18px] md:rounded-[24px] flex items-center gap-3 md:gap-4 border-white/10 border shadow-2xl backdrop-blur-3xl"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <BarChart3 size={18} className="md:w-5 md:h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,1)]" />
                </div>
                <div className="text-left">
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/40 tracking-[0.25em] mb-0.5 leading-none">Audit</div>
                  <div className="text-xs md:text-lg font-black text-white leading-none">L5 AI</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Ambient Background Glow for Video */}
            <div className="absolute inset-[-10%] bg-[var(--primary-teal)]/5 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none"></div>


            {/* The Video Module Container */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] md:h-[70vh] w-full rounded-[30px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(38,166,154,0.2)] border-[4px] md:border-[12px] border-white ring-1 ring-black/5 group z-10"
            >
              {/* HUD Element: Engine Badge (Top Center Inside Frame) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
              >
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: [4, 10, 4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-0.5 bg-[var(--primary-teal)] rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-[7.5px] md:text-[10px] font-black text-white/90 tracking-[0.15em] md:tracking-[0.3em] uppercase whitespace-nowrap">Flutter Core Active</span>
                  <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-teal)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[var(--primary-teal)]"></span>
                  </div>
                </div>
              </motion.div>
              <motion.video
                autoPlay
                muted
                loop
                playsInline
                animate={{
                  objectPosition: ["0% 20%", "20% 20%"],
                  scale: [1.05, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse"
                }}
                className="w-full h-full object-cover transition-transform duration-[15s] ease-out"
              >
                <source src="/video/hero-section-video.mp4" type="video/mp4" />
              </motion.video>

              {/* Glass Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-teal-dark)]/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>

              {/* Internal Interface Elements - Making it look like a real POS Screen */}
              {/* Left HUD: System info */}
              <div className="absolute top-48 left-10 md:top-60 md:left-20 hidden md:block">
                <div className="flex flex-col text-white/40">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal)]">System</span>
                  <span className="text-xl font-black">Q-LINE v4.0</span>
                </div>
              </div>

              {/* Right HUD: Interface info */}
              <div className="absolute top-48 right-10 md:top-60 md:right-20 hidden md:block">
                <div className="flex flex-col text-right text-white/40">
                  <span className="text-[10px] font-black uppercase tracking-widest">Interface</span>
                  <span className="text-xl font-bold">FLUTTER_UI</span>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 md:bottom-12 md:right-12">
                <div className="glass-panel !bg-white/10 !backdrop-blur-3xl !border-white/20 px-2 py-1 md:px-5 md:py-3 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 text-white hover:scale-105 transition-transform border">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--primary-teal)]/20 flex items-center justify-center border border-white/20">
                    <div className="w-0 h-0 border-t-[4px] md:border-t-[5px] border-t-transparent border-l-[7px] md:border-l-[9px] border-l-white border-b-[4px] md:border-b-[5px] border-b-transparent ml-0.5 md:ml-1"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-60 leading-none mb-0.5 md:mb-1">Production Build</span>
                    <span className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-widest leading-none">Live Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forced 3-Column Grid Section */}
      <section id="anatomy" className="bg-white relative scroll-mt-24">
        <div className="content-container">
          <div className="text-center max-w-5xl mx-auto mb-20 pt-16 pb-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[var(--primary-teal)] font-black uppercase tracking-[0.8em] text-xs mb-6 block"
            >
              System Hierarchy
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary-teal-dark)] mb-6 tracking-[-0.03em]">
              The <span className="text-teal-gradient underline decoration-[var(--primary-teal)]/20 underline-offset-[8px]">Anatomy</span> of Power.
            </h2>
          </div>

          {/* Using display: grid with explicit template columns to override any tailwind/viewport issues */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
          >
            {[
              {
                icon: <POSNodeAnim />,
                title: "Intelligent POS Node",
                desc: "High-frequency mission control. Optimized for Dine-In floor mapping, lightning Takeaway, and real-time Delivery tracking.",
                tag: "CORE ENGINE",
                gradient: "from-teal-500/10 via-white to-white",
                image: "/images/modules/pos_node.png",
                slug: "pos-node"
              },
              {
                icon: <LedgerAnim />,
                title: "Forensic Ledger",
                desc: "Military-grade CP/CR voucher cycles linked to Debit Recovery protocols for managing credit customer balances.",
                tag: "ACCOUNTING",
                gradient: "from-blue-500/10 via-white to-white",
                image: "/images/modules/ledger.png",
                slug: "ledger"
              },
              {
                icon: <AttendanceAnim />,
                title: "Attendance Matrix",
                desc: "Biometric gates feeding automated salary logic with shift-tolerance, leave-balance, and deduction reconciliation.",
                tag: "HR_INTELLIGENCE",
                gradient: "from-emerald-500/10 via-white to-white",
                image: "/images/modules/attendance.png",
                slug: "attendance"
              },
              {
                icon: <PulseAnim />,
                title: "Revenue Pulse",
                desc: "Live inventory velocity and sales performance mapped to 50+ forensic reports for zero-leakage management.",
                tag: "ANALYTICS",
                gradient: "from-orange-500/10 via-white to-white",
                image: "/images/modules/analytics.png",
                slug: "analytics"
              },
              {
                icon: <AuditAnim />,
                title: "The Audit Protocol",
                desc: "Uncompromising Day-Closing mandates and role-based encryption shields to ensure 100% data sovereignty.",
                tag: "SECURITY",
                gradient: "from-purple-500/10 via-white to-white",
                image: "/images/modules/audit.png",
                slug: "audit"
              },
              {
                icon: <CloudAnim />,
                title: "Cloud Sovereignty",
                desc: "Powered by Google's Flutter engine. A single core delivering native 60FPS performance across Web, Mobile, and Desktop.",
                tag: "PLATFORM",
                gradient: "from-sky-500/10 via-white to-white",
                image: "/images/modules/cloud_sovereignty.png",
                slug: "cloud"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className={`premium-card p-4 group flex flex-col items-center text-center bg-gradient-to-br ${feature.gradient} border-2 border-transparent hover:border-[var(--primary-teal)]/20 transition-all duration-700 shadow-2xl shadow-gray-100 h-full`}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="relative w-32 h-32 mb-8 group/icon"
                >
                  {/* Outer Tech Ring - Rotating */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--primary-teal)]/20 md:group-hover/icon:border-[var(--primary-teal)]/50 md:group-hover/icon:duration-5 transition-colors"
                  />

                  {/* Inner Orbiting Particles/Dots */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)] shadow-[0_0_10px_var(--primary-teal)]" />
                  </motion.div>

                  {/* Glass Base Plate */}
                  <div className="absolute inset-4 rounded-[28px] bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center md:group-hover/icon:scale-105 md:group-hover/icon:bg-white transition-all duration-500 overflow-hidden">
                    {/* Energy Pulse Background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-blue)]"
                    />

                    {/* The Icon */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="relative z-10 text-[var(--primary-teal-dark)] drop-shadow-[0_2px_10px_rgba(38,166,154,0.3)]"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  {/* Floating Tech Corners */}
                  {[0, 90, 180, 270].map((rot) => (
                    <div
                      key={rot}
                      style={{ transform: `rotate(${rot}deg)` }}
                      className="absolute inset-0 p-1 opacity-20 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity duration-500"
                    >
                      <div className="w-3 h-3 border-t-2 border-l-2 border-[var(--primary-teal)] rounded-tl-md" />
                    </div>
                  ))}
                </motion.div>
                <div className="px-4 py-1.5 rounded-full bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] text-[10px] font-black tracking-widest mb-6!">
                  {feature.tag}
                </div>
                <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-1! tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed mb-2! max-w-[280px]">
                  {feature.desc}
                </p>

                {/* Module Preview Image */}
                <div className="w-full relative h-48 rounded-2xl overflow-hidden border border-black/5 shadow-inner">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-[50]">
                    <Link
                      href={`/modules/${feature.slug}`}
                      className="relative z-[60] inline-block text-[10px] font-black text-white tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 hover:bg-[var(--primary-teal)] transition-all duration-300 cursor-pointer"
                    >
                      View Interface
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP FEATURE SHOWCASE - THE ART OF AI */}
      <section id="features" className="py-10 bg-[var(--bg-main)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-teal)]/5 blur-[120px] rounded-full -z-10 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 blur-[120px] rounded-full -z-10 -translate-x-1/2"></div>

        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-white shadow-sm rounded-full border border-[var(--primary-teal)]/10"
              >
                <Sparkles size={12} />
                Feature Ecosystem v4.2
              </motion.div>
              <h2 className="text-3xl md:text-6xl font-black text-[var(--primary-teal-dark)] leading-tight tracking-tighter">
                The Power <br />
                <span className="text-teal-gradient">Architecture.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right pb-4">
              <p className="text-[var(--text-muted)] font-medium max-w-[240px] text-sm">
                Consolidating every industrial-strength operational node into a single quantum baseline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                category: "Neural Operations",
                description: "High-performance modules for floor and kitchen management.",
                items: [
                  {
                    icon: <QuantumPOSAnim />,
                    title: "Quantum POS Terminal",
                    desc: "State-of-the-art interface with Dine-In floor mapping, lightning Takeaway, and real-time Delivery tracking sync.",
                    tags: ["Split Billing", "KDS Real-time", "Floor Flow"]
                  },
                  {
                    icon: <BioHRAnim />,
                    title: "Bio HR Ecosystem",
                    desc: "Advanced staff management with integrated attendance tracking, late-tolerance detection, and biometric reconciliation.",
                    tags: ["Shift Mgmt", "Attendance Sync", "Leave Logic"]
                  }
                ]
              },
              {
                category: "Ironclad Financials",
                description: "Deep accounting modules that solve the 'missing cash' mystery.",
                items: [
                  {
                    icon: <ForensicLedgerV4Anim />,
                    title: "Forensic Ledger V4",
                    desc: "Professional Cash Payment (CP) and Cash Receive (CR) vouchers with Debit Recovery protocols for managing credit customer balances.",
                    tags: ["Ledger Audit", "Debit Recovery", "Bank Recon"]
                  },
                  {
                    icon: <ClosureAnim />,
                    title: "The Closure Protocol",
                    desc: "Uncompromising Day-Closing engine. System mandates audit completeness, auto-reconciles cash-in-drawer, and performs global sync.",
                    tags: ["Audit Shield", "Auto Check-out", "P&L Reconcile"]
                  }
                ]
              }
            ].map((group, gIdx) => (
              <div key={gIdx} className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-black/5"></div>
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[var(--primary-teal)]/40 whitespace-nowrap">
                    {group.category}
                  </h3>
                  <div className="h-px flex-1 bg-black/5"></div>
                </div>

                <div className="grid gap-8">
                  {group.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ delay: iIdx * 0.1, duration: 0.8 }}
                      className="group relative p-[1px] rounded-[48px] overflow-hidden"
                    >
                      {/* Animated Breathing Border Gradient - Active by default on mobile visibility */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,var(--primary-teal)_180deg,transparent_210deg,transparent_360deg)] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"
                      />

                      {/* Card Content - Glass Layer */}
                      <div className="relative bg-white/70 backdrop-blur-3xl p-8 md:p-12 rounded-[48px] h-full flex flex-col md:flex-row md:items-center gap-10 border border-black/5 md:hover:border-transparent transition-colors duration-500">
                        {/* Mini Cyber Scanner Icon Container */}
                        <div className="relative w-24 h-24 shrink-0">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              backgroundColor: ["rgba(38,166,154,0.05)", "rgba(38,166,154,0.15)", "rgba(38,166,154,0.05)"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-3xl border border-[var(--primary-teal)]/20"
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-teal)] md:group-hover:scale-110 md:group-hover:text-white transition-all duration-500 z-10">
                            {item.icon}
                          </div>
                          {/* Inner Glowing Core - Pulses subtly on mobile */}
                          <motion.div
                            animate={{ opacity: [0, 0.2, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-6 rounded-full bg-[var(--primary-teal)] blur-xl md:opacity-0 md:group-hover:opacity-100 transition-all duration-500"
                          />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-4 tracking-tighter md:group-hover:text-[var(--primary-teal)] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[var(--text-muted)] text-base font-medium leading-relaxed mb-8">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {item.tags.map((tag) => (
                              <motion.span
                                key={tag}
                                animate={{
                                  backgroundColor: gIdx === 0 ? ["rgba(38,166,154,0.05)", "rgba(38,166,154,0.12)", "rgba(38,166,154,0.05)"] : ["rgba(245,158,11,0.05)", "rgba(245,158,11,0.12)", "rgba(245,158,11,0.05)"],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                whileTap={{ scale: 0.9, backgroundColor: gIdx === 0 ? "var(--primary-teal)" : "#f59e0b", color: "white" }}
                                className={`px-4 py-1.5 rounded-full border ${gIdx === 0 ? 'border-[var(--primary-teal)]/10 text-[var(--primary-teal)]' : 'border-amber-500/10 text-amber-600'} text-[10px] font-black uppercase tracking-widest md:text-[var(--primary-teal-dark)]/40 md:bg-black/5 md:group-hover:bg-[var(--primary-teal)] md:group-hover:text-white transition-all duration-300 shadow-sm`}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED POWER MODULES SECTION */}
      <section className="py-24 bg-[var(--primary-teal-dark)] relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--primary-teal)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,var(--primary-teal)_0%,transparent_50%)]"></div>
        </div>

        <div className="content-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-[var(--primary-teal)] mb-4">Industrial Logic</h3>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                Engineering the <br />
                <span className="text-3d-tech">Power Modules.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-white/50 font-medium leading-relaxed">
                By studying the Q-Line core architecture, we've distilled the most aggressive management features into modular, scalable nodes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Salary Automator",
                desc: "100% accurate payroll calculation using attendance snapshots, shift multipliers, and automated deduction recovery.",
                stats: "Neural Reconcile",
                icon: <BioHRAnim />
              },
              {
                title: "Vendor Dynamics",
                desc: "Industrial-grade supply chain tracking. Procurement ledgers, credit limits, and vendor performance analytics.",
                stats: "Full Supply Matrix",
                icon: <LedgerAnim />
              },
              {
                title: "Role Sovereignty",
                desc: "Military-grade access control. Precisely define who can override billing or audit forensic vouchers.",
                stats: "Permission Shield",
                icon: <AuditAnim />
              }
            ].map((module, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: mIdx * 0.1 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[40px] md:hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Ambient breathing glow for mobile */}
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${mIdx === 0 ? 'from-[var(--primary-teal)]/10' : mIdx === 1 ? 'from-amber-500/10' : 'from-purple-500/10'} to-transparent -z-10`}
                />

                <div className="mb-8 flex justify-between items-start">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`absolute inset-0 ${mIdx === 0 ? 'bg-[var(--primary-teal)]/20' : mIdx === 1 ? 'bg-amber-500/20' : 'bg-purple-500/20'} blur-xl rounded-full`}
                    />
                    <div className={`relative w-14 h-14 rounded-[20px] ${mIdx === 0 ? 'bg-[var(--primary-teal)]/20 text-[var(--primary-teal)]' : mIdx === 1 ? 'bg-amber-500/20 text-amber-500' : 'bg-purple-500/20 text-purple-400'} flex items-center justify-center md:group-hover:scale-110 transition-transform`}>
                      {module.icon}
                    </div>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${mIdx === 0 ? 'text-[var(--primary-teal)] bg-[var(--primary-teal)]/10' : mIdx === 1 ? 'text-amber-500 bg-amber-500/10' : 'text-purple-400 bg-purple-500/10'} px-3 py-1.5 rounded-full`}>
                    {module.stats}
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{module.title}</h4>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUANTUM ENGINE SECTION - FLUTTER POWER */}
      <section id="engine" className="py-10 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary-teal)]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-blue)]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 text-[var(--accent-blue)] text-[10px] font-black uppercase tracking-[0.3em] mb-8! border border-blue-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse"></div>
                Powered by Google Flutter
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-teal-dark)] leading-[1.1] tracking-tighter mb-8!">
                Unified Core. <br />
                <span className="text-teal-gradient">Infinite Display.</span>
              </h2>

              <p className="text-xl text-[var(--text-muted)] font-medium leading-relaxed max-w-xl mb-8!">
                Q-Line is built on Google's high-performance <span className="text-[var(--primary-teal-dark)] font-black">Flutter</span> engine.
                A single military-grade codebase that delivers 100% native performance across every device in your enterprise simultaneously.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-8!">
                <div className="p-6 rounded-3xl bg-gray-50 border border-black/5 hover:border-[var(--primary-teal)]/20 transition-colors group">
                  <div className="text-[var(--primary-teal)] font-black text-sm uppercase tracking-widest mb-3">60 FPS Native</div>
                  <p className="text-gray-500 text-sm font-medium">Bypass the bridge. Direct-to-canvas rendering for zero-latency interactions.</p>
                </div>
                <div className="p-6 rounded-3xl bg-gray-50 border border-black/5 hover:border-[var(--primary-teal)]/20 transition-colors group">
                  <div className="text-[var(--primary-teal)] font-black text-sm uppercase tracking-widest mb-3">Quantum Sync</div>
                  <p className="text-gray-500 text-sm font-medium">Instant real-time state synchronization across Android, iOS, Windows, and Web.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 md:gap-14">
                <div className="flex -space-x-4 items-center h-20 relative px-4">
                  {/* Background Scanning Beam */}
                  <motion.div
                    animate={{
                      x: [-100, 300],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2
                    }}
                    className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[var(--primary-teal)]/10 to-transparent skew-x-12 -z-10"
                  />

                  {[
                    {
                      name: 'Android',
                      color: '#3DDC84',
                      glow: 'rgba(61, 220, 132, 0.4)',
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#3DDC84] drop-shadow-[0_0_12px_rgba(61,220,132,0.5)]">
                          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592c.078-.1352.0317-.308-.1034-.3861-.1353-.078-.3081-.0318-.3863.1034l-2.0193 3.4972C14.7314 8.7834 13.4074 8.6046 12 8.6046c-1.4074 0-2.7314.1788-3.3698.4716L6.6108 5.5791c-.0782-.1352-.251-.1814-.3863-.1034-.135.0781-.1813.2509-.1033.3861l1.9973 3.4592C5.3526 10.3707 3.5 12.8211 3.5 15.6987h17c0-2.8776-1.8526-5.328-4.6185-6.3773" />
                        </svg>
                      )
                    },
                    {
                      name: 'iOS',
                      color: '#000000',
                      glow: 'rgba(0, 0, 0, 0.2)',
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-black drop-shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                          <path d="M17.05 20.28c-.96.95-2.04 1.88-3.3 1.9-1.25.02-1.66-.75-3.1-.75s-1.9.73-3.13.77c-1.24.03-2.45-1.03-3.41-2-1.96-1.98-3.47-5.59-1.45-9.1.99-1.74 2.8-2.85 4.77-2.88 1.5-.02 2.9.9 3.8.9s2.05-.72 3.25-.6c.5.02 1.95.2 2.86 1.51-1.07.65-1.61 1.76-1.6 3.1 0 1.63.85 2.5 1.7 3.02-.34 1.34-1.04 2.87-1.89 4.13zM12.03 7.25c-.02-2.23 1.83-4.05 4.07-4.14.22 2.36-1.95 4.47-4.07 4.14z" />
                        </svg>
                      )
                    },
                    {
                      name: 'Windows',
                      color: '#00A4EF',
                      glow: 'rgba(0, 164, 239, 0.4)',
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#00A4EF] drop-shadow-[0_0_12px_rgba(0,164,239,0.5)]">
                          <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45l9.75 0v9.45l-9.75-1.35V12.45zM10.8 1.95L24 0v11.55l-13.2 0V1.95zM24 12.45v11.55L10.8 22.05v-9.6L24 12.45z" />
                        </svg>
                      )
                    },
                    {
                      name: 'MacOS',
                      color: '#64748B',
                      glow: 'rgba(100, 116, 139, 0.3)',
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-slate-500 drop-shadow-[0_0_12px_rgba(100,116,139,0.4)]">
                          <path d="M20 12v-8h-16v8h16zm1-10c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1h-8v1h3v2h-9v-2h3v-1h-8c-.552 0-1-.448-1-1v-10c0-.552.448-1 1-1h18z" />
                        </svg>
                      )
                    },
                    {
                      name: 'Web',
                      color: '#26A69A',
                      glow: 'rgba(38, 166, 154, 0.4)',
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#26A69A] drop-shadow-[0_0_12px_rgba(38,166,154,0.5)]">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      )
                    }
                  ].map((os, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: idx * 0.1
                        }
                      }}
                      animate={{
                        y: [0, -12, 0],
                        transition: {
                          duration: 4 + idx * 0.6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{
                        scale: 1.25,
                        zIndex: 50,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      style={{ zIndex: idx }}
                      className="relative group pointer-events-auto"
                    >
                      {/* Brand Colored Aura Glow */}
                      <div
                        className="absolute inset-0 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: os.glow }}
                      ></div>

                      {/* Main 'Liquid Glass' Container */}
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full relative p-[2px] overflow-hidden group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-500">
                        {/* Crystalline Border (Animated Gradient) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/20 to-white/80 animate-[spin_8s_linear_infinite] opacity-60"></div>

                        {/* Glass Body with Internal Brand Tint */}
                        <div
                          className="absolute inset-[3px] rounded-full backdrop-blur-3xl border border-white/40 shadow-inner flex items-center justify-center transition-all duration-500 group-hover:bg-white"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, ${os.color}15 100%)`
                          }}
                        >
                          {/* Inner Glossy Highlight */}
                          <div className="absolute top-[10%] left-[15%] w-[40%] h-[25%] bg-gradient-to-b from-white/60 to-transparent rounded-full blur-[2px] -rotate-12 pointer-events-none"></div>

                          <div className="transform transition-all duration-500 group-hover:scale-110 relative z-10 flex items-center justify-center">
                            {os.icon}
                          </div>

                          {/* Status Pulse Ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-[var(--primary-teal)]/30 animate-ping opacity-0 group-hover:opacity-40" />

                          {/* Hover Tooltip (Inside node context but absolute) */}
                        </div>
                      </div>

                      {/* Hover Tooltip Positioned Relative to Node */}
                      <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[var(--primary-teal-dark)] rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none shadow-xl z-50">
                        {os.name}
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--primary-teal-dark)] rotate-45" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="h-12 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent hidden sm:block"></div>

                <div className="flex flex-col">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10px] font-black text-[var(--primary-teal)] uppercase tracking-[0.4em] mb-1"
                  >
                    Architecture
                  </motion.div>
                  <div className="text-sm md:text-base font-black text-[var(--primary-teal-dark)] uppercase tracking-widest flex items-center gap-3">
                    Universal Binary Support
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Component */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                {/* Visual representation of devices - Consolidated Central Layout */}
                <div className="relative w-full max-w-[800px] aspect-[4/3] mx-auto">
                  {/* Main Desktop Frame - Center Back */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[75%] bg-[#1a1a1a] rounded-[40px] shadow-4xl border-[12px] border-[#2a2a2a] ring-1 ring-black/20 overflow-hidden flex items-center justify-center z-10"
                  >
                    <Image
                      src="/images/responsiveness/desktop.pos.png"
                      alt="Q-Line Desktop Interface"
                      fill
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Tablet Frame - Bottom Left Overlap */}
                  <motion.div
                    animate={{ y: [10, -10, 10], x: [0, 5, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[5%] left-0 w-[55%] h-[50%] bg-[#1a1a1a] rounded-[30px] shadow-5xl border-[10px] border-[#2a2a2a] ring-1 ring-black/20 overflow-hidden z-30 flex items-center justify-center"
                  >
                    <Image
                      src="/images/responsiveness/tablet.pos.png"
                      alt="Q-Line Tablet Interface"
                      fill
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Mobile Frame - Bottom Right Overlap */}
                  <motion.div
                    animate={{ y: [-10, 15, -10], x: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[2%] right-[5%] w-[30%] h-[55%] bg-[#1a1a1a] rounded-[35px] shadow-5xl border-[8px] border-[#2a2a2a] ring-1 ring-black/20 z-40 overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/responsiveness/mobile.pos.png"
                      alt="Q-Line Mobile Interface"
                      fill
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Ambient Glow for the whole group */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--primary-teal)]/10 blur-[100px] -z-10 rounded-full" />
                </div>
              </motion.div>

              {/* Flutter Logo Ornament */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white shadow-2xl rounded-[30px] flex items-center justify-center p-10 z-40">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-500">
                  <path d="M50 0 L100 50 L75 75 L25 25 Z" opacity="0.8" />
                  <path d="M50 100 L0 50 L25 25 L75 75 Z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTIVE COMMAND CENTER - DIGITAL TWIN */}
      <section className="py-24 bg-[var(--bg-main)] relative overflow-hidden">
        {/* Animated HUD Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary-teal) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="content-container relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-white shadow-sm rounded-full border border-[var(--primary-teal)]/10"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--primary-teal)] animate-ping" />
                Live Command v9.2
              </motion.div>
              <h2 className="text-3xl md:text-6xl font-black text-[var(--primary-teal-dark)] leading-tight tracking-tighter">
                Executive <br />
                <span className="text-3d-tech">Intelligence Hub.</span>
              </h2>
            </div>
            <div className="pb-4">
              <p className="text-lg text-[var(--text-muted)] font-medium max-w-[320px] lg:text-right leading-relaxed">
                A military-grade digital twin of your entire workspace, providing <span className="text-[var(--primary-teal-dark)] font-black">Zero-Leakage Visibility</span> across every node.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { component: <RevenueVelocityNode />, title: "Revenue Velocity", category: "FINANCIAL", icon: <Activity size={12} /> },
              { component: <ForensicStreamNode />, title: "Forensic Stream", category: "SECURITY", icon: <Lock size={12} /> },
              { component: <NeuralPerformanceNode />, title: "Neural Radar", category: "OPERATIONS", icon: <Users size={12} /> },
              { component: <InventoryFrictionNode />, title: "Stock Dynamics", category: "LOGISTICS", icon: <Layers size={12} /> }
            ].map((cluster, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: cIdx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Visual Connector Line */}
                {cIdx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-px bg-gradient-to-r from-[var(--primary-teal)]/20 to-transparent z-40" />
                )}

                <div className="mb-4 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--primary-teal)]">{cluster.icon}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[var(--primary-teal)]/40">{cluster.category}</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-[var(--primary-teal)] animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-[var(--primary-teal)]/50" />
                  </div>
                </div>

                <div className="relative p-2 rounded-[40px] bg-white shadow-2xl shadow-black/[0.03] border border-black/[0.02] group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="h-[220px]">
                    {cluster.component}
                  </div>
                </div>

                <div className="mt-6 px-4">
                  <h4 className="text-lg font-black text-[var(--primary-teal-dark)] mb-1 uppercase tracking-tighter">{cluster.title}</h4>
                  <div className="h-0.5 w-8 bg-[var(--primary-teal)]/20 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Cyber Corner HUD */}
                <div className="absolute top-[34px] left-0 -ml-2 w-4 h-4 border-t-2 border-l-2 border-[var(--primary-teal)]/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-[34px] right-0 -mr-2 w-4 h-4 border-t-2 border-r-2 border-[var(--primary-teal)]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Abstract Flow Graphic */}
          <div className="mt-32 relative h-1 bg-black/5 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--primary-teal)] to-transparent opacity-40"
            />
          </div>
        </div>
      </section>

      {/* OPERATIONAL ECOSYSTEM - BENTO WORKSPACE */}
      <section className="py-20 md:py-24 bg-[var(--bg-main)] relative overflow-hidden">
        <div className="content-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16 px-4">
            <div className="lg:col-span-12 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-white shadow-sm rounded-full border border-black/5"
              >
                Operational Ecosystem_4.0
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-[var(--primary-teal-dark)] leading-[1.1] tracking-tighter mb-8">
                A Unified Network of <br />
                <span className="text-3d-tech">Validated Efficiency.</span>
              </h2>
            </div>

            <div className="lg:col-span-12 xl:col-span-4 lg:grid lg:grid-cols-2 lg:gap-8 xl:block xl:space-y-0">
              <p className="text-base text-[var(--text-muted)] font-medium leading-relaxed mb-6">
                We don't just deploy software; we architect the digital nervous system for the world's most aggressive hospitality hubs.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-8">
                <div>
                  <div className="text-[9px] font-black text-[var(--primary-teal)] uppercase mb-1 tracking-widest">Topology</div>
                  <div className="text-sm font-bold text-[var(--primary-teal-dark)]">Multi-Node Sync</div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-[var(--primary-teal)] uppercase mb-1 tracking-widest">Protocol</div>
                  <div className="text-sm font-bold text-[var(--primary-teal-dark)]">Direct-Core V4</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 grid md:grid-cols-2 gap-6"
            >
              <PartnerTile name="ELITE DHABA" nodeID="241" />
              <PartnerTile name="QUANTUM CAFE" nodeID="108" />
              <PartnerTile name="LEGEND DINING" nodeID="092" />
              <PartnerTile name="METRO HUB" nodeID="315" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <MetricTile label="Network Load" value="100%" trend="+ CIVILIAN STABILITY" />
              <MetricTile label="Sync Latency" value="0.04ms" trend="ZERO BRIDGE DELAY" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - ULTRA HIGH WEIGHT */}
      <section id="download" className="py-24">
        <div className="content-container !max-w-[1400px]">
          <div className="bg-[var(--primary-teal-dark)] rounded-[60px] p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-teal)_0%,transparent_70%)] opacity-20"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
                Future-Proof <br />
                <span className="text-teal-gradient animate-pulse">Your Revenue.</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <button className="btn-primary !bg-white !text-[var(--primary-teal-dark)] !px-12 !py-6 !text-xl !rounded-[30px] shadow-4xl hover:!scale-110 active:scale-95 transition-all">
                  Get Started Now
                </button>
                <div className="flex flex-col items-start text-white/40 font-black tracking-[0.4em] text-xs">
                  <div className="flex gap-2 mb-2"><span className="w-12 h-px bg-white/20 self-center"></span> OR <span className="w-12 h-px bg-white/20 self-center"></span></div>
                  <div className="hover:text-white transition-colors cursor-pointer">SCHEDULE ELITE DEMO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
