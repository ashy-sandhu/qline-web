'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] overflow-x-hidden">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 -z-20 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[var(--primary-teal)] blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--accent-blue)] blur-[100px] animation-delay-2000"></div>
      </div>

      {/* Text Header Section - Immediately after Navbar */}
      <section className="pb-3 md:pb-6 bg-white relative overflow-hidden">
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
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[var(--primary-teal)]/5 text-[var(--primary-teal)] text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-[var(--primary-teal)]/10"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary-teal)]"></span>
              </div>
              Quantum Engine V4.0
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl xl:text-7xl font-[900] text-[var(--primary-teal-dark)] leading-[1.1] tracking-[-0.04em] mb-8"
            >
              The OS for <br />
              <span className="text-teal-gradient">Dominating</span> the Floor.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mb-12 leading-relaxed font-medium opacity-90"
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
              className="relative h-[500px] md:h-[90vh] w-full rounded-[40px] md:rounded-[100px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(38,166,154,0.3)] border-[8px] md:border-[20px] border-white ring-1 ring-black/5 group z-10"
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
                  objectPosition: ["0% 50%", "50% 50%"],
                  scale: [1.05, 1]
                }}
                transition={{
                  duration: 20,
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

              <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20">
                <div className="glass-panel !bg-white/10 !backdrop-blur-3xl !border-white/20 px-6 py-4 rounded-2xl flex items-center gap-4 text-white hover:scale-105 transition-transform border">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-teal)]/20 flex items-center justify-center border border-white/20">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60">Production Build</span>
                    <span className="text-xs font-black uppercase tracking-widest">Live Experience</span>
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
          <div className="text-center max-w-5xl mx-auto mb-40 pt-20 pb-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[var(--primary-teal)] font-black uppercase tracking-[0.8em] text-sm mb-10 block"
            >
              System Hierarchy
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-teal-dark)] mb-8 tracking-[-0.03em]">
              The <span className="text-teal-gradient underline decoration-[var(--primary-teal)]/20 underline-offset-[8px]">Anatomy</span> of Power.
            </h2>
          </div>

          {/* Using display: grid with explicit template columns to override any tailwind/viewport issues */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
          >
            {[
              {
                icon: <LayoutDashboard size={40} />,
                title: "Quantum Terminal",
                desc: "High-frequency transaction engine. Not just a tablet—a localized mission control for every order.",
                tag: "ENGINE",
                gradient: "from-teal-500/10 via-white to-white",
                image: "/images/modules/terminal.png"
              },
              {
                icon: <Wallet size={40} />,
                title: "Financial Matrix",
                desc: "Advanced CP/CR voucher cycles linked to daily reconciliation silos. Absolute financial integrity.",
                tag: "SECURITY",
                gradient: "from-blue-500/10 via-white to-white",
                image: "/images/modules/financial.png"
              },
              {
                icon: <Fingerprint size={40} />,
                title: "Bio HR Core",
                desc: "Biometric clock-in gates directly feeding automated payroll logic. Efficiency enforced.",
                tag: "MANAGEMENT",
                gradient: "from-emerald-500/10 via-white to-white",
                image: "/images/modules/hr.png"
              },
              {
                icon: <BarChart3 size={40} />,
                title: "Active Intelligence",
                desc: "Live revenue streams and inventory velocity mapped to 50+ forensic reports.",
                tag: "ANALYTICS",
                gradient: "from-orange-500/10 via-white to-white",
                image: "/images/modules/analytics.png"
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Guardian Audit",
                desc: "Manager override locks and role-based encryption shields for total data sovereignty.",
                tag: "PROTECTION",
                gradient: "from-purple-500/10 via-white to-white",
                image: "/images/modules/security.png"
              },
              {
                icon: <MonitorSmartphone size={40} />,
                title: "Ubiquitous Access",
                desc: "Infinite scalability across cloud, mobile, and on-premise hardware. Your empire, anywhere.",
                tag: "SCALE",
                gradient: "from-sky-500/10 via-white to-white",
                image: "/images/modules/terminal.png" // Fallback to terminal for the 6th
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
                <div className="w-20 h-20 rounded-[30px] bg-white shadow-2xl flex items-center justify-center text-[var(--primary-teal-dark)] mb-4! group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-500">
                  {feature.icon}
                </div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                      View Interface
                    </span>
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
          <div className="flex flex-col md:flex-row justify-between mb-24">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] bg-white shadow-sm rounded-full border border-[var(--primary-teal)]/10"
              >
                <Sparkles size={12} />
                Feature Ecosystem v4.2
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-black text-[var(--primary-teal-dark)] leading-tight tracking-tighter">
                Built for the <br />
                <span className="text-teal-gradient">Relentless.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right pb-4">
              <p className="text-[var(--text-muted)] font-medium max-w-[280px]">
                Consolidating every operational node into a single, unified quantum baseline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                category: "Core Operations",
                description: "High-performance modules for floor and kitchen management.",
                items: [
                  {
                    icon: <LayoutDashboard className="w-8 h-8" />,
                    title: "Intelligent POS Terminal",
                    desc: "Touch-optimized interface for lightning-fast order entry. Support for Dine-In, Takeaway, and Home Delivery.",
                    tags: ["Order Modifiers", "KDS Sync", "Split Billing"]
                  },
                  {
                    icon: <Layers className="w-8 h-8" />,
                    title: "Floor Evolution",
                    desc: "Visual representation of your restaurant layout. Track occupancy and waiter assignments in real-time.",
                    tags: ["Drag-and-drop", "Timed occupancy", "Multi-floor"]
                  }
                ]
              },
              {
                category: "Financial Armor",
                description: "Deep accounting modules that solve the 'missing cash' mystery.",
                items: [
                  {
                    icon: <Wallet className="w-8 h-8" />,
                    title: "Voucher Cycles",
                    desc: "Professional Cash Payment (CP) and Cash Receive (CR) vouchers. Track every penny moving in and out.",
                    tags: ["Bank Integration", "Expense Tracking", "Capital Mgmt"]
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    title: "Audit Day Closing",
                    desc: "Automated end-of-day reconciliation. Cross-reference sales and vouchers to ensure 100% accuracy.",
                    tags: ["Automatic P&L", "Cash Reconcile", "Closing Summary"]
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: iIdx * 0.1 }}
                      className="group bg-white p-8 md:p-12 rounded-[40px] border border-black/5 hover:border-[var(--primary-teal)]/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[var(--primary-teal)]/5"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-10">
                        <div className="w-20 h-20 rounded-3xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--primary-teal)] group-hover:bg-[var(--primary-teal)] group-hover:text-white transition-all duration-500">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-4">{item.title}</h4>
                          <p className="text-[var(--text-muted)] text-base font-medium leading-relaxed mb-8">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-4 py-1.5 rounded-full bg-[var(--bg-main)] text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/40 group-hover:bg-[var(--primary-teal)]/5 group-hover:text-[var(--primary-teal)] transition-colors">
                                {tag}
                              </span>
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

              <h2 className="text-5xl md:text-8xl font-black text-[var(--primary-teal-dark)] leading-[1.1] tracking-tighter mb-8!">
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

              <div className="flex flex-wrap items-center gap-10">
                <div className="flex -space-x-4">
                  {['Android', 'iOS', 'Win', 'Mac', 'Web'].map((os, idx) => (
                    <div key={idx} className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-lg flex items-center justify-center text-[8px] font-black text-[var(--text-muted)] z-[idx]">
                      {os}
                    </div>
                  ))}
                </div>
                <div className="h-10 w-px bg-black/10"></div>
                <div className="text-xs font-black uppercase tracking-widest text-[var(--primary-teal-dark)]">
                  Universal Binary Support
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
                {/* Visual representation of devices */}
                <div className="relative aspect-square max-w-[500px] mx-auto">
                  {/* Main Desktop Frame */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[85%] h-[70%] bg-[var(--primary-teal-dark)] rounded-[40px] shadow-4xl border-[12px] border-white ring-1 ring-black/5 overflow-hidden flex items-center justify-center p-8"
                  >
                    <div className="w-full h-full bg-white/5 rounded-2xl flex flex-col gap-4 p-4">
                      <div className="w-1/2 h-4 bg-white/10 rounded-full"></div>
                      <div className="grid grid-cols-3 gap-2 flex-grow">
                        <div className="bg-white/10 rounded-xl"></div>
                        <div className="bg-white/10 rounded-xl"></div>
                        <div className="bg-white/10 rounded-xl"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tablet Frame */}
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-0 left-0 w-[60%] h-[55%] bg-[var(--primary-teal)] rounded-[30px] shadow-4xl border-[10px] border-white ring-1 ring-black/5 overflow-hidden z-20 flex items-center justify-center p-6"
                  >
                    <div className="w-full h-full bg-white/10 rounded-xl flex flex-col gap-3">
                      <div className="w-2/3 h-3 bg-white/20 rounded-full"></div>
                      <div className="grid grid-cols-2 gap-2 flex-grow">
                        <div className="bg-white/20 rounded-lg"></div>
                        <div className="bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Frame */}
                  <motion.div
                    animate={{ y: [10, -15, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[10%] right-[10%] w-[30%] h-[50%] bg-[var(--accent-blue)] rounded-[35px] shadow-4xl border-[8px] border-white ring-1 ring-black/5 z-30 overflow-hidden flex items-center justify-center p-4 px-2"
                  >
                    <div className="w-full h-full bg-white/15 rounded-2xl flex flex-col items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
                      <div className="w-4/5 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-4/5 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-4/5 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Connectivity Lines / Arcs */}
                  <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" viewBox="0 0 100 100">
                    <path d="M70,30 Q90,50 70,80" fill="none" stroke="var(--primary-teal)" strokeWidth="0.5" strokeDasharray="2 2" />
                    <path d="M30,80 Q50,50 70,30" fill="none" stroke="var(--accent-blue)" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
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

      {/* CTA SECTION - ULTRA HIGH WEIGHT */}
      <section id="download" className="py-40">
        <div className="content-container !max-w-[1400px]">
          <div className="bg-[var(--primary-teal-dark)] rounded-[90px] p-24 md:p-40 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-teal)_0%,transparent_70%)] opacity-20"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-tight">
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
