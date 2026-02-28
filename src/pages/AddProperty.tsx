

const AddProperty = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[var(--color-sand)]">
                <h1 className="text-3xl font-bold mb-8 text-[var(--color-navy)] font-arabic text-center">Add New Property</h1>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Property Title</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none" placeholder="e.g. Luxury Villa in The Pearl" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Area</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none bg-white">
                                <option value="">Select Area</option>
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

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Property Type</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none bg-white">
                                <option value="Apartment">Apartment</option>
                                <option value="Villa">Villa</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Townhouse">Townhouse</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Monthly Rent (QAR)</label>
                            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none" placeholder="e.g. 8000" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none" min="0" placeholder="e.g. 2" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none" min="1" placeholder="e.g. 2" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none resize-none" placeholder="Describe the property features, amenities, and nearby attractions..."></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Image URLs (comma separated)</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none" placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg" />
                    </div>

                    <div className="pt-4">
                        <button type="button" className="w-full bg-[var(--color-gold)] text-[var(--color-navy)] font-bold py-3 px-4 rounded-lg hover:brightness-110 transition-all flex justify-center items-center shadow-md">
                            Submit Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;
