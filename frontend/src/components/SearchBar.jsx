import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSearch() {
        if (!search.trim()) {
            setError("Please enter a company name.");
            return;
        }

        setError("");

        navigate(`/company/${search.toLowerCase()}`);
    }

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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className="px-8 bg-blue-600 hover:bg-blue-500 transition">
                        🔍
                    </button>

                </div>

                <button
                    onClick={handleSearch}
                    className="mt-8 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold transition"
                >
                    Analyze →
                </button>

                {/* Temporary - for learning React state */}
                <p className="mt-4 text-slate-400">
                    You searched: {search}
                </p>

                {error && (
                    <p className="mt-3 text-red-400">
                        {error}
                    </p>
                )}

            </div>
        </section>
    );
}