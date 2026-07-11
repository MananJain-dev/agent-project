import { CloudSun } from "lucide-react";

function Header() {
    return (
        <header className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-4">

                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                    <CloudSun size={36} />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        AI Weather Assistant
                    </h1>

                    <p className="text-blue-100 mt-1">
                        Powered by LangChain • OpenRouter • OpenWeather
                    </p>
                </div>

            </div>
        </header>
    );
}

export default Header;