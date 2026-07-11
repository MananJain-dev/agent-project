import axios from "axios";
import { env } from "../config/env.js";

export async function getForecast(city) {
    try {
        const url = "https://api.openweathermap.org/data/2.5/forecast";

        const response = await axios.get(url, {
            params: {
                q: city,
                appid: env.OPENWEATHER_API_KEY,
                units: "metric",
            },
        });

        const forecast = response.data.list.map((item) => ({
            date: item.dt_txt,
            temperature: item.main.temp,
            feelsLike: item.main.feels_like,
            humidity: item.main.humidity,
            description: item.weather[0].description,
            rainProbability: Math.round(item.pop * 100),
        }));

        return {
            city: response.data.city.name,
            country: response.data.city.country,
            forecast,
        };
    } catch (error) {
        console.error(error);

        throw new Error("Unable to fetch weather forecast.");
    }
}