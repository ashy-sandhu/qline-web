import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary-teal-dark)] text-white pt-12 pb-6">
            <div className="content-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#001f1c] flex items-center justify-center shadow-2xl shadow-black/40 overflow-hidden border border-white/5 group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="/app_logo.png"
                                    alt="QLINE Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain p-1 md:p-2"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter leading-none mb-1">
                                    QLINE <span className="font-light text-[var(--primary-teal-light)]">POS</span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary-teal-light)]">Evolutionary OS</span>
                            </div>
                        </Link>
                        <p className="text-white text-sm leading-relaxed max-w-xs">
                            Designing the future of restaurant intelligence. QLINE POS is the evolutionary OS for the modern dining industry.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors" aria-label="Follow us on Twitter"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors" aria-label="Follow us on LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors" aria-label="Follow us on Facebook"><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Nav Column 1 */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Project Resources</h3>
                        <ul className="flex flex-col gap-4 text-white text-sm font-medium">
                            <li><Link href="/features" className="hover:text-[var(--primary-teal-light)] transition-colors">Software Features</Link></li>
                            <li><Link href="/download" className="hover:text-[var(--primary-teal-light)] transition-colors">Software Download</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Pricing Models</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">API Status</Link></li>
                        </ul>
                    </div>

                    {/* Nav Column 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Company Info</h3>
                        <ul className="flex flex-col gap-4 text-white text-sm font-medium">
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">About Story</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Get in Touch</h3>
                        <ul className="flex flex-col gap-6 text-white text-sm font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>Vehari Road, <br />Makhdoom Rasheed, Multan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>+92 (339) 933-9918</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>info@qline.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Q-LINE POS System. All Evolutionary Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/60">
                        <span>Security Audited</span>
                        <span>GDPR Compliant</span>
                        <span>Desktop Native</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
