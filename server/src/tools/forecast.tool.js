import { tool } from "@langchain/core/tools";
import { z } from "zod";

import { getForecast } from "../services/forecast.service.js";

export const forecastTool = tool(
    async ({ city }) => {
        return await getForecast(city);
    },
    {
        name: "get_weather_forecast",
        description: `
Get the weather forecast for the next five days.

Use this tool whenever the user asks about:
- tomorrow
- next week
- this weekend
- future weather
- rain prediction
- snowfall prediction
- forecast
`,
        schema: z.object({
            city: z.string().describe("City name"),
        }),
    }
);