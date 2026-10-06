import { useState } from "react";
import api from "../services/api";

function ChatInput({
    messages,
    setMessages,
    setWeather,
    loading,
    setLoading,
}) {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    async function handleSend() {

        if (!input.trim()) return;

        // Clear any previous error
        setError("");

        const userMessage = {
            role: "user",
            content: input,
        };

        const updatedMessages = [
            ...messages,
            userMessage,
        ];

        setMessages(updatedMessages);

        setInput("");

        setLoading(true);

        try {

            const response = await api.post("/api/chat", {
                messages: updatedMessages,
            });

            setMessages([
                ...updatedMessages,
                {
                    role: "assistant",
                    content: response.data.message,
                },
            ]);

            if (response.data.weather) {
                setWeather(response.data.weather);
            }

        } catch (error) {

            console.error(error);

            setError(
                error.response?.data?.message ||
                "Unable to connect to the weather assistant."
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="mt-6">

            {error && (
                <p className="text-red-500 text-sm mb-2">
                    {error}
                </p>
            )}

            <div className="flex gap-3">

                <input
                    className="flex-1 border rounded-lg px-4 py-3"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about any city..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                />

                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 rounded-lg"
                >
                    Send
                </button>

            </div>

        </div>

    );
}

export default ChatInput;