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
  LayoutGrid,
  FileText,
  FileSpreadsheet,
  Search,
  TrendingUp,
  UserPlus,
  Printer,
  ScrollText,
  WifiOff,
  Database,
  CloudOff,
  Monitor,
  Smartphone,
  Cloud
} from 'lucide-react';
import OrganicFlowBackground from './components/OrganicFlowBackground';

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
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-4 h-4 rounded-full bg-[var(--primary-teal)]"
    />
    <LayoutDashboard size={24} className="relative z-10" />
  </div>
);

const LedgerAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ y: [-10, 10] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="absolute w-full h-[1px] bg-amber-400/20 blur-[2px]"
    />
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-amber-500"
    >
      <Wallet size={32} />
    </motion.div>
  </div>
);

const AttendanceAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-t border-r border-[var(--primary-teal)]/20 rounded-full"
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Fingerprint size={32} />
    </motion.div>
  </div>
);

const PulseAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 50">
      <motion.path
        d="M0 25 L15 25 L20 10 L30 40 L35 25 L50 25"
        fill="transparent"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    <BarChart3 size={24} className="relative z-10 opacity-30 text-sky-500" />
  </div>
);

const AuditAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="text-purple-500"
    >
      <ShieldCheck size={32} />
    </motion.div>
  </div>
);

const CloudAnim = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <motion.div
      animate={{ y: [-3, 3] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="text-sky-500"
    >
      <MonitorSmartphone size={32} />
    </motion.div>
  </div>
);

const QuantumPOSAnim = () => (
  <div className="relative w-8 h-8">
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
        className="h-1 bg-[var(--primary-teal)]/40 rounded-full mb-2"
        style={{ width: i === 1 ? '100%' : '60%' }}
      />
    ))}
    <LayoutDashboard size={20} className="absolute -left-6 top-2 text-[var(--primary-teal)] opacity-40" />
  </div>
);

const BioHRAnim = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-12 h-12 border border-dashed border-[var(--primary-teal)]/20 rounded-full"
    />
    <Fingerprint size={24} className="text-[var(--primary-teal)] opacity-60" />
  </div>
);

const ForensicLedgerV4Anim = () => (
  <div className="relative w-8 h-8">
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="text-amber-500"
    >
      <ShieldAlert size={28} />
    </motion.div>
  </div>
);

const ClosureAnim = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-12 h-12 border-b border-l border-amber-400/20 rounded-full"
    />
    <Lock size={24} className="text-amber-500 opacity-60" />
  </div>
);

// --- COMMAND CENTER INTELLIGENCE NODES ---

const RevenueVelocityNode = () => (
  <div className="relative w-full h-full min-h-[160px] flex items-end overflow-hidden rounded-3xl bg-black/5 border border-white/10">
    <motion.div
      initial={{ scaleY: 0.5 }}
      animate={{ scaleY: [0.5, 0.6, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-gradient-to-t from-[var(--primary-teal)] to-[var(--primary-teal-light)] relative origin-bottom"
    >
      <div className="absolute top-0 left-0 right-0 h-4 bg-white/10 skew-y-2 blur-sm" />
    </motion.div>
    <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
      <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white font-black text-2xl tracking-tighter">
        $8,420
      </div>
    </div>
  </div>
);

const ForensicStreamNode = () => (
  <div className="relative w-full h-full min-h-[160px] bg-[var(--primary-teal-dark)] rounded-3xl p-4 overflow-hidden border border-[var(--primary-teal)]/20 shadow-inner">
    <motion.div
      animate={{ y: [0, -100] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)]/40" />
          <span className="text-white/40 uppercase">{log}</span>
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
        <div key={i} className="absolute border border-black/[0.02] rounded-full" style={{ width: i * 60, height: i * 60 }} />
      ))}
    </div>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="relative z-10"
    >
      <Activity size={40} className="text-[var(--primary-teal)] opacity-20" />
    </motion.div>
  </div>
);

