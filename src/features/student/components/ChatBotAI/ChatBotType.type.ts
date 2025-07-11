export interface ChatHistoriesType {
    role: "user" | "model" | "system";
    parts: [
        {
            text: string;
        },
    ];
}
