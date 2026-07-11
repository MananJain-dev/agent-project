import dotenv from "dotenv";
dotenv.config();

import { getForecast } from "./services/forecast.service.js";

const forecast = await getForecast("Delhi");

console.log(forecast);