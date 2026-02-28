import { useState } from 'react';
import { Check, X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const COMPARISON_DATA = [
    {
        feature: 'Average 1BHK Rent',
        westBay: 'QAR 7,500',
        lusail: 'QAR 6,800',
        pearl: 'QAR 8,000',
        najma: 'QAR 4,000',
        alSadd: 'QAR 5,500',
        msheireb: 'QAR 9,000'
    },
    {
        feature: 'Average 2BHK Rent',
        westBay: 'QAR 10,500',
        lusail: 'QAR 9,500',
        pearl: 'QAR 12,000',
        najma: 'QAR 5,500',
        alSadd: 'QAR 7,000',
        msheireb: 'QAR 13,000'
    },
    {
        feature: 'Proximity to Metro',
        westBay: true,
        lusail: true,
        pearl: false,
        najma: true,
        alSadd: true,
        msheireb: true
    },
    {
        feature: 'Family Friendly',
        westBay: true,
        lusail: true,
        pearl: true,
        najma: false,
        alSadd: true,
        msheireb: true
    },
    {
        feature: 'Vibe & Lifestyle',
        westBay: 'Corporate & Busy',
        lusail: 'Modern & Quiet',
        pearl: 'Luxury & Expat-heavy',
        najma: 'Bustling & Affordable',
        alSadd: 'Central & Lively',
        msheireb: 'Cultural & Smart'
    },
    {
        feature: 'Price Trend (YoY)',
        westBay: <div className="flex items-center gap-1 text-red-500 justify-center"><TrendingUp size={16} /> +5%</div>,
        lusail: <div className="flex items-center gap-1 text-slate-400 justify-center"><Minus size={16} /> Stable</div>,
        pearl: <div className="flex items-center gap-1 text-green-500 justify-center"><TrendingDown size={16} /> -2%</div>,
        najma: <div className="flex items-center gap-1 text-red-500 justify-center"><TrendingUp size={16} /> +8%</div>,
        alSadd: <div className="flex items-center gap-1 text-slate-400 justify-center"><Minus size={16} /> Stable</div>,
        msheireb: <div className="flex items-center gap-1 text-red-500 justify-center"><TrendingUp size={16} /> +10%</div>
    }
];

export default function ComparisonTable() {
    const [activeColumns, setActiveColumns] = useState(['westBay', 'lusail', 'pearl']);

    const toggleColumn = (col: string) => {
        if (activeColumns.includes(col)) {
            if (activeColumns.length > 2) {
                setActiveColumns(activeColumns.filter(c => c !== col));
            }
        } else {
            if (activeColumns.length < 3) {
                setActiveColumns([...activeColumns, col]);
            }
        }
    };

    const renderValue = (value: any) => {
        if (typeof value === 'boolean') {
            return value ? <Check className="text-[var(--color-emerald)] mx-auto" size={20} /> : <X className="text-red-500 mx-auto" size={20} />;
        }
        return value;
    };

    return (
        <section id="compare" className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-arabic text-[var(--color-navy)] mb-4">Area Comparison</h2>
                    <p className="text-slate-600 text-lg">Compare rental prices, amenities, and lifestyle across top neighborhoods in Doha to find the perfect match for your needs.</p>
                </div>

                {/* Mobile & Desktop Toggle Filters */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center max-w-4xl mx-auto">
                    {[
                        { id: 'westBay', label: 'West Bay' },
                        { id: 'lusail', label: 'Lusail' },
                        { id: 'pearl', label: 'The Pearl' },
                        { id: 'najma', label: 'Najma' },
                        { id: 'alSadd', label: 'Al Sadd' },
                        { id: 'msheireb', label: 'Msheireb' }
                    ].map(area => (
                        <button
                            key={area.id}
                            onClick={() => toggleColumn(area.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeColumns.includes(area.id) ? 'bg-[var(--color-gold)] text-[var(--color-navy)] shadow-md border-2 border-[var(--color-gold)]' : 'bg-white text-slate-500 border-2 border-slate-200 hover:border-[var(--color-gold)] hover:text-[var(--color-navy)]'}`}
                        >
                            {area.label}
                        </button>
                    ))}
                    <p className="text-xs text-slate-500 w-full text-center mt-4">Select exactly 3 areas to compare</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="overflow-x-auto rounded-2xl shadow-2xl border border-[var(--color-gold)]/20 bg-white"
                >
                    <table className="w-full min-w-[800px] text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--color-sand)] border-b-2 border-[var(--color-gold)]/30">
                                <th className="p-6 text-[var(--color-navy)] font-bold w-1/4 uppercase tracking-wider text-sm">Feature</th>
                                {activeColumns.includes('westBay') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">West Bay</th>}
                                {activeColumns.includes('lusail') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">Lusail</th>}
                                {activeColumns.includes('pearl') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">The Pearl</th>}
                                {activeColumns.includes('najma') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">Najma</th>}
                                {activeColumns.includes('alSadd') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">Al Sadd</th>}
                                {activeColumns.includes('msheireb') && <th className="p-6 text-center font-bold text-[var(--color-navy)] text-lg border-l border-[var(--color-gold)]/10">Msheireb</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON_DATA.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-[var(--color-sand)]/30 transition-colors">
                                    <td className="p-6 font-bold text-[var(--color-navy)] bg-white/50 sticky left-0 z-10">{row.feature}</td>
                                    {activeColumns.includes('westBay') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.westBay)}</td>}
                                    {activeColumns.includes('lusail') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.lusail)}</td>}
                                    {activeColumns.includes('pearl') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.pearl)}</td>}
                                    {activeColumns.includes('najma') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.najma)}</td>}
                                    {activeColumns.includes('alSadd') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.alSadd)}</td>}
                                    {activeColumns.includes('msheireb') && <td className="p-6 text-center text-slate-600 border-l border-[var(--color-gold)]/10">{renderValue(row.msheireb)}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
