import express from "express";
import weatherAgent from "../agents/weather.agent.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({
                success: false,
                message: "Messages array is required.",
            });
        }

        const result = await weatherAgent.invoke({
            messages,
        });
        console.log("============== Agent Messages ==============");

        console.log(
            result.messages.map((m) => ({
                type: m.type,
                content: m.content,
            }))
        );

        console.log("============================================");
        const toolMessage = [...result.messages]
            .reverse()
            .find((message) => message.type === "tool");

        let weather = null;

        if (
            toolMessage &&
            toolMessage.name === "get_current_weather"
        ) {
            weather = JSON.parse(toolMessage.content);
        }

        const lastMessage = result.messages[result.messages.length - 1];

        res.json({
            success: true,
            message: lastMessage.content,
            weather,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;