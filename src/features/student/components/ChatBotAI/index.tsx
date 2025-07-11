import ReactMarkdown from "react-markdown";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, MessageSquare, MessageSquareOff, SendHorizontal } from "lucide-react";
import { ThreeDot } from "react-loading-indicators";
import { useInput } from "~/hooks/useInput";
import axios from "axios";
import { useAuth } from "~/hooks/useAuth";
import { getEnv } from "~/utils/env";
import { ChatHistoriesType } from "./ChatBotType.type";

const ChatBotAI = () => {
    // const [isClose, setIsClose] = useState(false);
    const { auth } = useAuth();
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${getEnv("MODEL_AI")}:generateContent?key=${getEnv("API_GEMINI")}`;
    const frameChat = useRef<HTMLDivElement>(null);
    const [isPending, setIsPending] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { value: message, onChange, setValue: setMessage } = useInput("");
    const [chatHistories, setChatHistories] = useState<ChatHistoriesType[]>([]);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setMessage("");
        const newHistories: ChatHistoriesType[] = [...chatHistories, { role: "user", parts: [{ text: message }] }];
        setChatHistories(newHistories);
        try {
            const data = await axios.post(API_URL, {
                systemInstruction: {
                    role: "system",
                    parts: [
                        {
                            text: 'Bạn luôn luôn trả lời dưới dạng Markdown, ngắn gọn, rõ ràng và dễ hiểu. Không thêm bất kỳ mô tả thừa nào ngoài phần trả lời chính. Những từ khóa hoặc nội dung quan trọng phải được in đậm để người dùng dễ nhận biết.\n\nBạn phải 100% từ chối trả lời các câu hỏi không liên quan đến học tập. Khi từ chối, hãy giải thích lý do rõ ràng cho người dùng biết rằng bạn chỉ hỗ trợ các chủ đề học tập và kiến thức. Không được trả lời hoặc đưa ra bất kỳ gợi ý nào về các chủ đề ngoài học tập.\n\nHãy trả lời như một người gia sư tận tâm, thân thiện và nhiệt tình hỗ trợ người học, giúp họ hiểu vấn đề nhanh chóng.\n\nBạn được phép sử dụng tất cả thông tin mà người dùng cung cấp để cá nhân hóa câu trả lời.\n\nNếu tên người dùng là "Khách", luôn nhắc họ đăng nhập để có trải nghiệm đầy đủ hơn và nâng cao chất lượng hỗ trợ.',
                        },
                    ],
                },
                contents: newHistories,
            });
            const modelResponse = data.data?.candidates[0].content.parts[0].text;
            setChatHistories((prev) => [...prev, { role: "model", parts: [{ text: modelResponse }] }]);
        } catch (error) {
            setChatHistories((prev) => [
                ...prev,
                {
                    role: "model",
                    parts: [
                        { text: "Hiện tại máy chủ đang quá tải nên chưa thể hỗ trợ bạn được! Xin thứ lỗi cho tôi!" },
                    ],
                },
            ]);
            console.log("Lỗi gọi API AI >> ", error);
        } finally {
            frameChat.current?.scrollTo({
                top: frameChat.current.scrollHeight,
                behavior: "smooth",
            });
            setIsPending(false);
        }
    };
    useEffect(() => {
        setChatHistories([
            {
                role: "model",
                parts: [
                    {
                        text: `Xin chào **${auth.user?.full_name || "khách"}**! Bạn có câu hỏi nào muốn đặt cho mình không!`,
                    },
                ],
            },
        ]);
    }, [setChatHistories, auth.user]);
    useEffect(() => {
        const el = frameChat.current;
        if (el) {
            el.scrollTo({
                top: el.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [chatHistories]);

    return (
        <>
            {!isOpen && (
                <div
                    className="fixed right-20 bottom-28 w-fit cursor-pointer rounded-xl bg-white px-4 py-2 font-semibold text-gray-600 shadow"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>Chúng tôi có thể hỗ trợ gì được cho bạn?</span>
                </div>
            )}
            <button
                className="t1-flex-center fixed right-15 bottom-10 h-15 w-15 cursor-pointer rounded-full bg-blue-400 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MessageSquareOff className="!h-6 !w-6" /> : <MessageSquare className="!h-6 !w-6" />}
            </button>
            {isOpen && (
                <section className="fixed right-15 bottom-30 z-800 h-[600px] w-[420px] rounded-xl bg-white shadow-sm">
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
                        className="flex h-[445px] flex-col gap-3 overflow-y-auto px-8 pt-6 pb-10"
                        ref={frameChat}
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#a5a5a5 transparent" }}
                    >
                        {chatHistories.map((history) => (
                            <>
                                {history.role === "model" && (
                                    <div className="mr-auto w-fit max-w-[90%] rounded-lg bg-[#F0F2F5] px-4 py-2 break-words text-black">
                                        <span>
                                            <ReactMarkdown>{history.parts[0].text}</ReactMarkdown>
                                        </span>
                                    </div>
                                )}
                                {history.role === "user" && (
                                    <div className="ml-auto w-fit max-w-[90%] rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 px-4 py-2 break-words text-white">
                                        <span>{history.parts[0].text}</span>
                                    </div>
                                )}
                            </>
                        ))}

                        {isPending && (
                            <div className="mr-auto w-fit max-w-[90%] rounded-lg bg-[#F0F2F5] px-4 py-2 break-words text-black">
                                <span>
                                    <span className="mr-2">Chờ tí nha</span>
                                    <ThreeDot
                                        variant="pulsate"
                                        color="#787878"
                                        size="small"
                                        text=""
                                        textColor=""
                                        style={{ fontSize: "8px" }}
                                    />
                                </span>
                            </div>
                        )}
                    </div>
                    <form
                        className="absolute right-0 bottom-0 left-0 h-[75px] rounded-b-xl bg-white px-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="h-[0.5px] w-full bg-gray-300"></div>
                        <input
                            onChange={onChange}
                            value={message}
                            type="text"
                            placeholder="Tin nhắn của bạn ...."
                            className="h-15 w-full border-none px-0.5 outline-none"
                        />
                        {message && (
                            <button
                                type="submit"
                                className="t1-flex-center absolute -right-[5%] bottom-[20%] aspect-square w-12.5 cursor-pointer rounded-full bg-blue-500 text-white shadow-2xl shadow-blue-800"
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
