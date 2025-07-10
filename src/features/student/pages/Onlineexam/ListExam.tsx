import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const ListExam = () => {
    return (
        <>
            <div className="flex flex-col gap-3 xl:gap-4">
                {[...Array(10)].map((_, index) => (
                    <div
                        className="relative flex min-h-[72px] w-full items-center justify-between gap-4 overflow-hidden rounded-lg bg-white px-6 py-2.5 text-[15px] shadow-sm"
                        style={{ border: "1px solid white" }}
                    >
                        <div className="flex h-full grow items-center justify-between">
                            <Link
                                className="text-secondary-typo-light pr-6 font-semibold lg:line-clamp-1 lg:w-[70%]"
                                to="/thi-online/de-khao-sat-chat-luong-dau-nam-ky-thi-dgnl-hsa-v-act-78sly9c02h86"
                            >
                                {index + 1}. Đề minh họa môn Hóa - Đề số 3 (Trích trong Sách 30 đề minh họa Hóa 2025)
                            </Link>
                        </div>
                        <div className="hidden shrink-0 gap-4 xl:flex">
                            <Link to="/thi-online/de-khao-sat-chat-luong-dau-nam-ky-thi-dgnl-hsa-v-act-78sly9c02h86">
                                <div className="t1-flex-center h-9.5 rounded-full bg-[#12AD50] px-8 text-sm text-white">
                                    Xem
                                </div>
                            </Link>
                            <div className="t1-flex-center h-11 w-11 cursor-pointer rounded-full bg-[#C7DEF0]">
                                <Download color="var(--primary)" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListExam;
