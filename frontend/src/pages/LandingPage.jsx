import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ModeCards from "../components/ModeCards";
import Mission from "../components/Mission";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Hero />
            <SearchBar />
            <ModeCards />
            <Mission />
        </main>
    );
}