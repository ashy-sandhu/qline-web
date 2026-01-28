'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Zap, ChevronDown, LayoutGrid, Wallet, Fingerprint, BarChart3, ShieldCheck, Cloud, MonitorSmartphone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const lastYRef = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Update background style
      setIsScrolled(currentY > 20);

      // Smart Hide/Show Logic
      if (currentY > lastYRef.current && currentY > 100) {
        setHidden(true); // Scrolling Down
      } else {
        setHidden(false); // Scrolling Up
      }

      lastYRef.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Modules',
      href: '/#anatomy',
      dropdown: [
        { name: 'POS Node', href: '/modules/pos-node', icon: <LayoutGrid size={16} /> },
        { name: 'Forensic Ledger', href: '/modules/ledger', icon: <Wallet size={16} /> },
        { name: 'Attendance Matrix', href: '/modules/attendance', icon: <Fingerprint size={16} /> },
        { name: 'Revenue Pulse', href: '/modules/analytics', icon: <BarChart3 size={16} /> },
        { name: 'Audit Protocol', href: '/modules/audit', icon: <ShieldCheck size={16} /> },
        { name: 'Cloud Sovereignty', href: '/modules/cloud', icon: <Cloud size={16} /> },
      ]
    },
    {
      name: 'Features',
      href: '/#features',
      dropdown: [
        { name: 'System Anatomy', href: '/#anatomy', icon: <LayoutGrid size={16} /> },
        { name: 'Universal Display', href: '/#engine', icon: <MonitorSmartphone size={16} /> },
        { name: 'Executive Hub', href: '/#executive-hub', icon: <Zap size={16} /> },
        { name: 'Performance Ecosystem', href: '/#operational-ecosystem', icon: <BarChart3 size={16} /> },
      ]
    },
    { name: 'Engine', href: '/#engine' },
    { name: 'Download', href: '/download' },
  ];

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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
          ? 'py-1 bg-white/90 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
          : 'py-1 bg-white'
          }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-[5px] md:px-[40px] lg:px-[40px] flex items-center justify-between">

          {/* Enhanced Branding Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-5 group shrink-0">
            <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#001f1c] flex items-center justify-center shadow-2xl shadow-black/20 group-hover:scale-105 transition-all duration-500 border border-white/5 overflow-hidden">
              <Image
                src="/app_logo.png"
                alt="QLINE Logo"
                width={60}
                height={60}
                className="object-contain p-1 md:p-2"
                priority
                sizes="60px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-2xl font-[900] tracking-[-0.05em] text-[var(--primary-teal-dark)] leading-none mb-0.5 md:mb-1">
                QLINE <span className="text-[var(--primary-teal)]">POS</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[7px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-[var(--primary-teal-dark)] whitespace-nowrap">
                  Evolutionary Intelligence
                </span>
                <div className="h-[1px] w-8 bg-[var(--primary-teal)]/50 hidden sm:block"></div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className="relative px-[24px] py-[10px] text-[13px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/70 hover:text-[var(--primary-teal)] transition-all duration-300 group flex items-center gap-2"
                >
                  <span className="relative z-10">{link.name}</span>
                  {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  <span className="absolute inset-0 bg-[var(--primary-teal)]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-[110]"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl border border-black/5 p-4 overflow-hidden">
                          <div className="grid gap-2">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[var(--primary-teal)]/5 group/sub transition-colors"
                              >
                                <div className="w-8 h-8 rounded-xl bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] flex items-center justify-center group-hover/sub:bg-[var(--primary-teal)] group-hover/sub:text-white transition-all">
                                  {subItem.icon}
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/80 group-hover/sub:text-[var(--primary-teal)] transition-colors">
                                  {subItem.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-6 mr-6">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]">
                <Globe size={14} />
                <span>Global V4.0</span>
              </div>
            </div>

            <button className="btn-primary !py-3 !px-3 sm:!py-3.5 sm:!px-6 md:!py-4 md:!px-8 !text-[10px] sm:!text-xs !rounded-xl sm:!rounded-2xl shadow-xl shadow-[var(--primary-teal)]/20 hover:shadow-[var(--primary-teal)]/40 transition-shadow flex items-center gap-2 sm:gap-3">
              <span className="font-black uppercase tracking-widest whitespace-nowrap">Book Demo</span>
              <div className="hidden sm:flex w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/20 items-center justify-center">
                <ChevronRight size={14} className="sm:size-4" />
              </div>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-3 text-[var(--primary-teal-dark)] bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 hover:bg-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
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
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-md bg-white shadow-[-20px_0_80px_rgba(0,0,0,0.1)] p-8 md:p-12 flex flex-col border-l border-black/5"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#001f1c] rounded-xl flex items-center justify-center p-2 shadow-lg shadow-black/20 border border-white/5">
                    <Image src="/app_logo.png" alt="Logo" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-[900] tracking-[-0.05em] text-[var(--primary-teal-dark)] leading-none">
                      QLINE <span className="text-[var(--primary-teal)]">POS</span>
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--primary-teal-dark)]">
                      Evolutionary Intelligence
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-[var(--primary-teal)]/5 rounded-2xl text-[var(--primary-teal-dark)] hover:bg-[var(--primary-teal)]/10 transition-colors"
                  aria-label="Close Mobile Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {!link.dropdown ? (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/80 hover:text-[var(--primary-teal)] transition-all duration-300 block py-2"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full text-2xl font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/80 hover:text-[var(--primary-teal)] transition-all duration-300 py-2"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={24} className={`transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180 text-[var(--primary-teal)]' : 'opacity-40'}`} />
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-2 pl-4 border-l-2 border-[var(--primary-teal)]/10 ml-2 mb-4"
                            >
                              {link.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[var(--primary-teal)]/5 group/sub transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-xl bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] flex items-center justify-center group-hover/sub:bg-[var(--primary-teal)] group-hover/sub:text-white transition-all">
                                    {subItem.icon}
                                  </div>
                                  <span className="text-[11px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]/60 group-hover/sub:text-[var(--primary-teal)] transition-colors">
                                    {subItem.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 space-y-4">
                <div className="p-5 rounded-3xl bg-[var(--primary-teal)]/5 border border-[var(--primary-teal)]/10">
                  <div className="flex items-center gap-3 mb-1">
                    <Zap size={16} className="text-[var(--primary-teal)]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-[var(--primary-teal-dark)]">System Status</span>
                  </div>
                  <div className="text-lg font-black text-[var(--primary-teal-dark)]">Operational 100%</div>
                </div>

                <button className="w-full btn-primary py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-[var(--primary-teal)]/20">
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
