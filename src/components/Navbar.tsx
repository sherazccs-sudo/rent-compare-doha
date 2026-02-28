import { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check in case they navigate while scrolled
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColorClass = isHomePage && !isScrolled ? 'text-white' : 'text-[var(--color-navy)]';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className={`flex items-center gap-2 group ${textColorClass}`}>
                    <Building2 size={32} className="text-[var(--color-gold)] transition-transform group-hover:scale-110" />
                    <span className="text-2xl font-bold tracking-tight font-arabic">RentCompare<span className="text-[var(--color-gold)]">Doha</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <Link to="/" className={`hover:text-[var(--color-gold)] transition-colors ${textColorClass}`}>Home</Link>
                    <Link to="/packages" className={`hover:text-[var(--color-gold)] transition-colors ${textColorClass}`}>Dealer Packages</Link>
                    <Link to="/add-property" className="px-6 py-2.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full shadow-lg shadow-[var(--color-gold)]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all">
                        Add Property
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${textColorClass}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 gap-6 md:hidden glass-effect border-t border-[var(--color-sand)]"
                >
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors">Home</Link>
                    <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors">Dealer Packages</Link>
                    <Link to="/add-property" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full">
                        Add Property
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
