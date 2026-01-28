'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    Key,
    Activity,
    ShieldAlert,
    RefreshCcw,
    CheckCircle2,
    XCircle,
    Clock,
    Search,
    X,
    Trash2,
    Ban,
    RotateCcw,
    ChevronRight
} from 'lucide-react';

interface Stats {
    total: number;
    active: number;
    inactive: number;
    suspended: number;
}

interface License {
    id: string;
    key: string;
    status: string;
    hwid: string | null;
    restaurantName: string | null;
    activatedAt: string | null;
}

export default function DashboardPage() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [licenses, setLicenses] = useState<License[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
    const [isManageModalOpen, setIsManageModalOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [statsRes, licensesRes] = await Promise.all([
                fetch('/api/admin/stats'),
                fetch('/api/admin/licenses')
            ]);

            const statsData = await statsRes.json();
            const licensesData = await licensesRes.json();

            if (statsData.success) setStats(statsData.stats || null);
            if (licensesData.success) {
                // Map DB field 'key_code' to UI required field 'key'
                const rawLicenses = licensesData.licenses || [];
                const mappedLicenses = rawLicenses.map((l: any) => ({
                    ...l,
                    key: l.key_code || l.key || 'UNKNOWN-KEY'
                }));
                setLicenses(mappedLicenses);
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAction = async (action: 'suspend' | 'activate' | 'clear' | 'delete' | 'update_name', value?: string) => {
        if (!selectedLicense) return;

        if (action !== 'update_name') {
            const confirmMsg = action === 'delete'
                ? 'Are you sure you want to PERMANENTLY delete this key?'
                : `Are you sure you want to ${action} this license?`;

            if (!window.confirm(confirmMsg)) return;
        }

        setIsUpdating(true);
        try {
            let res;
            if (action === 'delete') {
                res = await fetch(`/api/admin/licenses/${selectedLicense.id}`, { method: 'DELETE' });
            } else {
                const body: any = {};
                if (action === 'suspend') body.status = 'SUSPENDED';
                if (action === 'activate') body.status = 'ACTIVE';
                if (action === 'clear') body.clearHwid = true;
                if (action === 'update_name') body.restaurantName = value;

                res = await fetch(`/api/admin/licenses/${selectedLicense.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
            }

            if (res.ok) {
                if (action !== 'update_name') setIsManageModalOpen(false);
                fetchData();
            } else {
                alert('Action failed. Please try again.');
            }
        } catch (error) {
            alert('A network error occurred.');
        } finally {
            setIsUpdating(false);
        }
    };

    useEffect(() => {
        setIsMounted(true);
        fetchData();
    }, []);

    const filteredLicenses = licenses.filter(l => {
        const keyMatch = (l.key || '').toLowerCase().includes(searchQuery.toLowerCase());
        const nameMatch = (l.restaurantName || '').toLowerCase().includes(searchQuery.toLowerCase());
        return keyMatch || nameMatch;
    });

    if (!isMounted) return null;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-teal-gradient">System Overview</h1>
                    <p className="text-muted">Real-time licensing metrics and activity</p>
                </div>
                <button
                    onClick={fetchData}
                    className="btn-secondary py-2 flex items-center gap-2"
                >
                    <RefreshCcw size={18} className={isLoading ? 'animate-spin' : ''} />
                    Refresh Data
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    label="Total Issued"
                    value={stats?.total || 0}
                    icon={Key}
                    color="teal"
                />
                <StatCard
                    label="Active Bindings"
                    value={stats?.active || 0}
                    icon={CheckCircle2}
                    color="green"
                />
                <StatCard
                    label="Pending Activation"
                    value={stats?.inactive || 0}
                    icon={Clock}
                    color="amber"
                />
                <StatCard
                    label="Suspended"
                    value={stats?.suspended || 0}
                    icon={ShieldAlert}
                    color="red"
                />
            </div>

            {/* Recent Activity Table */}
            <div className="premium-card glass-panel border-white/40 overflow-hidden text-[#1a2e2c]">
                <div className="p-6 border-b border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-[var(--primary-teal-dark)]">License Management</h2>
                    <div className="relative max-w-xs w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                        <input
                            type="text"
                            placeholder="Search by key or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-teal-500/10 focus:border-teal-500 outline-none text-sm transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--primary-teal)]/5">
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm">Product Key</th>
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm">Status</th>
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm">Restaurant</th>
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm">Machine ID</th>
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm">Activated At</th>
                                <th className="p-4 font-bold text-[var(--primary-teal-dark)] text-sm text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/20">
                            {filteredLicenses.map((license) => (
                                <tr key={license.id} className="hover:bg-white/30 transition-colors group">
                                    <td className="p-4 font-mono text-sm">{license.key}</td>
                                    <td className="p-4">
                                        <StatusBadge status={license.status} />
                                    </td>
                                    <td className="p-4 text-sm font-medium">{license.restaurantName || '-'}</td>
                                    <td className="p-4 font-mono text-xs text-muted truncate max-w-[120px]" title={license.hwid || ''}>{license.hwid || 'No Binding'}</td>
                                    <td className="p-4 text-xs text-muted">
                                        {license.activatedAt ? new Date(license.activatedAt).toLocaleString() : 'N/A'}
                                    </td>
                                    <td className="p-4 text-center">
                                        <button
                                            onClick={() => {
                                                setSelectedLicense(license);
                                                setIsManageModalOpen(true);
                                            }}
                                            className="text-[var(--primary-teal)] hover:text-[var(--primary-teal-dark)] text-xs font-extra-bold uppercase tracking-tight transition-colors"
                                        >
                                            Manage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredLicenses.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-12 text-center text-muted">
                                        {isLoading ? 'Fetching records...' : 'No licenses matching your criteria.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Management Modal */}
            <AnimatePresence>
                {isManageModalOpen && selectedLicense && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsManageModalOpen(false)}
                            className="absolute inset-0 bg-[var(--primary-teal-dark)]/40 backdrop-blur-sm shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative z-10 border border-white/40 overflow-hidden"
                        >
                            <button
                                onClick={() => setIsManageModalOpen(false)}
                                className="absolute top-6 right-6 text-muted hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-[var(--primary-teal-dark)] mb-2 tracking-tight">License Control</h3>
                                <p className="text-muted font-mono bg-teal-50 p-2 rounded-lg text-xs tracking-widest">{selectedLicense.key}</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-muted mb-2">Registered Entity</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedLicense.restaurantName || ''}
                                        onBlur={(e) => {
                                            if (e.target.value !== selectedLicense.restaurantName) {
                                                handleAction('update_name', e.target.value);
                                            }
                                        }}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[var(--primary-teal)] focus:bg-white outline-none text-sm font-bold transition-all"
                                        placeholder="Restaurant Name"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <ActionButton
                                        label={selectedLicense.status === 'SUSPENDED' ? 'Activate License' : 'Suspend License'}
                                        sub="Block or grant access"
                                        icon={selectedLicense.status === 'SUSPENDED' ? CheckCircle2 : Ban}
                                        color={selectedLicense.status === 'SUSPENDED' ? 'green' : 'amber'}
                                        disabled={isUpdating}
                                        onClick={() => handleAction(selectedLicense.status === 'SUSPENDED' ? 'activate' : 'suspend')}
                                    />

                                    <ActionButton
                                        label="Clear Binding (HWID)"
                                        sub="Allow transfer to new machine"
                                        icon={RotateCcw}
                                        color="teal"
                                        disabled={isUpdating || !selectedLicense.hwid}
                                        onClick={() => handleAction('clear')}
                                    />
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <ActionButton
                                        label="Delete Key"
                                        sub="Permanent removal"
                                        icon={Trash2}
                                        color="red"
                                        disabled={isUpdating}
                                        onClick={() => handleAction('delete')}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}


function ActionButton({ label, sub, icon: Icon, color, onClick, disabled }: any) {
    const colorStyles: any = {
        teal: 'text-teal-600 bg-teal-50 hover:bg-teal-100 border-teal-100',
        green: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border-emerald-100',
        amber: 'text-amber-600 bg-amber-50 hover:bg-amber-100 border-amber-100',
        red: 'text-rose-600 bg-rose-50 hover:bg-rose-100 border-rose-100',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left group ${colorStyles[color]} ${disabled ? 'opacity-30 cursor-not-allowed grayscale' : ''}`}
        >
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                </div>
                <div>
                    <p className="font-bold tracking-tight">{label}</p>
                    <p className="text-[10px] opacity-70 font-semibold uppercase tracking-wider">{sub}</p>
                </div>
            </div>
            <ChevronRight size={18} className="opacity-30 group-hover:translate-x-1 transition-transform" />
        </button>
    );
}

function StatCard({ label, value, icon: Icon, color }: any) {
    const colorClasses: any = {
        teal: 'bg-teal-500 shadow-teal-500/20',
        green: 'bg-emerald-500 shadow-emerald-500/20',
        amber: 'bg-amber-500 shadow-amber-500/20',
        red: 'bg-rose-500 shadow-rose-500/20',
    };

    return (
        <div className="premium-card p-6 glass-panel border-white/40 flex items-center justify-between group hover:border-[var(--primary-teal)]/30 transition-all">
            <div>
                <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
                <h3 className="text-3xl font-bold text-[var(--primary-teal-dark)]">{value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                <Icon className="text-white" size={24} />
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: any = {
        ACTIVE: 'bg-green-100 text-green-700 border-green-200',
        INACTIVE: 'bg-amber-100 text-amber-700 border-amber-200',
        SUSPENDED: 'bg-red-100 text-red-700 border-red-200',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${styles[status]}`}>
            {status}
        </span>
    );
}
