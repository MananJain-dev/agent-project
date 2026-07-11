import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { getCurrentWeather } from "../services/weather.service.js";

export const weatherTool = tool(
    async ({ city }) => {
        const weather = await getCurrentWeather(city);

        return weather;
    },
    {
        name: "get_current_weather",
        description:
            `Get the current weather for any city.

            Returns:
            - temperature
            - feels like temperature
            - humidity
            - atmospheric pressure
            - wind speed
            - weather description
            - weather icon
            - sunrise time
            - sunset time

            Use this tool whenever the user asks about current weather or any of these weather attributes.`,

        schema: z.object({
            city: z.string().describe("City name"),
        }),
    }
);