import { MapPin, BedDouble, Bath, Maximize, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MOCK_PROPERTIES = [
    {
        id: 1,
        title: 'Luxury Marina Apartment',
        area: 'Lusail',
        price: 9500,
        beds: 2,
        baths: 2,
        sqm: 120,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
        tag: 'New Offer'
    },
    {
        id: 2,
        title: 'Modern Tower View Room',
        area: 'West Bay',
        price: 12000,
        beds: 3,
        baths: 3,
        sqm: 180,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
        tag: 'Popular'
    },
    {
        id: 3,
        title: 'Cozy Family Villa',
        area: 'Al Waab',
        price: 15000,
        beds: 4,
        baths: 5,
        sqm: 350,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
        tag: 'Hot Deal'
    },
    {
        id: 4,
        title: 'Studio Near Metro',
        area: 'Najma',
        price: 4500,
        beds: 1,
        baths: 1,
        sqm: 60,
        image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800',
        tag: null
    }
];

export default function FeaturedProperties() {
    return (
        <section id="properties" className="py-24 bg-[var(--color-sand)] relative">
            <div className="absolute inset-0 bg-arabesque opacity-10 pointer-events-none mix-blend-multiply"></div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-arabic text-[var(--color-navy)] mb-4">Featured Properties</h2>
                        <p className="text-slate-600 max-w-2xl text-lg">Handpicked properties offering the best value in Doha's most desirable neighborhoods.</p>
                    </div>
                    <Link to="/" className="text-[var(--color-navy)] font-bold hover:text-[var(--color-gold)] transition-colors flex items-center gap-1 group">
                        View all properties <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MOCK_PROPERTIES.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-[var(--color-navy)]/10 group border border-[var(--color-gold)]/20"
                        >
                            {/* Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 bg-[var(--color-navy)]/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {property.tag && (
                                    <div className="absolute top-4 left-4 z-20 bg-[var(--color-sand)]/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full text-[var(--color-navy)] shadow-sm border border-[var(--color-gold)]/30">
                                        {property.tag}
                                    </div>
                                )}

                                <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-400 hover:text-[var(--color-emerald)] hover:scale-110 transition-all shadow-sm">
                                    <Heart size={18} />
                                </button>

                                <div className="absolute bottom-4 left-4 z-20 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold px-4 py-1.5 rounded-lg shadow-md border border-[var(--color-gold)]">
                                    QAR {property.price.toLocaleString()}<span className="text-sm font-normal text-[var(--color-navy)]/80">/mo</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3 font-bold">
                                    <MapPin size={16} className="text-[var(--color-emerald)]" />
                                    <span>{property.area}, Doha</span>
                                </div>

                                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-4 line-clamp-1 group-hover:text-[var(--color-gold)] transition-colors">
                                    {property.title}
                                </h3>

                                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-sand)]">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <BedDouble size={18} className="text-[var(--color-gold)]" />
                                        <span className="text-sm font-bold text-[var(--color-navy)]">{property.beds}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Bath size={18} className="text-[var(--color-gold)]" />
                                        <span className="text-sm font-bold text-[var(--color-navy)]">{property.baths}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Maximize size={18} className="text-[var(--color-gold)]" />
                                        <span className="text-sm font-bold text-[var(--color-navy)]">{property.sqm} <span className="text-xs font-normal text-slate-500">m²</span></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
