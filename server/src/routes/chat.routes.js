import express from "express";
import { z } from "zod";
import weatherAgent from "../agents/weather.agent.js";

const router = express.Router();

const messageSchema = z.object({
    role: z.enum(["user", "assistant", "system"]),
    content: z.string().min(1).max(4000),
});

const chatRequestSchema = z.object({
    messages: z
        .array(messageSchema)
        .min(1)
        .max(15),
});

router.post("/", async (req, res) => {
    try {
        const parsed = chatRequestSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid chat request.",
            });
        }

        const { messages } = parsed.data;

        const result = await weatherAgent.invoke({
            messages,
        });

        const toolMessage = [...result.messages]
            .reverse()
            .find((message) => message.type === "tool");

        let weather = null;

        if (
            toolMessage?.name === "get_current_weather"
        ) {
            try {
                weather = JSON.parse(toolMessage.content);
            } catch {
                weather = null;
            }
        }

        const lastMessage =
            result.messages[result.messages.length - 1];

        return res.json({
            success: true,
            message: lastMessage?.content ?? "",
            weather,
        });

    } catch (error) {
        console.error("Chat error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to process your request.",
        });
    }
});

export default router;