const InventoryFrictionNode = () => (
  <div className="relative w-full h-full min-h-[160px] bg-white rounded-3xl border border-black/5 p-4 flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
        <TrendingUp size={20} className="text-orange-500" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: ["20%", "85%", "20%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-full bg-orange-500"
        />
      </div>
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
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--primary-teal)]/5 text-[var(--primary-teal-dark)] text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-[var(--primary-teal)]/10"
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
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/70 tracking-[0.25em] mb-0.5 leading-none">Latency</div>
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
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/70 tracking-[0.25em] mb-0.5 leading-none">Uptime</div>
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
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/70 tracking-[0.25em] mb-0.5 leading-none">Global</div>
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
                  <div className="text-[6px] md:text-[9px] font-[900] uppercase text-white/70 tracking-[0.25em] mb-0.5 leading-none">Audit</div>
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
              className="relative h-[500px] md:h-[85vh] w-full rounded-[30px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(38,166,154,0.2)] border-[4px] md:border-[12px] border-white ring-1 ring-black/5 group z-10"
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
                preload="metadata"
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
                <source src="/video/hero-v2.mp4" type="video/mp4" />
                <track kind="captions" label="English" />
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
                transition={{ duration: 0.5 }}
                className={`premium-card p-4 group flex flex-col items-center text-center bg-gradient-to-br ${feature.gradient} border-2 border-transparent hover:border-[var(--primary-teal)]/20 transition-all duration-700 shadow-2xl shadow-gray-100 h-full`}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="relative w-32 h-32 mb-8 group/icon"
                >
                  {/* Outer Tech Ring - Rotating */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[var(--primary-teal)]/10" />

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
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-teal)]/5 to-[var(--accent-blue)]/5" />

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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-[50]">
                    <Link
                      href={`/modules/${feature.slug}`}
                      className="relative z-[60] inline-block text-[10px] font-black text-white tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 hover:bg-[var(--primary-teal)] transition-all duration-300 cursor-pointer"
                    >
                      View {feature.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* DETAILED POWER MODULES SECTION */}
      <section id="capabilities" className="py-24 bg-[var(--bg-main)] relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--primary-teal)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,var(--primary-teal)_0%,transparent_50%)]"></div>
        </div>

        <div className="content-container relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--primary-teal)] mb-4">Industrial Baseline</h3>
              <h2 className="text-4xl md:text-6xl font-[900] text-[var(--primary-teal-dark)] tracking-tighter leading-none">
                Software <br />
                <span className="text-teal-gradient">Capabilities.</span>
              </h2>
            </div>
            <div className="lg:max-w-xs text-right">
              <p className="text-[var(--text-muted)] text-[10px] font-black leading-relaxed uppercase tracking-widest leading-loose">
                A military-grade digital architecture designed for high-pressure hospitality hubs. Every industrial node verified for 100% operational uptime.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              // POS CORE
              { title: "Cash & Card Billing", cat: "POS CORE", icon: <Wallet size={14} />, color: "teal" },
              { title: "Credit Billing", cat: "POS CORE", icon: <ShieldCheck size={14} />, color: "teal" },
              { title: "WiFi Thermal Sync", cat: "PRINTING", icon: <Zap size={14} />, color: "teal" },
              { title: "KOT Matrix", cat: "KITCHEN", icon: <Layers size={14} />, color: "teal" },
              { title: "Pre-Bill Logic", cat: "BILLING", icon: <FileText size={14} />, color: "teal" },

              // FINANCE
              { title: "Vendor Ledgers", cat: "FINANCE", icon: <Users size={14} />, color: "amber" },
              { title: "Customer Wallets", cat: "FINANCE", icon: <Fingerprint size={14} />, color: "amber" },
              { title: "Staff Accounts", cat: "FINANCE", icon: <Activity size={14} />, color: "amber" },
              { title: "Purchase Invoices", cat: "FINANCE", icon: <FileSpreadsheet size={14} />, color: "amber" },
              { title: "Closing Protocol", cat: "FINANCE", icon: <Lock size={14} />, color: "amber" },

              // SECURITY & MANAGEMENT
              { title: "Access Sovereignty", cat: "SECURITY", icon: <ShieldAlert size={14} />, color: "purple" },
              { title: "Audit Forensic", cat: "SECURITY", icon: <Search size={14} />, color: "purple" },
              { title: "Salary Automator", cat: "HR CORE", icon: <Activity size={14} />, color: "purple" },
              { title: "Attendance Matrix", cat: "HR CORE", icon: <LayoutGrid size={14} />, color: "purple" },
              { title: "Operation Limits", cat: "SECURITY", icon: <Lock size={14} />, color: "purple" },

              // ANALYTICS & HUB
              { title: "Product Velocity", cat: "ANALYTICS", icon: <BarChart3 size={14} />, color: "blue" },
              { title: "Sales Statistics", cat: "ANALYTICS", icon: <TrendingUp size={14} />, color: "blue" },
              { title: "Customer Reports", cat: "ANALYTICS", icon: <UserPlus size={14} />, color: "blue" },
              { title: "Cloud Replication", cat: "NETWORK", icon: <MonitorSmartphone size={14} />, color: "blue" },
              { title: "Delivery Receipts", cat: "OPERATIONS", icon: <ArrowUpRight size={14} />, color: "blue" }
            ].map((feat, fIdx) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 p-4 rounded-2xl flex flex-col gap-3 group transition-all h-full"
              >
                <div className="flex justify-between items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${feat.color === 'teal' ? 'bg-[var(--primary-teal)]/10 text-[var(--primary-teal)]' : feat.color === 'amber' ? 'bg-amber-50 text-amber-600' : feat.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-sky-50 text-sky-600'} border border-transparent group-hover:scale-110 transition-transform`}>
                    {feat.icon}
                  </div>
                  <div className="text-[6px] font-black tracking-widest text-gray-300 uppercase group-hover:text-[var(--primary-teal)] transition-colors">
                    {feat.cat}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--primary-teal-dark)] font-bold text-[11px] md:text-xs tracking-tight uppercase leading-tight mb-1">{feat.title}</div>
                  <div className="h-[1px] w-3 bg-gray-100 group-hover:w-full group-hover:bg-[var(--primary-teal)]/20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 border-t border-gray-200 pt-16">
            <div className="text-center md:text-left">
              <span className="text-[7px] font-black uppercase tracking-[0.5em] text-[var(--text-muted)] block mb-2">Printing Engine</span>
              <span className="text-xl md:text-2xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tighter">Thermal Wireless v4</span>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-200"></div>
            <div className="text-center md:text-left">
              <span className="text-[7px] font-black uppercase tracking-[0.5em] text-[var(--text-muted)] block mb-2">Security Protocol</span>
              <span className="text-xl md:text-2xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tighter">L5 Access Shield</span>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-200"></div>
            <div className="text-center md:text-left">
              <span className="text-[7px] font-black uppercase tracking-[0.5em] text-[var(--text-muted)] block mb-2">Account Matrix</span>
              <span className="text-xl md:text-2xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tighter">Full Forensic Audit</span>
            </div>
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
                  <div className="text-[10px] font-black text-[var(--primary-teal-dark)] uppercase tracking-[0.4em] mb-1">
                    Architecture
                  </div>
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
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[75%] bg-[#1a1a1a] rounded-[40px] shadow-4xl border-[12px] border-[#2a2a2a] ring-1 ring-black/20 overflow-hidden flex items-center justify-center z-10"
                  >
                    <Image
                      src="/images/responsiveness/desktop.pos.png"
                      alt="Q-Line Desktop Interface"
                      fill
                      sizes="(max-width: 1200px) 100vw, 80vw"
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Tablet Frame - Bottom Left Overlap */}
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[5%] left-0 w-[55%] h-[50%] bg-[#1a1a1a] rounded-[30px] shadow-5xl border-[10px] border-[#2a2a2a] ring-1 ring-black/20 overflow-hidden z-30 flex items-center justify-center"
                  >
                    <Image
                      src="/images/responsiveness/tablet.pos.png"
                      alt="Q-Line Tablet Interface"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Mobile Frame - Bottom Right Overlap */}
                  <motion.div
                    animate={{ y: [-5, 8, -5] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[2%] right-[5%] w-[30%] h-[55%] bg-[#1a1a1a] rounded-[35px] shadow-5xl border-[8px] border-[#2a2a2a] ring-1 ring-black/20 z-40 overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/responsiveness/mobile.pos.png"
                      alt="Q-Line Mobile Interface"
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Ambient Glow for the whole group */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--primary-teal)]/10 blur-[100px] -z-10 rounded-full" />
                </div>
              </motion.div>


            </div>

          </div>
        </div>
      </section>

      {/* THERMAL PRINTING SECTION */}
      <section id="printing" className="bg-[var(--bg-main)] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--primary-teal) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <OrganicFlowBackground />

        <div className="content-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-white shadow-sm rounded-full border border-[var(--primary-teal)]/10">
                <Printer size={12} className="text-[var(--primary-teal)]" />
                Thermal Grid v4
              </div>
              <h2 className="text-4xl md:text-6xl font-[900] text-[var(--primary-teal-dark)] leading-tight tracking-tighter mb-6">
                Precision <br />
                <span className="text-teal-gradient">Thermal Output.</span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg font-medium leading-relaxed max-w-lg mb-10">
                Turn every transaction into a brand statement. Our intelligent print engine orchestrates complex KOT routing, detailed tax invoices, and settlement vouchers with pixel-perfect clarity.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Smart KOT Logic", desc: "Auto-routes kitchen orders to specialized stations (Bar, Kitchen, Grill) instantly." },
                  { title: "Brand Vouchers", desc: "Customizable layouts with your logo, dynamic footers, and QR codes." },
                  { title: "Forensic Closing", desc: "Detailed end-of-day settlement reports with cash denomination breakdown." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary-teal)] shadow-lg shadow-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ScrollText size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[var(--primary-teal-dark)] font-bold text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual (Three Overlapping Diagonal Receipts) */}
            <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center perspective-[2000px] translate-y-12 lg:translate-y-28">
              {/* Printer Device - SVG Illustration */}
              <div className="absolute -top-20 lg:-top-24 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 z-0 opacity-100 pointer-events-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.85] lg:scale-100 origin-top">
                <svg width="380" height="220" viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Body Gradient */}
                  <defs>
                    <linearGradient id="bodyGrad" x1="190" y1="60" x2="190" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#262626" />
                      <stop offset="1" stopColor="#171717" />
                    </linearGradient>
                    <linearGradient id="lidGrad" x1="190" y1="0" x2="190" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#333333" />
                      <stop offset="1" stopColor="#222222" />
                    </linearGradient>
                  </defs>

                  {/* Main Body Base */}
                  <path d="M40 80 H340 C351.046 80 360 88.9543 360 100 V190 C360 201.046 351.046 210 340 210 H40 C28.9543 210 20 201.046 20 190 V100 C20 88.9543 28.9543 80 40 80 Z" fill="url(#bodyGrad)" stroke="#404040" strokeWidth="1" />

                  {/* Top Lid / cover */}
                  <path d="M45 40 H335 C346.046 40 355 48.9543 355 60 V80 H25 V60 C25 48.9543 33.9543 40 45 40 Z" fill="url(#lidGrad)" />

                  {/* Paper Exit Slot - Dark Recess */}
                  <rect x="50" y="76" width="280" height="12" rx="4" fill="#050505" />
                  <rect x="54" y="78" width="272" height="6" rx="2" fill="#000" />

                  {/* Glossy Highlight on Top Edge */}
                  <path d="M45 41 H335 C345 41 354 49 354 50 H26 C26 49 35 41 45 41 Z" fill="white" fillOpacity="0.1" />

                  {/* Status Console (Right Side) */}
                  <rect x="290" y="50" width="40" height="20" rx="4" fill="#111" stroke="#333" strokeWidth="0.5" />

                  {/* Power LED - Animated Green/Teal */}
                  <circle cx="300" cy="60" r="3" fill="#26A69A" className="animate-pulse">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Error LED - Dim Red */}
                  <circle cx="310" cy="60" r="3" fill="#EF4444" opacity="0.2" />

                  {/* Feed Button */}
                  <rect x="320" y="54" width="6" height="12" rx="2" fill="#444" />

                  {/* Front Branding Panel */}
                  <rect x="140" y="140" width="100" height="24" rx="4" fill="#0A0A0A" stroke="#222" strokeWidth="1" />
                  <text x="190" y="156" textAnchor="middle" fill="#555" fontSize="10" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.2em">Q-LINE</text>

                  {/* Side Vents */}
                  <path d="M30 110 H34" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30 120 H34" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30 130 H34" stroke="#333" strokeWidth="2" strokeLinecap="round" />

                  <path d="M346 110 H350" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  <path d="M346 120 H350" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  <path d="M346 130 H350" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="relative w-[300px] h-[280px] lg:h-[400px] scale-[0.85] lg:scale-100 origin-top">

                {/* 1. BACK: Closing Report (Voucher) */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: -50, rotate: -15 }}
                  whileInView={{ opacity: 1, x: -60, y: -40, rotate: -12 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-0 left-0 w-[240px] bg-slate-50 shadow-2xl z-10 p-5 font-mono text-[10px] text-gray-800 origin-center border border-gray-200"
                >
                  <div className="text-center mb-4 opacity-50">----------------</div>
                  <div className="text-center font-black uppercase mb-2 text-xs">END OF DAY REPORT</div>
                  <div className="flex justify-between mb-1"><span>Total Sales</span><span>$4,289.00</span></div>
                  <div className="flex justify-between mb-1"><span>Cash</span><span>$1,200.00</span></div>
                  <div className="flex justify-between mb-1"><span>Card</span><span>$3,089.00</span></div>
                  <div className="text-center mt-4 opacity-50">----------------</div>
                  <div className="text-center text-[8px] mt-2">TERMINAL: POS-01 | USER: ADMIN</div>
                  {/* Jagged Edge */}
                  <div className="absolute -bottom-[6px] left-0 right-0 h-[8px] bg-slate-50 w-full" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>
                </motion.div>

                {/* 2. MIDDLE: KOT Ticket */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: -50, rotate: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute top-6 left-6 w-[240px] bg-yellow-50 shadow-2xl z-20 p-5 font-mono text-[10px] text-gray-900 origin-center border border-yellow-100"
                >
                  <div className="flex justify-between border-b-2 border-black items-center pb-2 mb-3">
                    <span className="font-black text-sm">KOT #44</span>
                    <span className="bg-black text-white px-1 text-[8px]">DINE-IN</span>
                  </div>
                  <div className="text-xs font-bold mb-1">TABLE: T-12</div>
                  <ul className="space-y-3 mt-3">
                    <li className="font-bold flex gap-2">
                      <span className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-sm text-[8px]">1</span>
                      <span>TRUFFLE FRIES</span>
                    </li>
                    <li className="font-bold flex gap-2">
                      <span className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-sm text-[8px]">1</span>
                      <span>SPICY PRAWN PIZZA</span>
                      <span className="text-[8px] uppercase border border-black px-1 ml-auto">No Onion</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-[8px] font-bold text-center border-t border-black pt-2">SERVER: MICHAEL</div>
                  {/* Jagged Edge */}
                  <div className="absolute -bottom-[6px] left-0 right-0 h-[8px] bg-yellow-50 w-full" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>
                </motion.div>

                {/* 3. FRONT: Customer Bill (Original) */}
                <motion.div
                  initial={{ opacity: 0, y: -100, rotate: 5 }}
                  whileInView={{ opacity: 1, y: 40, x: 60, rotate: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
                  className="absolute top-12 left-12 w-[260px] bg-white shadow-2xl z-30 p-6 font-mono text-[10px] text-gray-800 border-t-4 border-[var(--primary-teal)]"
                >
                  {/* Logo Area */}
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center">
                      <span className="font-black text-base">Q</span>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="font-black text-sm uppercase tracking-tight mb-1">QUANTUM CAFE</div>
                    <div className="text-[9px] text-gray-500">1024 Silicon Valley, Node 4</div>
                  </div>

                  <div className="border-b border-dashed border-gray-300 mb-3"></div>

                  <div className="flex justify-between font-bold mb-2">
                    <span>ITEM</span>
                    <span>AMT</span>
                  </div>

                  <div className="space-y-1 mb-3 font-medium text-gray-600">
                    <div className="flex justify-between">
                      <span>2 x Dbl Ristretto</span>
                      <span>$12.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 x Truffle Fries</span>
                      <span>$18.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 x Matcha Latte</span>
                      <span>$6.50</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-[8px] italic">
                      <span>-- Tax (5%)</span>
                      <span>$1.85</span>
                    </div>
                  </div>

                  <div className="border-b-2 border-black mb-3"></div>

                  <div className="flex justify-between font-black text-base mb-4">
                    <span>TOTAL</span>
                    <span>$38.85</span>
                  </div>

                  <div className="text-center text-[8px] text-gray-400">
                    PAID VIA CARD ending 4242
                    <div className="mt-2 uppercase tracking-widest opacity-50 font-bold">Thank You</div>
                  </div>

                  {/* Jagged Edge */}
                  <div className="absolute -bottom-[6px] left-0 right-0 h-[8px] bg-white w-full" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* WORKING INDEPENDENTLY FROM INTERNET SECTION */}
      <section id="offline-capability" className="py-12 md:py-16 bg-[var(--bg-main)] relative overflow-hidden">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] bg-white shadow-sm rounded-full border border-black/5">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                Offline Protocol
              </div>

              <h2 className="text-3xl md:text-5xl font-[900] text-[var(--primary-teal-dark)] leading-[1.1] tracking-tighter mb-6">
                No Internet? <br />
                <span className="text-teal-gradient">No Problem.</span>
              </h2>

              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-8">
                Your business doesn't stop when the connection drops. Q-Line is engineered with a <span className="text-[var(--primary-teal-dark)] font-black">Local-First Architecture</span> that keeps your operations running at 100% speed, regardless of internet status.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                    <Database size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-[var(--primary-teal-dark)] font-bold text-sm uppercase tracking-wide mb-1">Continuous Billing</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Punch orders, print KOTs, and settle bills without a single byte of data. The system caches everything locally.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <CloudOff size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-[var(--primary-teal-dark)] font-bold text-sm uppercase tracking-wide mb-1">Zero-Touch Sync</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">The moment connectivity is restored, our background agent silently uploads all pending data to the cloud. No manual action required.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Offline Hub Circle */}
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0px rgba(245, 158, 11, 0.1)", "0 0 0 20px rgba(245, 158, 11, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white border-4 border-amber-100 flex items-center justify-center z-20 shadow-xl"
                >
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <WifiOff size={48} className="text-amber-500" />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 whitespace-nowrap">
                    Local Core Active
                  </div>
                </motion.div>

                {/* Orbiting Satellite Nodes */}
                {[0, 120, 240].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-10"
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center origin-center"
                      style={{ transform: `rotate(${deg}deg) translateY(-120px) rotate(-${deg}deg)` }}
                    >
                      {i === 0 && <Printer size={24} className="text-[var(--primary-teal)]" />}
                      {i === 1 && <LayoutDashboard size={24} className="text-[var(--primary-teal)]" />}
                      {i === 2 && <MonitorSmartphone size={24} className="text-[var(--primary-teal)]" />}
                    </div>
                  </motion.div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                  <circle cx="50%" cy="50%" r="120" stroke="currentColor" className="text-gray-300" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Cloud Status (Disconnected) */}
                <div className="absolute top-0 right-0 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300 opacity-50 grayscale">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudOff size={16} />
                    <span className="text-[10px] font-bold uppercase">Cloud</span>
                  </div>
                  <div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-blue-500"></div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* QUANTUM NETWORK ARCHITECTURE VISUAL */}
      <section id="architecture" className="py-24 bg-white relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(var(--primary-teal-dark) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="content-container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-teal)]/5 border border-[var(--primary-teal)]/10 text-[var(--primary-teal-dark)] text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)] animate-pulse" />
              system_topology_v4
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-[900] text-[var(--primary-teal-dark)] tracking-tighter mb-6">
              The <span className="text-teal-gradient">Quantum Network.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              A unified digital nervous system. All endpoints connected to a singular, pulsing core of truth.
            </p>
          </div>

          <div className="relative w-full max-w-[1000px] mx-auto aspect-[4/5] md:aspect-[16/9] flex items-center justify-center">

            {/* The Central Hub - Quantum Core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-[0_0_60px_rgba(38,166,154,0.3)] border border-[var(--primary-teal)]/20 flex items-center justify-center group"
            >
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border border-[var(--primary-teal)]/30 animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-[var(--primary-teal)]/10 animate-[ping_4s_linear_infinite]" />

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--primary-teal-dark)] rounded-2xl flex items-center justify-center text-white mb-2 shadow-xl">
                  <Database size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]">Quantum Core</div>
                <div className="text-[8px] font-bold text-[var(--primary-teal)] uppercase tracking-wider">Master Node</div>
              </div>
            </motion.div>

            {/* Satellite Nodes - Desktop Radial / Mobile Cloud */}
            {[
              { id: 'pos', name: 'POS Terminal', role: 'Billing Engine', icon: <LayoutDashboard size={20} />, x: 0, y: -180, color: '#26A69A', delay: 0 },
              { id: 'kds', name: 'KOT Matrix', role: 'Kitchen Display', icon: <Monitor size={20} />, x: 170, y: -100, color: '#FF6B35', delay: 0.1 },
              { id: 'printer', name: 'Thermal Grid', role: 'WiFi Printing', icon: <Printer size={20} />, x: 210, y: 20, color: '#F77F00', delay: 0.15 },
              { id: 'mobile', name: 'Waiter Pad', role: 'Mobile Orders', icon: <Smartphone size={20} />, x: 170, y: 120, color: '#0EA5E9', delay: 0.2 },
              { id: 'ledger', name: 'Forensic Ledger', role: 'Accounting Core', icon: <Wallet size={20} />, x: 0, y: 180, color: '#F59E0B', delay: 0.25 },
              { id: 'hr', name: 'Bio Attendance', role: 'HR Matrix', icon: <Fingerprint size={20} />, x: -170, y: 120, color: '#10B981', delay: 0.3 },
              { id: 'reports', name: 'Analytics Hub', role: 'Live Reports', icon: <BarChart3 size={20} />, x: -210, y: 20, color: '#8B5CF6', delay: 0.35 },
              { id: 'slave', name: 'Slave Terminal', role: 'Multi-Node Sync', icon: <Layers size={20} />, x: -170, y: -100, color: '#06B6D4', delay: 0.4 },
              { id: 'cloud', name: 'Cloud Vault', role: 'Auto-Backup', icon: <Cloud size={20} />, x: 0, y: -240, color: '#6366F1', delay: 0.45 },
            ].map((node, i) => (
              <React.Fragment key={node.id}>
                {/* Connection Line (Desktop Only) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
                  <motion.line
                    x1="50%" y1="50%"
                    x2={`calc(50% + ${node.x}px)`} y2={`calc(50% + ${node.y}px)`}
                    stroke="rgba(38, 166, 154, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: node.delay }}
                  />
                  {/* Moving Data Packet */}
                  <motion.circle
                    r="3"
                    fill="var(--primary-teal)"
                    animate={{
                      cx: ["50%", `calc(50% + ${node.x}px)`],
                      cy: ["50%", `calc(50% + ${node.y}px)`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.5, ease: "linear" }}
                  />
                </svg>

                {/* The Node Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, left: '50%', top: '50%' }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    left: `calc(50% + ${node.x}px)`,
                    top: `calc(50% + ${node.y}px)`
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: node.delay, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute z-10 hidden md:flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white shadow-xl border border-black/5 transition-shadow w-32 h-32 lg:w-36 lg:h-36 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-white shadow-lg shrink-0" style={{ background: `linear-gradient(135deg, ${node.color} 0%, ${node.color}dd 100%)` }}>
                    {React.cloneElement(node.icon, { size: 20, className: 'lg:w-6 lg:h-6' })}
                  </div>
                  <div className="flex flex-col text-center items-center w-full px-1">
                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-tight text-gray-800 leading-tight line-clamp-2 w-full">{node.name}</span>
                    <span className="text-[7px] lg:text-[8px] font-bold uppercase tracking-wider text-[#26A69A] mt-0.5 line-clamp-1 w-full">{node.role}</span>
                  </div>
                </motion.div>

                {/* Mobile Grid Item (Alternative View) */}
                <motion.div className="md:hidden absolute"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  style={{
                    top: '50%', left: '50%',
                    transform: `rotate(${i * 60}deg) translateY(-140px) rotate(-${i * 60}deg)`
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${node.color} 0%, ${node.color}dd 100%)` }}>
                      {node.icon}
                    </div>
                    <span className="text-[8px] font-bold uppercase mt-1 bg-white px-2 py-0.5 rounded-full shadow-sm">{node.name}</span>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          <div className="md:hidden mt-20 grid grid-cols-2 gap-4">
            {/* Mobile-only list view if radial is too cluttered */}
            {[
              { name: 'POS Terminal', role: 'Billing Engine', icon: <LayoutDashboard size={16} />, color: '#26A69A' },
              { name: 'KOT Matrix', role: 'Kitchen Display', icon: <Monitor size={16} />, color: '#FF6B35' },
              { name: 'Thermal Grid', role: 'WiFi Printing', icon: <Printer size={16} />, color: '#F77F00' },
              { name: 'Waiter Pad', role: 'Mobile Orders', icon: <Smartphone size={16} />, color: '#0EA5E9' },
              { name: 'Forensic Ledger', role: 'Accounting', icon: <Wallet size={16} />, color: '#F59E0B' },
              { name: 'Bio Attendance', role: 'HR Matrix', icon: <Fingerprint size={16} />, color: '#10B981' },
              { name: 'Analytics Hub', role: 'Live Reports', icon: <BarChart3 size={16} />, color: '#8B5CF6' },
              { name: 'Slave Terminal', role: 'Multi-Node', icon: <Layers size={16} />, color: '#06B6D4' },
              { name: 'Cloud Vault', role: 'Auto-Backup', icon: <Cloud size={16} />, color: '#6366F1' },
            ].map((node, i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: `linear-gradient(135deg, ${node.color} 0%, ${node.color}dd 100%)` }}>
                  {node.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-gray-800">{node.name}</div>
                  <div className="text-[8px] font-bold text-[var(--primary-teal)]">{node.role}</div>
                </div>
              </div>
            ))}
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
    </main >
  );
}
