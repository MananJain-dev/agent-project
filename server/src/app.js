import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chat.routes.js";
import weatherRoutes from "./routes/weather.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running."
    });
});

app.use("/api/chat", chatRoutes);
app.use("/api/weather", weatherRoutes);

export default app;