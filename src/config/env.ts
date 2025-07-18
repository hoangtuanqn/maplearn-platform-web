import { getEnv } from "~/utils/env";

const API_VERSION_PATH = "/api/v1";
export const APP = {
    API_VERSION_PATH,
    API_ROOT: getEnv("API_URL", `http://localhost:8000`),
    API_URL: getEnv("API_URL", `http://localhost:8000`) + API_VERSION_PATH,
};
export const ENVIRONMENT = {
    isDEV: getEnv("APP_ENV", "production") === "development",
    isProd: getEnv("APP_ENV", "production") === "production",
};
