import ModeCard from "./ModeCard";
import { modes } from "../data/modes";

export default function ModeCards() {
    return (
        <section className="py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-14">
                Choose Analysis Mode
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                {modes.map((mode) => (
                    <ModeCard
                        key={mode.title}
                        mode={mode}
                    />
                ))}
            </div>
        </section>
    );
}