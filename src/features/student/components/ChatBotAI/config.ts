import { getEnv } from "~/utils/env";
import { SYSTEM_PROMPT } from "./constants/systemPrompt";

// Tạo nhanh token: https://aistudio.google.com/apikey
const token = getEnv("API_GEMINI");
const model = getEnv("MODEL_AI", "gemini-2.0-flash"); // Các model: https://ai.google.dev/gemini-api/docs/models?hl=vi
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${token}`;

// Training kiến thức cho AI
export const trainingAI = {
    systemInstruction: {
        role: "system",
        parts: [
            {
                text: SYSTEM_PROMPT,
            },
        ],
    },
};
// Lời chào đầu tiên
export const helloMessageModel = (name: string = "khách") => ({
    role: "model",
    parts: [
        {
            text: `Xin chào **${name}**! Bạn có câu hỏi nào muốn đặt cho mình không!`,
        },
    ],
});
