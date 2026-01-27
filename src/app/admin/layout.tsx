'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
        <div className="min-h-screen bg-[var(--bg-main)] flex">
            {/* Sidebar */}
            <aside className={`
                fixed lg:relative z-40 h-full transition-all duration-300
                ${isSidebarOpen ? 'w-64' : 'w-20'}
                glass-panel border-r border-white/40 flex flex-col
            `}>
                <div className="p-6 flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--primary-teal-dark)] flex items-center justify-center shrink-0 shadow-lg">
                        <ShieldCheck className="text-white" size={20} />
                    </div>
                    {isSidebarOpen && <span className="font-bold text-teal-gradient text-xl whitespace-nowrap">Q-Line Admin</span>}
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                                ${pathname === item.href
                                    ? 'bg-[var(--primary-teal)] text-white shadow-md'
                                    : 'text-muted hover:bg-[var(--primary-teal)]/10 hover:text-[var(--primary-teal)]'}
                            `}
                        >
                            <item.icon size={20} className="shrink-0" />
                            {isSidebarOpen && <span className="font-semibold whitespace-nowrap">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/40">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50/50 rounded-xl transition-all font-semibold"
                    >
                        <LogOut size={20} className="shrink-0" />
                        {isSidebarOpen && <span className="whitespace-nowrap">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Mobile Toggle Overlay */}
            {!isSidebarOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/20 z-30" onClick={() => setIsSidebarOpen(true)} />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-20 glass-panel border-b border-white/40 px-8 flex items-center justify-between sticky top-0 z-30">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/50 rounded-lg text-[var(--primary-teal)] transition-colors">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block text-right">
                            <p className="text-sm font-bold text-[var(--primary-teal-dark)] leading-tight">System Admin</p>
                            <p className="text-xs text-muted">Licensing Portal v4.0</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[var(--primary-teal)]/10 border border-[var(--primary-teal)]/20 flex items-center justify-center">
                            <User size={20} className="text-[var(--primary-teal)]" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-8 custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
