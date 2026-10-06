import express from "express";
import { getCurrentWeather } from "../services/weather.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { city } = req.query;

        if (
            typeof city !== "string" ||
            city.trim().length === 0 ||
            city.length > 100
        ) {
            return res.status(400).json({
                success: false,
                message: "A valid city is required.",
            });
        }

        const weather = await getCurrentWeather(city.trim());

        res.json(weather);

    } catch (error) {
        console.error(error);
        
        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
});

export default router;