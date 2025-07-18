import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler", { target: "19" }]],
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"), // alias ~ trỏ đến thư mục src
        },
    },
});
