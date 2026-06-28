export default function SearchBar() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-8">
                    Search a Company
                </h2>

                <div className="flex rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">

                    <input
                        type="text"
                        placeholder="Search by company name or ticker..."
                        className="flex-1 bg-transparent px-6 py-5 outline-none text-lg placeholder:text-slate-400"
                    />

                    <button className="px-8 bg-blue-600 hover:bg-blue-500 transition">
                        🔍
                    </button>

                </div>

                <button className="mt-8 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold transition">
                    Analyze →
                </button>

            </div>
        </section>
    );
}