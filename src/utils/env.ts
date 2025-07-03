export const getEnv = (key: string, defaultValue?: string) => {
    return import.meta.env[`VITE_${key}`] ?? defaultValue ?? "";
};
