import { Check, Star, Zap, Crown } from 'lucide-react';

const Packages = () => {
    return (
        <div className="py-16 bg-[var(--color-sand)] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-arabic text-[var(--color-navy)] mb-4">Dealer Packages</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the right plan to boost your property visibility and connect with more tenants seamlessly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Basic</h3>
                            <p className="text-gray-500">Perfect for getting started</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-[var(--color-navy)]">Free</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> List up to 5 properties</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Standard visibility</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Basic support</li>
                        </ul>
                        <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-[var(--color-navy)] font-bold rounded-xl transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[var(--color-navy)] text-white rounded-2xl shadow-2xl border border-[var(--color-gold)] p-8 flex flex-col relative transform hover:-translate-y-2 transition-transform duration-300 scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                            Popular
                        </div>
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-[rgba(212,175,55,0.2)] text-[var(--color-gold)] rounded-xl flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Pro Dealer</h3>
                            <p className="text-blue-200">For active real estate agents</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">QAR 499</span>
                            <span className="text-blue-200">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center text-gray-100"><Check className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" /> List up to 50 properties</li>
                            <li className="flex items-center text-gray-100"><Check className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" /> Priority search ranking</li>
                            <li className="flex items-center text-gray-100"><Check className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" /> Featured badge on 5 listings</li>
                            <li className="flex items-center text-gray-100"><Check className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" /> Lead analytics dashboard</li>
                        </ul>
                        <button className="w-full py-3 px-4 bg-[var(--color-gold)] hover:brightness-110 text-[var(--color-navy)] font-bold rounded-xl transition-all shadow-md">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-green-100 text-[var(--color-emerald)] rounded-xl flex items-center justify-center mb-4">
                                <Crown className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Agency Premium</h3>
                            <p className="text-gray-500">Maximum exposure for agencies</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-[var(--color-navy)]">QAR 1299</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Unlimited listings</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Top tier search ranking</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Infinite featured badges</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Dedicated account manager</li>
                            <li className="flex items-center text-gray-600"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Social media promotion</li>
                        </ul>
                        <button className="w-full py-3 px-4 bg-[var(--color-emerald)] hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-md">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
