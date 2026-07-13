import axios from "axios";
import { env } from "../config/env.js";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function formatTime(timestamp, timezoneOffset) {
    return new Date((timestamp + timezoneOffset) * 1000).toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "UTC",
        }
    );
}

export async function getCurrentWeather(city) {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: env.OPENWEATHER_API_KEY,
                units: "metric",
            },
        });

        const data = response.data;

        return {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            sunrise: formatTime(data.sys.sunrise, data.timezone),
            sunset: formatTime(data.sys.sunset, data.timezone)
        };
    } catch (error) {
        if (error.response?.status === 404) {
            throw new Error("City not found");
        }

        throw new Error("Unable to fetch weather data");
    }
}