export default function ModeCard({ mode }) {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
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
    );
}