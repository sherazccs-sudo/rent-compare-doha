import { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [activeTab, setActiveTab] = useState<'rent' | 'buy'>('rent');

    return (
        <section id="search" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-arabesque">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000"
                    alt="Doha Skyline"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-navy)]/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sand)] via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-arabic text-white mb-6 leading-tight drop-shadow-lg"
                    >
                        Find Your Perfect Home in <span className="text-[var(--color-gold)]">Qatar</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                    >
                        Compare up-to-date rental prices across Doha's top neighborhoods. Make informed decisions and find the best deals.
                    </motion.p>
                </div>

                {/* Search Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-2xl overflow-hidden glass-effect border border-[var(--color-gold)]/20"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-slate-200/50">
                        <button
                            className={`flex-1 py-4 text-center font-bold tracking-wide transition-colors ${activeTab === 'rent' ? 'text-[var(--color-navy)] border-b-2 border-[var(--color-gold)] bg-[var(--color-gold)]/10' : 'text-slate-500 hover:text-[var(--color-navy)]'}`}
                            onClick={() => setActiveTab('rent')}
                        >
                            Rent
                        </button>
                        <button
                            className={`flex-1 py-4 text-center font-bold tracking-wide transition-colors ${activeTab === 'buy' ? 'text-[var(--color-navy)] border-b-2 border-[var(--color-gold)] bg-[var(--color-gold)]/10' : 'text-slate-500 hover:text-[var(--color-navy)]'}`}
                            onClick={() => setActiveTab('buy')}
                        >
                            Buy
                        </button>
                    </div>

                    {/* Search Inputs */}
                    <div className="p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MapPin className="text-[var(--color-navy)]/60" size={20} />
                            </div>
                            <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all appearance-none text-slate-700">
                                <option value="">Select Area (e.g. West Bay)</option>
                                <option value="the-pearl">The Pearl Qatar</option>
                                <option value="west-bay">West Bay</option>
                                <option value="lusail">Lusail</option>
                                <option value="msheireb">Msheireb Downtown</option>
                                <option value="al-sadd">Al Sadd</option>
                                <option value="al-waab">Al Waab</option>
                                <option value="abu-hamour">Abu Hamour</option>
                                <option value="al-thumama">Al Thumama</option>
                                <option value="al-wakrah">Al Wakrah</option>
                                <option value="al-khor">Al Khor</option>
                                <option value="madinat-khalifa">Madinat Khalifa</option>
                                <option value="duhail">Duhail</option>
                                <option value="najma">Najma</option>
                                <option value="mansoura">Mansoura</option>
                                <option value="bin-mahmoud">Bin Mahmoud</option>
                                <option value="old-airport">Old Airport</option>
                                <option value="al-dafna">Al Dafna</option>
                                <option value="qanat-quartier">Qanat Quartier</option>
                                <option value="viva-bahriya">Viva Bahriya</option>
                                <option value="fox-hills">Fox Hills</option>
                            </select>
                        </div>

                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Home className="text-[var(--color-navy)]/60" size={20} />
                            </div>
                            <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all appearance-none text-slate-700">
                                <option value="">Property Type</option>
                                <option value="1bhk">1 BHK Apartment</option>
                                <option value="2bhk">2 BHK Apartment</option>
                                <option value="3bhk">3 BHK Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="studio">Studio</option>
                            </select>
                        </div>

                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <DollarSign className="text-[var(--color-navy)]/60" size={20} />
                            </div>
                            <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all appearance-none text-slate-700">
                                <option value="">Max Price (QAR)</option>
                                <option value="5000">Up to 5,000</option>
                                <option value="8000">Up to 8,000</option>
                                <option value="12000">Up to 12,000</option>
                                <option value="15000">Up to 15,000</option>
                                <option value="20000+">20,000+</option>
                            </select>
                        </div>

                        <button className="bg-[var(--color-gold)] hover:brightness-110 text-[var(--color-navy)] px-8 py-4 rounded-xl font-bold shadow-lg shadow-[var(--color-gold)]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                            <Search size={20} className="group-hover:scale-110 transition-transform" />
                            <span>Search</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
