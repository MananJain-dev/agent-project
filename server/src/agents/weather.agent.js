import { createAgent } from "langchain";

import llm from "../config/llm.js";
import { weatherTool } from "../tools/weather.tool.js";
import { forecastTool } from "../tools/forecast.tool.js";
import weatherSystemPrompt from "../prompts/weather.prompt.js";

const weatherAgent = createAgent({
    model: llm,
    tools: [weatherTool, forecastTool],
    systemPrompt: weatherSystemPrompt
});

export default weatherAgent;