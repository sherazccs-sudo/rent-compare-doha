import { Building2, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-navy)] text-slate-300 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none mix-blend-color-burn"></div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 text-white mb-6 group">
                            <Building2 size={32} className="text-[var(--color-gold)] transition-transform group-hover:scale-110" />
                            <span className="text-2xl font-bold tracking-tight font-arabic">RentCompare<span className="text-[var(--color-gold)]">Doha</span></span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            The smartest way to find your perfect home in Qatar. Compare prices across West Bay, The Pearl, Lusail, and more.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]"><Twitter size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-arabic text-xl border-b border-[var(--color-gold)]/30 inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#search" className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"><span className="text-[var(--color-gold)] text-xs">◆</span> Search Areas</a></li>
                            <li><a href="#compare" className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"><span className="text-[var(--color-gold)] text-xs">◆</span> Compare Prices</a></li>
                            <li><Link to="/packages" className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"><span className="text-[var(--color-gold)] text-xs">◆</span> Dealer Packages</Link></li>
                            <li><Link to="/add-property" className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"><span className="text-[var(--color-gold)] text-xs">◆</span> Add Property</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-arabic text-xl border-b border-[var(--color-gold)]/30 inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-[var(--color-gold)] mt-1 flex-shrink-0" size={18} />
                                <span>West Bay, Doha, Qatar</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-[var(--color-gold)] flex-shrink-0" size={18} />
                                <span>+974 3996 8562</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[var(--color-gold)] flex-shrink-0" size={18} />
                                <span>hello@rentcomparedoha.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm mt-8">
                    <p>&copy; {new Date().getFullYear()} RentCompare Doha. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
