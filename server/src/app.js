import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import chatRoutes from "./routes/chat.routes.js";
import weatherRoutes from "./routes/weather.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
    process.env.CLIENT_URL,
].filter(Boolean);

app.use(
    cors({
        origin: allowedOrigins,
    })
);

app.use(express.json({ limit: "32kb" }));

const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests. Please try again later.",
    },
});

app.use("/api", apiLimiter);

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running.",
    });
});

app.use("/api/chat", chatRoutes);
app.use("/api/weather", weatherRoutes);

export default app;