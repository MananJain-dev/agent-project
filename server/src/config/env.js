import dotenv from "dotenv";

dotenv.config();

export const env = {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    MODEL: process.env.MODEL,
    MAX_TOKENS: Number(process.env.MAX_TOKENS),
    PORT: Number(process.env.PORT),
};