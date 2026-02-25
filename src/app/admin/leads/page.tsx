'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    MapPin,
    Building2,
    Calendar,
    CheckCircle2,
    Clock,
    XCircle,
    UserCircle,
    ChevronDown,
    ExternalLink
} from 'lucide-react';

const STATUS_OPTIONS = [
    { value: 'all', label: 'All Leads', color: 'bg-slate-100 text-slate-600' },
    { value: 'opened', label: 'New', color: 'bg-blue-100 text-blue-600' },
    { value: 'contacted', label: 'Contacted', color: 'bg-amber-100 text-amber-600' },
    { value: 'closed', label: 'Closed', color: 'bg-emerald-100 text-emerald-600' },
    { value: 'rejected', label: 'Rejected', color: 'bg-rose-100 text-rose-600' },
];

export default function LeadsPage() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    useEffect(() => {
        fetchLeads();
    }, [filter]);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/admin/leads?status=${filter}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setLeads(data);
            }
        } catch (error) {
            console.error('Failed to fetch leads:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        setUpdatingId(id);
        try {
            const response = await fetch('/api/admin/leads', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            if (response.ok) {
                setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        } finally {
            setUpdatingId(null);
        }
    };

    const filteredLeads = leads.filter(lead =>
        lead.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phone.includes(searchQuery)
    );

    const getStatusStyles = (status: string) => {
        const option = STATUS_OPTIONS.find(opt => opt.value === status);
        return option?.color || 'bg-slate-100 text-slate-600';
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tight">Leads Pipeline</h1>
                    <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mt-1">Manage incoming business requests</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bg-white/50 backdrop-blur-sm border border-white/40 p-1 rounded-2xl shadow-sm">
                        {STATUS_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => setFilter(opt.value)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === opt.value
                                        ? 'bg-[var(--primary-teal)] text-white shadow-lg shadow-[var(--primary-teal)]/20'
                                        : 'text-slate-400 hover:text-[var(--primary-teal)]'
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[var(--primary-teal)] transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search by business name, email or phone..."
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 border border-white/40 focus:border-[var(--primary-teal)] focus:ring-0 outline-none transition-all font-bold text-sm shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="p-4 bg-white/50 rounded-2xl border border-white/40 font-bold text-[10px] uppercase tracking-widest text-slate-400">
                    Total: {filteredLeads.length} Leads
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center gap-4">
                            <div className="w-12 h-12 border-4 border-[var(--primary-teal)]/20 border-t-[var(--primary-teal)] rounded-full animate-spin"></div>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary-teal)] animate-pulse">Syncing Pipeline</span>
                        </div>
                    ) : filteredLeads.length === 0 ? (
                        <div className="py-20 glass-panel rounded-[2rem] border border-white/40 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6">
                                <Search className="text-slate-300" size={32} />
                            </div>
                            <h3 className="text-lg font-black text-[var(--primary-teal-dark)] uppercase">No Leads Found</h3>
                            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mt-2">Try adjusting your filters or search query</p>
                        </div>
                    ) : (
                        filteredLeads.map((lead) => (
                            <motion.div
                                key={lead.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass-panel p-6 rounded-[2rem] border-2 border-white/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[var(--primary-teal)]/20 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-8 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center shrink-0 border border-black/5">
                                            <Building2 className="text-[var(--primary-teal)]" size={28} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${getStatusStyles(lead.status)}`}>
                                                    {lead.status}
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                                                    {lead.planId}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-black text-[var(--primary-teal-dark)] uppercase tracking-tight">{lead.businessName}</h3>
                                            <div className="flex items-center gap-2 text-slate-400 mt-1">
                                                <MapPin size={12} />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">{lead.businessLocation}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 px-0 md:px-8 md:border-l border-black/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                                <Mail size={16} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-300">Contact Email</span>
                                                <span className="text-xs font-bold text-[var(--primary-teal-dark)]">{lead.email}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                                <Phone size={16} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-300">Direct Phone</span>
                                                <span className="text-xs font-bold text-[var(--primary-teal-dark)]">{lead.phone}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                                <Building2 size={16} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-300">Business Line</span>
                                                <span className="text-xs font-bold text-[var(--primary-teal-dark)]">{lead.businessPhone || 'N/A'}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                                <Calendar size={16} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-300">Received On</span>
                                                <span className="text-xs font-bold text-[var(--primary-teal-dark)]">{new Date(lead.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 lg:flex-col shrink-0">
                                    <div className="flex items-center gap-2">
                                        <select
                                            value={lead.status}
                                            disabled={updatingId === lead.id}
                                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                                            className="px-4 py-2.5 rounded-xl bg-slate-50 border-none outline-none text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary-teal-dark)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 transition-all cursor-pointer disabled:opacity-50"
                                        >
                                            <option value="opened">Set to New</option>
                                            <option value="contacted">Set Contacted</option>
                                            <option value="closed">Set Closed</option>
                                            <option value="rejected">Set Rejected</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => window.open(`mailto:${lead.email}`)}
                                        className="p-3 bg-[var(--primary-teal)] text-white rounded-xl hover:bg-[var(--primary-teal-dark)] transition-all shadow-lg shadow-[var(--primary-teal)]/20"
                                    >
                                        <Mail size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
