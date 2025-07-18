import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronDown, MessageSquare, MessageSquareOff, SendHorizontal } from "lucide-react";

import { useInput } from "~/hooks/useInput";
import axios from "axios";
import { useAuth } from "~/hooks/useAuth";
import { ChatHistoriesType } from "./types/ChatBotType.type";
import ChatBubble from "./components/ChatBubble";
import { API_URL, helloMessageModel, trainingAI } from "./config";
import ChatLoading from "./components/ChatLoading";
import { getEnv } from "~/utils/env";
import { APP } from "~/config/env";

const ChatBotAI = () => {
    // const [isClose, setIsClose] = useState(false);
    const { auth } = useAuth();
    const frameChat = useRef<HTMLDivElement>(null);
    const [isPending, setIsPending] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { value: message, onChange, setValue: setMessage } = useInput("");
    const [chatHistories, setChatHistories] = useState<ChatHistoriesType[]>([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) return;
        setIsPending(true);
        setMessage("");
        const newHistories: ChatHistoriesType[] = [...chatHistories, { role: "user", parts: [{ text: message }] }];
        setChatHistories(newHistories);
        let modelReply = "Hiện tại máy chủ đang quá tải nên chưa thể hỗ trợ bạn được!";
        try {
            const data = await axios.post(
                getEnv("SEND_CHAT_BOT_AI", "BE") === "BE" ? APP.API_URL + "/chat-bot-ai" : API_URL,
                {
                    ...trainingAI,
                    contents: newHistories,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            modelReply =
                data.data?.candidates[0].content.parts[0].text || "Bạn hỏi 1 câu mà tôi không biết trả lời sao luôn á!";
        } catch (error) {
            console.error("Lỗi gọi API AI >> ", error);
        } finally {
            setChatHistories((prev) => [...prev, { role: "model", parts: [{ text: modelReply }] }]);
            setIsPending(false);
        }
    };

    // Lời chào đầu tiên của AI
    useEffect(() => {
        // AI chào người dùng
        setChatHistories([helloMessageModel(auth.user?.full_name) as ChatHistoriesType]);
    }, [setChatHistories, auth.user]);

    // Kéo xuống cuối cùng mỗi khi có đoạn chat mới
    useEffect(() => {
        frameChat.current?.scrollTo({
            top: frameChat.current.scrollHeight,
            behavior: "smooth",
        });
    }, [chatHistories]);

    return (
        <>
            {!isOpen && (
                <div
                    className="fixed right-10 bottom-44 z-2 hidden w-fit cursor-pointer rounded-xl bg-white px-4 py-2 font-semibold text-gray-600 shadow xl:bottom-42 xl:block"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>Chúng tôi có thể hỗ trợ gì được cho bạn?</span>
                </div>
            )}
            <button
                className="t1-flex-center fixed right-5 bottom-30 size-12 cursor-pointer rounded-full bg-blue-400 text-white md:bottom-30 md:size-15 xl:bottom-24"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MessageSquareOff className="!h-6 !w-6" /> : <MessageSquare className="!h-6 !w-6" />}
            </button>
            {isOpen && (
                <section className="fixed z-100000 min-h-[600px] rounded-xl bg-white shadow-sm max-xl:inset-0 xl:right-32 xl:bottom-15 xl:max-w-[420px]">
                    <div className="flex h-[80px] w-full items-center rounded-t-xl bg-gradient-to-r from-blue-500 to-blue-400 text-white">
                        <div className="flex w-full items-center justify-between px-5 py-4">
                            <div className="flex flex-row items-center gap-3">
                                <img
                                    className="h-12 rounded-full object-cover"
                                    alt=""
                                    src="/assets/images/logo/logo-64.png"
                                />
                                <div className="flex flex-col">
                                    <span className="text-xs">Trò chuyện với</span>
                                    <span className="text-lg font-bold">Trợ Lý Ảo</span>
                                </div>
                            </div>
                            <div
                                className="cursor-pointer rounded-full p-2 duration-100 hover:bg-blue-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <ChevronDown className="!h-6 !w-6" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex h-[calc(100%-120px)] flex-col gap-3 overflow-y-auto px-8 pt-6 pb-10 xl:h-[445px]"
                        ref={frameChat}
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#a5a5a5 transparent" }}
                    >
                        {chatHistories.map((history, index) => (
                            <ChatBubble
                                key={index}
                                role={history.role}
                                text={history.parts[0].text}
                                name={auth.user?.full_name}
                            />
                        ))}
                        {isPending && <ChatLoading />}
                    </div>
                    <form
                        className="absolute right-0 bottom-0 left-0 flex min-h-[75px] rounded-b-xl bg-white px-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex-1">
                            <div className="h-[0.5px] w-full bg-gray-300"></div>
                            <div className="flex">
                                <input
                                    onChange={onChange}
                                    value={message}
                                    type="text"
                                    placeholder="Tin nhắn của bạn ...."
                                    className="h-15 w-full border-none px-0.5 pr-5 outline-none"
                                />
                                {/* Screen < XL */}
                                {message && (
                                    <button
                                        type="submit"
                                        className="t1-flex-center mt-2 size-12 cursor-pointer rounded-full bg-blue-500 p-2 text-white shadow-2xl shadow-blue-800 xl:hidden"
                                    >
                                        <ArrowUp className="!h-5 !w-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                        {/* Screen >= XL */}
                        {message && (
                            <button
                                type="submit"
                                className="t1-flex-center absolute -right-[5%] bottom-[20%] hidden aspect-square w-12.5 cursor-pointer rounded-full bg-blue-500 text-white shadow-2xl shadow-blue-800 xl:flex"
                            >
                                <SendHorizontal className="!h-6 !w-6" />
                            </button>
                        )}
                    </form>
                </section>
            )}
        </>
    );
};

export default ChatBotAI;
