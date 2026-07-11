import express from "express";
import { getCurrentWeather } from "../services/weather.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { city } = req.query;

        const weather = await getCurrentWeather(city);

        res.json(weather);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;