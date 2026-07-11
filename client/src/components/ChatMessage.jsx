import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";

function ChatMessage({ message }) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex gap-3 mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            {!isUser && (
                <div className="bg-blue-600 text-white p-2 rounded-full h-fit">
                    <Bot size={18} />
                </div>
            )}

            <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 shadow ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                }`}
            >
                {isUser ? (
                    message.content
                ) : (
                    <ReactMarkdown>
                        {message.content}
                    </ReactMarkdown>
                )}
            </div>

            {isUser && (
                <div className="bg-slate-700 text-white p-2 rounded-full h-fit">
                    <User size={18} />
                </div>
            )}
        </div>
    );
}

export default ChatMessage;