'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight, MessageSquare, User, AtSign, FileText } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formState);
        alert('Thank you for reaching out! We will get back to you shortly.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] pb-20 px-6 md:px-12 lg:px-24 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--primary-teal)]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--accent-blue)]/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--primary-teal)] font-bold uppercase tracking-widest text-sm mb-2 block">Connect With Us</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--primary-teal-dark)] mb-6">
                        Get in <span className="text-teal-gradient">Touch</span>
                    </h1>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
                        Have questions about Q-Line POS? Our team is ready to help you optimize your restaurant operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="premium-card p-8 md:p-10 bg-white shadow-xl shadow-[var(--primary-teal)]/5 border-none">
                            <h3 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-8">Contact Information</h3>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--primary-teal)]/10 flex items-center justify-center text-[var(--primary-teal)] group-hover:bg-[var(--primary-teal)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">Email Us</span>
                                        <a href="mailto:info@qline.com" className="text-lg font-bold text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">info@qline.com</a>
                                        <p className="text-sm text-[var(--text-muted)] mt-1">For general inquiries and support</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--primary-teal)]/10 flex items-center justify-center text-[var(--primary-teal)] group-hover:bg-[var(--primary-teal)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">Call Us</span>
                                        <a href="tel:+923399339918" className="text-lg font-bold text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">+92 (339) 933-9918</a>
                                        <p className="text-sm text-[var(--text-muted)] mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--primary-teal)]/10 flex items-center justify-center text-[var(--primary-teal)] group-hover:bg-[var(--primary-teal)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">Visit HQ</span>
                                        <address className="text-lg font-bold text-[var(--text-main)] not-italic leading-tight">
                                            Vehari Road, <br />
                                            Makhdoom Rasheed, Multan
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links or Map Placeholder */}
                        {/* Quick Links or Map Placeholder */}
                        <div className="premium-card p-8 md:p-10 bg-white shadow-xl shadow-[var(--primary-teal)]/5 border-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-teal)]/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                            <h3 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 relative z-10">Need Technical Support?</h3>
                            <p className="text-[var(--text-muted)] mb-6 relative z-10 text-sm leading-relaxed">
                                Our support team is available 24/7 to assist with any technical issues or implementation questions.
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[var(--primary-teal)] font-bold hover:text-[var(--primary-teal-dark)] transition-colors relative z-10 group/link">
                                Visit Help Center <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="premium-card bg-white p-8 md:p-10 shadow-2xl shadow-[var(--primary-teal)]/10 border border-[var(--primary-teal)]/10"
                    >
                        <h3 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                                        <User size={14} className="text-[var(--primary-teal)]" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-gray-200 focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all font-medium text-[var(--text-main)] placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                                        <AtSign size={14} className="text-[var(--primary-teal)]" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-gray-200 focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all font-medium text-[var(--text-main)] placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                                    <FileText size={14} className="text-[var(--primary-teal)]" /> Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-gray-200 focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all font-medium text-[var(--text-main)]"
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="Demo Request">Request a Demo</option>
                                    <option value="Sales">Sales Inquiry</option>
                                    <option value="Support">Technical Support</option>
                                    <option value="Partnership">Partnership Opportunities</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                                    <MessageSquare size={14} className="text-[var(--primary-teal)]" /> Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-gray-200 focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all font-medium text-[var(--text-main)] placeholder:text-gray-400 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center mt-2 group">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-[var(--text-muted)] mt-4">
                                By sending this message, you agree to our <a href="/privacy-policy" className="text-[var(--primary-teal)] hover:underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
