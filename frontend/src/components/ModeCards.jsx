export default function ModeCards() {
    const modes = [
        {
            emoji: "⚡",
            title: "Quick Overview",
            description:
                "Understand what the company does in simple language within minutes.",
        },
        {
            emoji: "📈",
            title: "Deep Analysis",
            description:
                "Financials, competitors, valuation, management, risks and opportunities.",
        },
        {
            emoji: "💼",
            title: "Portfolio Decision",
            description:
                "Structured Buy • Hold • Sell discussion with portfolio fit and allocation.",
        },
    ];

    return (
        <section className="py-24 px-6">

            <h2 className="text-4xl font-bold text-center mb-14">
                Choose Analysis Mode
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">

                {modes.map((mode) => (
                    <div
                        key={mode.title}
                        className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
                    >
                        <div className="text-5xl mb-6">
                            {mode.emoji}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            {mode.title}
                        </h3>

                        <p className="text-slate-400 leading-7">
                            {mode.description}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}