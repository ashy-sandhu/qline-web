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

      {/* Hero Section - The "Showstopper" */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-56">
        <div className="content-container !max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full lg:w-[60%] text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-2xl shadow-[var(--primary-teal)]/20 text-[var(--primary-teal-dark)] text-sm font-black uppercase tracking-[0.2em] mb-12 border border-[var(--primary-teal)]/10"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-teal)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary-teal)]"></span>
                </div>
                V4.0 Quantum Core Engine
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-7xl md:text-[110px] font-[900] text-[var(--primary-teal-dark)] leading-[0.85] tracking-[-0.04em] mb-12"
              >
                The OS for <br />
                <span className="text-teal-gradient">Dominating</span> <br />
                the Floor.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-2xl md:text-3xl text-[var(--text-muted)] max-w-3xl mx-auto lg:mx-0 mb-16 leading-tight font-medium opacity-80"
              >
                Precision-engineered for high-pressure dining. Zero lag, military-grade financial auditing, and biometric staff sync.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-8 justify-center lg:justify-start"
              >
                <button className="btn-primary !px-16 !py-8 !text-2xl !rounded-[40px] shadow-[0_25px_50px_-12px_rgba(38,166,154,0.5)] group hover:scale-105 transition-all">
                  Claim Your Evolution
                  <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-200"></div>)}
                  </div>
                  <div className="text-sm">
                    <div className="font-black text-[var(--primary-teal-dark)] underline">5,000+ Establishments</div>
                    <div className="text-[var(--text-muted)] font-bold">Trading today on QLINE</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-full lg:w-[40%] relative"
            >
              <div className="relative z-10 glass-panel rounded-[80px] p-6 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.2)] border-[6px] border-white backdrop-blur-3xl overflow-hidden group">
                <div className="aspect-[4/5] rounded-[60px] bg-gradient-to-br from-[var(--primary-teal-dark)] to-[#0c1a19] flex items-center justify-center relative">
                  <LayoutGrid size={240} className="text-white/[0.03] group-hover:scale-150 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>

                  {/* Abstract UI Elements */}
                  <div className="absolute top-20 left-12 right-12 space-y-8">
                    <div className="h-4 w-32 bg-[var(--primary-teal)]/30 rounded-full"></div>
                    <div className="h-16 w-full bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="h-64 w-full bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-teal)]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Floating Badge */}
              <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 p-10 bg-white rounded-[50px] shadow-3xl z-20 border-b-[8px] border-[var(--primary-teal)] flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-[var(--primary-teal)]">
                  <Zap size={32} />
                </div>
                <div>
                  <div className="text-[12px] font-black uppercase text-gray-400 tracking-widest">Network Speed</div>
                  <div className="text-4xl font-black text-[var(--primary-teal-dark)]">0.1ms</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
