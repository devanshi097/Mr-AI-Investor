import { useParams } from "react-router-dom";

export default function CompanyPage() {
    const { ticker } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-6">
                Company Analysis
            </h1>

            <p className="text-2xl text-slate-300">
                Company: {ticker.toUpperCase()}
            </p>
        </div>
    );
}