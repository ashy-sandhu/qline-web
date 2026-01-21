'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Zap } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Update background style
      setIsScrolled(currentY > 20);

      // Smart Hide/Show Logic
      if (currentY > lastY && currentY > 100) {
        setHidden(true); // Scrolling Down
      } else {
        setHidden(false); // Scrolling Up
      }

      setLastY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Anatomy', href: '#anatomy' },
    { name: 'Features', href: '#features' },
    { name: 'Engine', href: '#engine' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`sticky top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-in-out ${isScrolled
          ? 'py-4 bg-white/90 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
          : 'py-8 bg-white'
          }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between">

          {/* Enhanced Branding Section */}
          <Link href="/" className="flex items-center gap-5 group shrink-0">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl shadow-[var(--primary-teal)]/10 group-hover:scale-105 transition-all duration-500 border border-white/40 overflow-hidden">
              <Image
                src="/app_logo.png"
                alt="QLINE Logo"
                width={60}
                height={60}
                className="object-contain p-2 md:p-2.5"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-teal)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-[900] tracking-[-0.05em] text-[var(--primary-teal-dark)] leading-none mb-1">
                QLINE <span className="text-[var(--primary-teal)]">POS</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-[var(--primary-teal)] opacity-80">
                  Evolutionary Intelligence
                </span>
                <div className="h-[1px] w-8 bg-[var(--primary-teal)]/30 hidden sm:block"></div>
              </div>
            </div>
          </Link>

          {/* High-Class Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-6 py-2.5 text-[13px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/70 hover:text-[var(--primary-teal)] transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-[var(--primary-teal)]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-6 mr-6">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)] opacity-40">
                <Globe size={14} />
                <span>Global V4.0</span>
              </div>
            </div>

            <button className="btn-primary !py-4 !px-8 !text-xs !rounded-2xl shadow-xl shadow-[var(--primary-teal)]/20 hover:shadow-[var(--primary-teal)]/40 transition-shadow flex items-center gap-3">
              <span className="font-black uppercase tracking-widest">Book a Demo</span>
              <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                <ChevronRight size={16} />
              </div>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-3 text-[var(--primary-teal-dark)] bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 hover:bg-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-[var(--primary-teal-dark)]/10 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-md bg-white shadow-[-20px_0_80px_rgba(0,0,0,0.1)] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--primary-teal)] rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-[var(--primary-teal)]/20">
                    <Image src="/app_logo.png" alt="Logo" width={32} height={32} className="invert brightness-0" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-[var(--primary-teal-dark)]">QLINE</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-black/5 rounded-2xl text-[var(--primary-teal-dark)] hover:bg-black/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-5xl font-black text-[var(--primary-teal-dark)]/20 hover:text-[var(--primary-teal)] transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="p-6 rounded-3xl bg-[var(--primary-teal)]/5 border border-[var(--primary-teal)]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={18} className="text-[var(--primary-teal)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal)]">System Status</span>
                  </div>
                  <div className="text-xl font-black text-[var(--primary-teal-dark)]">Operational 100%</div>
                </div>

                <button className="w-full btn-primary py-6 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-[var(--primary-teal)]/20">
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
