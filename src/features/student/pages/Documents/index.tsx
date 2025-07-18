import { useQuery } from "@tanstack/react-query";
import apiPublic from "~/utils/apis/publicApi";
import { useState } from "react";
import { ROUTE_PATHS } from "~/router/routePaths";

export interface DocumentType {
    id: string;
    title: string;
    views: number;
    created_at: string;
    tags: { id: number; name: string; created_at: string }[];
}

export interface DocumentListResponse {
    current_page: number;
    data: DocumentType[];
    last_page: number;
}

export const fetchDocuments = async (page: number = 1, limit: number = 2): Promise<DocumentListResponse> => {
    const res = await apiPublic.get(`/documents?page=${page}&limit=${limit}`);
    return res.data.data;
};

export const useDocumentsQuery = (page: number, limit: number) => {
    return useQuery<DocumentListResponse>({
        queryKey: ["user-documents", page, limit],
        queryFn: () => fetchDocuments(page, limit),
        placeholderData: (prev) => prev,
    });
};

const Documents = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const {
        data: documents,
        isLoading,
        isError,
        error,
    } = useDocumentsQuery(page, limit) as {
        data: DocumentListResponse | undefined;
        isLoading: boolean;
        isError: boolean;
        error: unknown;
    };

    return (
        <div className="px-4 md:px-8 lg:px-0">
            <div className="mt-2.5 mb-4 hidden h-10 flex-nowrap items-center gap-3 text-slate-500">
                <a className="t1-flex-center cursor-pointer rounded-full duration-150 hover:bg-[#e9e9e9]" href="/">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 18V15"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </a>
                <div className="text-lg">&gt;</div>
                <span className="cursor-default truncate font-medium" style={{ color: "var(--primary)" }}>
                    Tài liệu
                </span>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-6 px-4 lg:grid lg:grid-cols-3">
                <div className="md:col-span-2">
                    <p className="px-4 text-xl font-medium text-[#0A4875]">Thư viện tài liệu</p>
                    <div className="mt-4">
                        <div>
                            <div
                                className="flex items-center gap-4 overflow-x-auto px-4"
                                style={{ scrollbarWidth: "none" }}
                            >
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">ĐGTD</p>
                                </button>
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">DGNL</p>
                                </button>
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">Lớp 12</p>
                                </button>
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">Lớp 11</p>
                                </button>
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">Lớp 10</p>
                                </button>
                                <button className="relative flex h-12 min-w-20 items-center justify-center gap-3 rounded-lg bg-[#F0F3F7] text-lg font-medium text-[#656C7B]">
                                    <p className="text-lg font-medium">Lớp 9</p>
                                </button>
                            </div>
                            <div className="mt-3.5 flex justify-between">
                                <div
                                    className="relative flex w-full items-center overflow-x-auto px-4"
                                    style={{ scrollbarWidth: "none" }}
                                >
                                    <button className=" relative min-w-20 border-b-[1px] py-3">
                                        <div
                                            className="bg-primary absolute bottom-0 left-0 h-[2px] w-full rounded-full"
                                            style={{ opacity: 1 }}
                                        ></div>
                                        <p className="text-md text-primary font-medium">Tất cả</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Toán</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Lý</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Sinh</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Anh</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Hoá</p>
                                    </button>
                                    <button className="relative min-w-[4.7rem] border-b-[1px] py-3">
                                        <p className="text-md font-medium text-[#999999]">Văn</p>
                                    </button>
                                </div>
                                <label className="relative hidden w-72 -translate-x-4 items-center rounded-lg bg-[#F0F3F7] px-2 py-2 xl:flex">
                                    <input
                                        className="text-primary w-full bg-transparent outline-none placeholder:text-[#AFC0CD]"
                                        placeholder="Tìm kiếm"
                                    />
                                    <button type="button" className="ml-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="11" cy="11" r="8" stroke="#155E94" strokeWidth="2" />
                                            <line
                                                x1="16.018"
                                                y1="16.485"
                                                x2="20"
                                                y2="20"
                                                stroke="#155E94"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-3.5 px-4 xl:grid-cols-2">
                        {isLoading && <div>Đang tải tài liệu...</div>}
                        {isError && (
                            <div className="text-red-500">
                                Lỗi tải tài liệu: {(error as any)?.message || "Unknown error"}
                            </div>
                        )}
                        {documents && documents.data.length === 0 && <div>Không có tài liệu nào.</div>}
                        {documents &&
                            Array.isArray(documents.data) &&
                            documents.data.map((doc: DocumentType) => (
                                <a
                                    key={doc.id}
                                    className="flex gap-4 rounded-lg bg-[#EFF0F1] py-3.5 pr-4 pl-2.5"
                                    href={ROUTE_PATHS.user.docsDetails}
                                >
                                    <div className="flex h-26 w-22 items-center justify-center">
                                        <img
                                            src="/src/imgs/Pdf-icon.png"
                                            alt="PDF Icon"
                                            className="h-20 w-16 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="line-clamp-2 font-medium text-[#373737]">{doc.title}</p>
                                            <div
                                                className="flex w-full items-center gap-3 overflow-x-auto"
                                                style={{ scrollbarWidth: "none" }}
                                            >
                                                {doc.tags?.map((tag) => (
                                                    <div
                                                        key={tag.id}
                                                        className="t1-flex-center bg-primary min-w-max rounded-lg px-2 py-0.5 text-xs text-white"
                                                    >
                                                        {tag.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-t-[#E3E3E3] pt-2.5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        width="20"
                                                        height="14"
                                                        viewBox="0 0 20 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="size-4.5"
                                                    >
                                                        <path
                                                            d="M10.001.417c3.109 0 5.373 1.115 6.863 2.49a7.926 7.926 0 011.654 2.132c.358.688.567 1.383.567 1.961 0 .578-.209 1.273-.567 1.96a7.922 7.922 0 01-1.654 2.133c-1.49 1.375-3.754 2.49-6.863 2.491-3.109 0-5.372-1.116-6.862-2.491A7.927 7.927 0 011.484 8.96C1.126 8.273.918 7.578.918 7c0-.578.208-1.273.566-1.96A7.924 7.924 0 013.14 2.906C4.629 1.532 6.892.417 10 .417zm0 1.5c-2.724 0-4.626.968-5.845 2.093a6.43 6.43 0 00-1.342 1.722c-.292.561-.396 1.013-.396 1.268 0 .255.104.707.396 1.269A6.432 6.432 0 004.156 9.99c1.219 1.125 3.121 2.093 5.845 2.093 2.724 0 4.627-.968 5.846-2.093a6.425 6.425 0 001.34-1.722c.293-.562.398-1.014.398-1.269 0-.255-.105-.707-.398-1.268a6.427 6.427 0 00-1.34-1.722C14.628 2.885 12.725 1.917 10 1.917zm0 1.833a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm0 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                            fill="#656C7B"
                                                        ></path>
                                                    </svg>
                                                    <p className="text-[#656C7B]">{doc.views}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="size-4.5"
                                                    >
                                                        <path
                                                            d="M9 .75a8.25 8.25 0 110 16.5A8.25 8.25 0 019 .75zm0 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm0 2.667a.75.75 0 01.75.75v2.932l2.166 1.444.061.046a.75.75 0 01-.827 1.241l-.066-.039-2.5-1.667A.75.75 0 018.25 9V5.667a.75.75 0 01.75-.75z"
                                                            fill="#656C7B"
                                                        ></path>
                                                    </svg>
                                                    <p className="text-[#656C7B]">
                                                        {new Date(doc.created_at).toLocaleDateString("vi-VN")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                    </div>
                    <div className="t1-flex-center mt-6">
                        <nav
                            className="relative z-0 flex flex-wrap justify-center -space-x-px rounded-md"
                            aria-label="Pagination"
                        >
                            <div className="t1-flex-center flex gap-1.5">
                                {/* Prev button */}
                                <button
                                    className={`t1-flex-center flex size-9 cursor-pointer rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${page === 1 ? "pointer-events-none opacity-25" : ""}`}
                                    onClick={() => setPage(page - 1)}
                                    disabled={page === 1}
                                    aria-label="Trang trước"
                                >
                                    <svg
                                        className="h-5 w-5 rotate-180"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                {documents &&
                                    documents.last_page &&
                                    Array.from({ length: documents.last_page }, (_, i) => i + 1).map((p) => (
                                        <button
                                            key={p}
                                            className={`t1-flex-center text-md relative h-9 w-9 cursor-pointer rounded-md border duration-100 ${p === page ? "pointer-events-none border-[#128ce9] bg-white font-medium text-[#128ce9]" : "border-transparent text-[#333333] hover:bg-[#eeeeee] active:bg-[#e0e0e0]"} `}
                                            onClick={() => setPage(p)}
                                            disabled={p === page}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                <button
                                    className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${documents && page === documents.last_page ? "pointer-events-none opacity-25" : ""}`}
                                    onClick={() => setPage(page + 1)}
                                    disabled={documents && page === documents.last_page}
                                    aria-label="Trang sau"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="relative h-full">
                        <div className="w-full" style={{ height: "0px" }}></div>
                        <div className="sticky w-full" style={{ top: 74 }}>
                            <div className="flex items-center justify-between">
                                <p className="text-primary text-xl font-medium">Kho tài liệu</p>
                                <a href={ROUTE_PATHS.user.docsRepository}>
                                    <p className="text-primary cursor-pointer">Xem tất cả &gt;&gt;&gt;</p>
                                </a>
                            </div>
                            <div className="mt-4.5 grid grid-cols-2 gap-5.5 lg:grid-cols-1">
                                <a
                                    className="rounded-lg bg-[#EFF0F1] p-3.5"
                                    href={ROUTE_PATHS.user.docsRepositoryDetails}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/src/imgs/Teptin-icon.png"
                                            alt="Icon"
                                            className="h-16 w-16 object-contain"
                                        />
                                        <div className="flex-1">
                                            <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                                Tuyển tập đề thi thử tốt nghiệp THPT Vật lý
                                            </p>
                                            <div className="flex hidden items-center gap-1 lg:block">
                                                <svg
                                                    width="13"
                                                    height="17"
                                                    viewBox="0 0 13 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M.208 6.175v4.703c0 .803 0 1.452.043 1.979.045.546.14 1.026.366 1.47l.145.259a3.75 3.75 0 001.494 1.38l.168.079c.397.17.824.248 1.303.287.526.043 1.175.043 1.978.043h1.587c.804 0 1.454 0 1.98-.043.547-.045 1.028-.14 1.472-.366l.258-.145a3.75 3.75 0 001.38-1.494l.08-.168c.17-.397.247-.824.286-1.303.043-.526.043-1.175.043-1.978V6.53v-.1c0-.56 0-.97-.067-1.35l-.037-.17a3.75 3.75 0 00-.304-.828l-.145-.257c-.182-.297-.416-.557-.73-.877l-.342-.342-.356-.355-.065-.065c-.398-.398-.69-.69-1.008-.913l-.145-.095a3.753 3.753 0 00-.801-.37l-.283-.08C8.075.626 7.624.626 6.973.626H5.705c-.803 0-1.452 0-1.978.043-.547.045-1.027.14-1.471.366A3.75 3.75 0 00.617 2.673c-.226.444-.321.924-.366 1.47C.208 4.67.208 5.32.208 6.124v.052zm1.538 6.56c-.038-.463-.038-1.057-.038-1.91v-4.65c0-.853 0-1.447.038-1.91.037-.453.107-.714.207-.911a2.25 2.25 0 01.984-.984c.197-.1.458-.17.912-.207.462-.038 1.056-.038 1.909-.038h1.129l.446.001v.007l.004.754c.004.229.01.436.025.621.031.38.1.736.27 1.073l.107.19c.264.43.643.782 1.096 1.013l.127.06c.3.128.614.183.946.21.36.03.799.03 1.323.03h.059l.001.446v4.295c0 .853 0 1.447-.038 1.91-.028.34-.074.572-.138.75l-.07.162a2.25 2.25 0 01-.827.896l-.155.087c-.198.1-.459.17-.913.207-.462.038-1.057.038-1.909.038H5.758c-.853 0-1.447 0-1.91-.038-.34-.028-.571-.074-.75-.138l-.161-.07a2.25 2.25 0 01-.897-.827l-.087-.155c-.1-.198-.17-.459-.207-.913zm9.198-8.152c-.128-.2-.317-.395-.839-.917l-.355-.354c-.408-.409-.616-.614-.783-.745l-.133-.091.002.388c.003.204.01.374.021.522.024.287.067.424.113.515l.048.086c.12.196.292.356.498.46l.078.034c.09.032.221.06.436.078.234.02.522.023.914.024z"
                                                        fill="#656C7B"
                                                    ></path>
                                                </svg>
                                                <p className="text-[#656C7B]">Đang cập nhật...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3.5 hidden lg:block">
                                        <div className="flex items-center gap-3">
                                            <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                                                Lớp 12
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Documents;
