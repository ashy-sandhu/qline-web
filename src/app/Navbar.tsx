'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for background styling
      setIsScrolled(currentScrollY > 20);

      // Visibility state for hide/show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-8'
          }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between">

          {/* Logo Section - Responsive Name */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group shrink-0">
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/5 group-hover:scale-105 transition-all duration-500 overflow-hidden border border-black/5">
              <Image
                src="/app_logo.png"
                alt="QLINE Logo"
                width={48}
                height={48}
                className="object-contain p-1.5 md:p-2"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black tracking-tighter text-[var(--primary-teal-dark)] leading-none">
                QLINE <span className="hidden sm:inline text-[var(--primary-teal)]">POS</span>
              </span>
              <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary-teal)] mt-0.5">
                Revolution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-bold text-[var(--primary-teal-dark)]/70 hover:text-[var(--primary-teal)] hover:bg-[var(--primary-teal)]/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link
              href="/login"
              className="hidden sm:block text-xs md:text-sm font-black uppercase tracking-widest text-[var(--primary-teal-dark)] hover:text-[var(--primary-teal)] transition-colors"
            >
              Login
            </Link>
            <button className="btn-primary !py-2.5 !px-5 md:!py-3.5 md:!px-8 !text-[10px] md:!text-sm shadow-xl shadow-[var(--primary-teal)]/20">
              <span className="hidden xs:inline">Request Live Demo</span>
              <span className="xs:hidden">Demo</span>
              <ChevronRight size={18} className="hidden md:block ml-1" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-[var(--primary-teal-dark)] bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary-teal)] rounded-lg flex items-center justify-center p-2 shadow-sm">
                    <Image src="/app_logo.png" alt="Logo" width={28} height={28} />
                  </div>
                  <span className="text-2xl font-black text-[var(--primary-teal-dark)]">QLINE</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-black/5 rounded-xl text-[var(--primary-teal-dark)]">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold text-[var(--primary-teal-dark)]/30 hover:text-[var(--primary-teal-dark)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-black/5">
                <button className="w-full btn-primary py-5 rounded-2xl text-lg shadow-2xl shadow-[var(--primary-teal)]/20">
                  Request Live Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
