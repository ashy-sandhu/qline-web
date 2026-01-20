'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Shield } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Download', href: '#download' },
    { name: 'Help', href: '#help' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-6'}`}>
        <div className="content-container !max-w-[1600px]">
          {/* Top Utility Nav - Desktop Only */}
          {!scrolled && (
            <div className="hidden lg:flex items-center justify-between px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary-teal-dark)]/40 mb-2">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><Globe size={12} /> Global Enterprise Edition</span>
                <span className="flex items-center gap-2"><Shield size={12} /> Military Grade Encryption</span>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-[var(--primary-teal)] transition-colors">Support</Link>
                <Link href="#" className="hover:text-[var(--primary-teal)] transition-colors">Downloads</Link>
              </div>
            </div>
          )}

          <nav className={`flex items-center justify-between px-8 h-20 rounded-[28px] border transition-all duration-500 ${scrolled ? 'glass-panel shadow-2xl bg-white/95 border-[var(--primary-teal)]/10' : 'bg-white shadow-lg border-transparent'}`}>

            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-black/5 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                <Image
                  src="/app_logo.png"
                  alt="QLINE Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-black tracking-tighter text-[var(--primary-teal-dark)] leading-none">
                  QLINE <span className="text-[var(--primary-teal)]">POS</span>
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary-teal)]">Revolution</span>
              </div>
            </Link>

            {/* Desktop Center Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-6 py-2 text-sm font-bold text-[var(--primary-teal-dark)] hover:text-[var(--primary-teal)] hover:bg-[var(--primary-teal)]/5 rounded-full transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-6">
              <Link href="/login" className="hidden sm:block text-sm font-black uppercase tracking-widest text-[var(--primary-teal-dark)] hover:text-[var(--primary-teal)] transition-colors">
                Login
              </Link>
              <button className="btn-primary !py-3.5 !px-8 !text-sm shadow-[0_15px_30px_-10px_rgba(38,166,154,0.5)]">
                Request Live Demo
                <ChevronRight size={18} />
              </button>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-3 text-[var(--primary-teal-dark)] bg-[var(--primary-teal)]/5 rounded-2xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Side-sliding Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[120] bg-[var(--primary-teal-dark)] p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                  <Image src="/app_logo.png" alt="Logo" width={32} height={32} />
                </div>
                <div className="text-3xl font-black text-white tracking-tighter">QLINE</div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-3 bg-white/10 rounded-2xl">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-light text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/10 my-8"></div>
              <button className="btn-primary !bg-white !text-[var(--primary-teal-dark)] text-2xl py-6 rounded-[30px] shadow-2xl">
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
