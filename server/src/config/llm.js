import { ChatOpenAI } from "@langchain/openai";
import { env } from "./env.js";

const llm = new ChatOpenAI({
    model: env.MODEL,
    temperature: 0,
    maxTokens: env.MAX_TOKENS,

    configuration: {
        apiKey: env.OPENROUTER_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
    },
});

export default llm;