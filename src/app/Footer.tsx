import Link from 'next/link';
import { LayoutGrid, Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[var(--primary-teal-dark)] text-white pt-12 pb-6">
            <div className="content-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-[var(--primary-teal)] flex items-center justify-center font-bold text-white shadow-lg shadow-black/20">
                                <LayoutGrid size={22} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">
                                QLINE <span className="font-light text-[var(--primary-teal-light)]">POS</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Designing the future of restaurant intelligence. QLINE POS is the evolutionary OS for the modern dining industry.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors"><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Nav Column 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Project</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
                            <li><Link href="/features" className="hover:text-[var(--primary-teal-light)] transition-colors">Software Features</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Pricing Models</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">API Status</Link></li>
                        </ul>
                    </div>

                    {/* Nav Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Company</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">About Story</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary-teal-light)] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Get in Touch</h4>
                        <ul className="flex flex-col gap-6 text-white/60 text-sm font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>Sector 12, Tech Park, <br />Islamabad, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>+92 (300) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--primary-teal-light)] shrink-0" />
                                <span>hello@qlinepos.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Q-LINE POS System. All Evolutionary Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
                        <span>Security Audited</span>
                        <span>GDPR Compliant</span>
                        <span>Desktop Native</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
