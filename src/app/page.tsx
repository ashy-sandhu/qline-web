'use client';

import { motion, Variants } from 'framer-motion';
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
      <section className="pt-40 md:pt-52 pb-20 md:pb-24 bg-white relative overflow-hidden">
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
              className="text-6xl md:text-[100px] xl:text-[130px] font-[900] text-[var(--primary-teal-dark)] leading-[0.8] tracking-[-0.05em] mb-12"
            >
              The OS for <br />
              <span className="text-teal-gradient">Dominating</span> the Floor.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-3xl text-[var(--text-muted)] max-w-4xl mb-16 leading-tight font-medium opacity-90"
            >
              Precision-engineered for high-pressure dining. Zero lag, military-grade financial auditing, and biometric staff sync.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center gap-8 mb-20"
            >
              <button className="btn-primary !px-16 !py-8 !text-2xl !rounded-full shadow-3xl group hover:scale-105 transition-all">
                Claim Your Evolution
                <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section - With Corner Floating Elements */}
      <section className="relative px-6 md:px-12 pb-24 md:pb-40 bg-white overflow-visible">
        <div className="max-w-[1700px] mx-auto relative">

          {/* Large Corner Floating Elements */}
          <div className="absolute inset-x-0 h-full pointer-events-none z-20 -inset-y-10">
            {/* Badge 1: Top Left - Network Speed */}
            <motion.div
              animate={{
                y: [0, -40, 20, 0],
                x: [0, 30, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-20px] left-[-20px] md:top-[0px] md:left-[0px] pointer-events-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="glass-panel px-8 py-5 md:px-10 md:py-6 rounded-[32px] flex items-center gap-6 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] backdrop-blur-3xl border-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[22px] bg-teal-50 flex items-center justify-center text-[var(--primary-teal)] shadow-inner">
                  <Zap size={32} className="fill-[var(--primary-teal)]" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] md:text-[12px] font-black uppercase text-gray-400 tracking-[0.3em] mb-1">Latency</div>
                  <div className="text-xl md:text-3xl font-black text-[var(--primary-teal-dark)] leading-none">0.1ms</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 2: Top Right - System Uptime */}
            <motion.div
              animate={{
                y: [0, 50, -30, 0],
                x: [0, -40, 20, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40px] right-[-10px] md:top-[80px] md:right-[-20px] pointer-events-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-panel px-8 py-5 md:px-10 md:py-6 rounded-[32px] flex items-center gap-6 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] backdrop-blur-3xl border-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[22px] bg-blue-50 flex items-center justify-center text-[var(--accent-blue)] shadow-inner">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] md:text-[12px] font-black uppercase text-gray-400 tracking-[0.3em] mb-1">Reliability</div>
                  <div className="text-xl md:text-3xl font-black text-[var(--primary-teal-dark)] leading-none">99.9%</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 3: Bottom Left - Global Sync */}
            <motion.div
              animate={{
                y: [0, 30, -50, 0],
                x: [0, 40, -30, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[80px] left-[-30px] md:bottom-[120px] md:left-[-40px] pointer-events-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="glass-panel px-8 py-5 md:px-10 md:py-6 rounded-[32px] flex items-center gap-6 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] backdrop-blur-3xl border-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[22px] bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-inner">
                  <LayoutGrid size={32} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] md:text-[12px] font-black uppercase text-gray-400 tracking-[0.3em] mb-1">Global Sync</div>
                  <div className="text-xl md:text-3xl font-black text-[var(--primary-teal-dark)] leading-none">LIVE</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge 4: Bottom Right - AI Audit */}
            <motion.div
              animate={{
                y: [0, -60, 40, 0],
                x: [0, -20, 50, 0],
                rotate: [0, -3, 3, 0]
              }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[20px] right-[-20px] md:bottom-[40px] md:right-[-30px] pointer-events-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="glass-panel px-8 py-5 md:px-10 md:py-6 rounded-[32px] flex items-center gap-6 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] backdrop-blur-3xl border-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[22px] bg-purple-50 flex items-center justify-center text-purple-500 shadow-inner">
                  <BarChart3 size={32} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] md:text-[12px] font-black uppercase text-gray-400 tracking-[0.3em] mb-1">AI Oversight</div>
                  <div className="text-xl md:text-3xl font-black text-[var(--primary-teal-dark)] leading-none">L5 AUDIT</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] md:h-[90vh] w-full rounded-[60px] md:rounded-[100px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] border-8 md:border-[16px] border-white ring-1 ring-black/5 group z-10"
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
            >
              <source src="/video/hero-section-video.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>

            {/* Interactive Play Badge for aesthetic */}
            <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20">
              <div className="glass-panel !bg-white/20 !backdrop-blur-2xl !border-white/30 px-6 py-4 rounded-full flex items-center gap-4 text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Live Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Forced 3-Column Grid Section */}
      <section className="py-56 bg-white relative">
        <div className="content-container">
          <div className="text-center max-w-5xl mx-auto mb-40">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[var(--primary-teal)] font-black uppercase tracking-[0.8em] text-sm mb-10 block"
            >
              System Hierarchy
            </motion.span>
            <h2 className="text-6xl md:text-[88px] font-black text-[var(--primary-teal-dark)] mb-12 tracking-[-0.04em]">
              The <span className="text-teal-gradient underline decoration-[var(--primary-teal)]/20 underline-offset-[12px]">Anatomy</span> of Power.
            </h2>
          </div>

          {/* Using display: grid with explicit template columns to override any tailwind/viewport issues */}
          <div
            className="grid gap-12 lg:gap-16"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              width: '100%'
            }}
          >
            {[
              {
                icon: <LayoutDashboard size={48} />,
                title: "Quantum Terminal",
                desc: "High-frequency transaction engine. Not just a tablet—a localized mission control for every order.",
                tag: "ENGINE",
                gradient: "from-teal-500/10 via-white to-white"
              },
              {
                icon: <Wallet size={48} />,
                title: "Financial Matrix",
                desc: "Advanced CP/CR voucher cycles linked to daily reconciliation silos. Absolute financial integrity.",
                tag: "SECURITY",
                gradient: "from-blue-500/10 via-white to-white"
              },
              {
                icon: <Fingerprint size={48} />,
                title: "Bio HR Core",
                desc: "Biometric clock-in gates directly feeding automated payroll logic. Efficiency enforced.",
                tag: "MANAGEMENT",
                gradient: "from-emerald-500/10 via-white to-white"
              },
              {
                icon: <BarChart3 size={48} />,
                title: "Active Intelligence",
                desc: "Live revenue streams and inventory velocity mapped to 50+ forensic reports.",
                tag: "ANALYTICS",
                gradient: "from-orange-500/10 via-white to-white"
              },
              {
                icon: <ShieldCheck size={48} />,
                title: "Guardian Audit",
                desc: "Manager override locks and role-based encryption shields for total data sovereignty.",
                tag: "PROTECTION",
                gradient: "from-purple-500/10 via-white to-white"
              },
              {
                icon: <MonitorSmartphone size={48} />,
                title: "Ubiquitous Access",
                desc: "Infinite scalability across cloud, mobile, and on-premise hardware. Your empire, anywhere.",
                tag: "SCALE",
                gradient: "from-sky-500/10 via-white to-white"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className={`premium-card p-14 group flex flex-col items-start bg-gradient-to-br ${feature.gradient} border-2 border-transparent hover:border-[var(--primary-teal)]/20 transition-all duration-700 min-h-[480px] shadow-2xl shadow-gray-100`}
              >
                <div className="w-24 h-24 rounded-[36px] bg-white shadow-3xl flex items-center justify-center text-[var(--primary-teal-dark)] mb-12 group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  {feature.icon}
                </div>
                <div className="px-4 py-1.5 rounded-full bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] text-[10px] font-black tracking-widest mb-6">
                  {feature.tag}
                </div>
                <h3 className="text-4xl font-black text-[var(--primary-teal-dark)] mb-8 tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-auto">
                  {feature.desc}
                </p>
                <div className="mt-16 w-full flex items-center justify-between group-hover:px-4 transition-all duration-500 border-t border-black/5 pt-8">
                  <div className="text-sm font-black text-[var(--primary-teal)]">EXPLORE MODULE</div>
                  <ArrowUpRight size={28} className="text-[var(--primary-teal)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - ULTRA HIGH WEIGHT */}
      <section className="py-40">
        <div className="content-container !max-w-[1400px]">
          <div className="bg-[var(--primary-teal-dark)] rounded-[90px] p-24 md:p-40 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-teal)_0%,transparent_70%)] opacity-20"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-6xl md:text-[100px] font-black text-white mb-16 tracking-tighter leading-none">
                Future-Proof <br />
                <span className="text-teal-gradient animate-pulse">Your Revenue.</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-12">
                <button className="btn-primary !bg-white !text-[var(--primary-teal-dark)] !px-20 !py-10 !text-3xl !rounded-[50px] shadow-4xl hover:!scale-110 active:scale-95 transition-all">
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
