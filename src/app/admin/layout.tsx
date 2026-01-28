'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Key, ShieldCheck, LogOut, Menu, X, User } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    // If on login page, don't show the sidebar layout
    if (pathname === '/admin') return <>{children}</>;

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
        { name: 'License Keys', icon: Key, href: '/admin/keys' },
    ];

    const handleLogout = () => {
        // Simple client-side logout by clearing the cookie
        document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        router.push('/admin');
    };

    return (
        <div className="min-h-screen bg-[var(--bg-main)] flex admin-portal">
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`
                fixed lg:relative z-50 h-full transition-all duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                ${isSidebarOpen ? 'w-64' : 'lg:w-20'}
                glass-panel border-r border-white/40 flex flex-col bg-white/80
            `}>
                <div className="p-6 flex items-center justify-between lg:justify-start gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--primary-teal-dark)] flex items-center justify-center shrink-0 shadow-lg">
                            <ShieldCheck className="text-white" size={20} />
                        </div>
                        {(isSidebarOpen) && <span className="font-bold text-teal-gradient text-xl whitespace-nowrap">Q-Line Admin</span>}
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 hover:bg-teal-50 rounded-lg text-teal-600 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                                }}
                                className={`
                                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                                    ${isActive
                                        ? 'bg-[var(--primary-teal)] text-white shadow-[0_8px_16px_rgba(38,166,154,0.3)]'
                                        : 'text-muted hover:bg-[var(--primary-teal)]/10 hover:text-[var(--primary-teal)]'}
                                `}
                            >
                                <item.icon size={20} className="shrink-0" />
                                <span className={`font-semibold whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'lg:hidden opacity-0'}`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/40">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50/50 rounded-xl transition-all font-semibold"
                    >
                        <LogOut size={20} className="shrink-0" />
                        <span className={`whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'lg:hidden opacity-0'}`}>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 min-h-screen">
                <header className="h-20 glass-panel border-b border-white/40 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 bg-white/60">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-teal-50 rounded-lg text-[var(--primary-teal)] transition-colors">
                            <Menu size={24} />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-sm font-black text-[var(--primary-teal-dark)] uppercase tracking-widest opacity-40">System Control</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block text-right">
                            <p className="text-sm font-bold text-[var(--primary-teal-dark)] leading-tight">System Admin</p>
                            <p className="text-[10px] text-muted font-bold uppercase tracking-tighter">Portal v4.0</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[var(--primary-teal)]/10 border border-[var(--primary-teal)]/20 flex items-center justify-center">
                            <User size={20} className="text-[var(--primary-teal)]" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-4 md:p-8 custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
