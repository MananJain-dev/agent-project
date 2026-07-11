import { useState } from "react";

import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

function Home() {
    const [messages, setMessages] = useState([]);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="max-w-5xl mx-auto p-6">
                <WeatherCard weather={weather} />

                <ChatWindow
                    messages={messages}
                    loading={loading}
                />

                <ChatInput
                    messages={messages}
                    setMessages={setMessages}
                    setWeather={setWeather}
                    loading={loading}
                    setLoading={setLoading}
                />
            </main>
        </div>
    );
}

export default Home;