import { getEnv } from "~/utils/env";

export const APP = {
    API_URL: getEnv("API_URL", "http://localhost:8000"),
};
export const ENVIRONMENT = {
    isDEV: getEnv("APP_ENV", "production") === "development",
    isProd: getEnv("APP_ENV", "production") === "production",
};
