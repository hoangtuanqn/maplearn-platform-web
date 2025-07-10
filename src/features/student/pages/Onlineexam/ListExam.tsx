import { CircleArrowDown } from "lucide-react";

const ListExam = () => {
    return (
        <>
            {[...Array(20)].map((_, idx) => (
                <div
                    key={idx}
                    className="relative mb-4 flex h-[72px] w-full items-center justify-between gap-4 overflow-hidden rounded-lg bg-white px-6 shadow-sm"
                    style={{ border: "1px solid white" }}
                >
                    <div className="flex h-full grow items-center text-base">
                        <a href="#" className="text-secondary-typo-light line-clamp-1 w-full pr-6 text-lg font-medium">
                            1. Đề minh hoạ môn Vật Lý - Đề số 2 (Trích trong Sách 30 đề minh hoạ Vật Lý 2025)
                        </a>
                    </div>

                    <div className="flex shrink-0 gap-4">
                        <a href="#">
                            <div className="flex h-11 cursor-pointer items-center rounded-full bg-[#12AD50] px-8 text-base text-white select-none">
                                Xem
                            </div>
                        </a>
                        <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#C7DEF0] select-none">
                            <CircleArrowDown className="h-6 w-6 text-[#189BD3]" />
                        </div>
                        <div className="max-lapx:hidden flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#C7DEF0] select-none">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.82999 19.92C6.36534 19.92 7.60999 18.6753 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6753 3.29464 19.92 4.82999 19.92Z"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"
                                    stroke="#189BD3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListExam;
