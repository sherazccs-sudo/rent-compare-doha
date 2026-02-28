import { Bell, Smartphone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Alerts() {
    return (
        <section id="alerts" className="py-24 bg-[var(--color-emerald)] relative overflow-hidden">
            <div className="absolute inset-0 bg-arabesque opacity-20 pointer-events-none mix-blend-color-burn"></div>
            {/* Decorative background circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="lg:w-1/2 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 shadow-lg border border-white/20">
                                <Bell size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-arabic mb-6 leading-tight text-white drop-shadow-md">
                                Never Miss Details on <span className="text-[var(--color-gold)]">Price Drops!</span>
                            </h2>
                            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                                Set up intelligent alerts. Get instantly notified via Email or WhatsApp when properties in your preferred areas match your budget.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                                    <MessageSquare size={24} className="text-[var(--color-gold)]" />
                                    <div>
                                        <h4 className="font-bold text-white">WhatsApp Alerts</h4>
                                        <p className="text-sm text-white/70">Instant notifications</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                                    <Smartphone size={24} className="text-[var(--color-gold)]" />
                                    <div>
                                        <h4 className="font-bold text-white">Email Daily Digest</h4>
                                        <p className="text-sm text-white/70">Curated market updates</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full max-w-md mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-2xl relative border border-[var(--color-gold)]/20"
                        >
                            <h3 className="text-3xl font-bold text-[var(--color-navy)] mb-6 text-center font-arabic">Set Your Alert</h3>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-[var(--color-navy)] mb-2">Preferred Area</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all text-slate-700">
                                        <option value="all">Everywhere in Doha</option>
                                        <option value="the-pearl">The Pearl Qatar</option>
                                        <option value="west-bay">West Bay</option>
                                        <option value="lusail">Lusail</option>
                                        <option value="msheireb">Msheireb Downtown</option>
                                        <option value="al-sadd">Al Sadd</option>
                                        <option value="al-waab">Al Waab</option>
                                        <option value="abu-hamour">Abu Hamour</option>
                                        <option value="al-thumama">Al Thumama</option>
                                        <option value="al-wakrah">Al Wakrah</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[var(--color-navy)] mb-2">Target Monthly Budget (QAR)</label>
                                    <input
                                        type="range"
                                        min="3000"
                                        max="20000"
                                        step="500"
                                        defaultValue="8000"
                                        className="w-full accent-[var(--color-emerald)]"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-bold">
                                        <span>QAR 3,000</span>
                                        <span className="text-[var(--color-emerald)] text-sm px-2 py-1 bg-green-50 rounded-md">QAR 8,000</span>
                                        <span>QAR 20,000+</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[var(--color-navy)] mb-2">Contact Method</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <button className="w-full bg-[var(--color-gold)] hover:brightness-110 text-[var(--color-navy)] font-bold py-4 rounded-xl shadow-[var(--color-gold)]/30 hover:shadow-lg transition-all transform hover:-translate-y-1">
                                    Activate Alert
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
