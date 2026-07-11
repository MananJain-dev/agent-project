import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

function ChatWindow({ messages, loading }) {

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (

        <div className="bg-white rounded-3xl shadow-xl p-6 h-[450px] overflow-y-auto">

            {messages.length === 0 && (

                <p className="text-gray-500">
                    Ask me about the weather!
                </p>

            )}

            {messages.map((message, index) => (

                <ChatMessage
                    key={index}
                    message={message}
                />

            ))}

            {loading && (
                <div className="flex items-center gap-2 mt-4 text-gray-500">

                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]"></div>

                </div>
            )}

            {/* Invisible element to scroll to */}
            <div ref={bottomRef}></div>

        </div>

    );

}

export default ChatWindow;