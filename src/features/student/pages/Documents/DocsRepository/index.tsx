import React, { useState } from "react";
import { ROUTE_PATHS } from "~/router/routePaths";

const DocsRepositoryPage = () => {
    const [selectedSubject, setSelectedSubject] = useState("Tất cả");
    const subjects = ["Tất cả", "Toán", "Lý", "Sinh", "Anh", "Hoá", "Văn"];
    return (
        <div className="max-w-8xl mx-auto px-4">
            <div className="mt-2.5 mb-4 hidden h-10 flex-nowrap items-center gap-3 text-slate-500">
                <a
                    className="flex cursor-pointer items-center justify-center rounded-full transition duration-150 hover:bg-gray-200"
                    href="/"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 18V15"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
                <div className="text-lg">&gt;</div>
                <a className="max-w-[20%] truncate transition duration-150 hover:text-blue-600" href="/tai-lieu">
                    Tài liệu
                </a>
                <div className="text-lg">&gt;</div>
                <span className="cursor-default truncate font-medium text-blue-600">Kho tài liệu</span>
            </div>
            <p className="text-primary px-4 text-xl font-bold">Tổng hợp kho tài liệu</p>
            <div className="mt-6 flex w-full items-center justify-between">
                <label className="flex h-12 items-center rounded-xl bg-[#F0F3F7] px-4 lg:w-60 xl:w-80">
                    <input
                        className="h-full w-full bg-transparent pl-3 text-base font-medium text-[#444444] outline-none placeholder:text-[#AFC0CD]"
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
                <div className="ml-auto flex items-center gap-4">
                    <select
                        className="h-12 w-52 rounded-xl bg-[#F0F3F7] px-4 text-base font-medium text-[#444444] focus:outline-none"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col rounded-lg bg-[#EFF0F1]">
                    <a
                        className="cursor-pointer p-3.5"
                        href={ROUTE_PATHS.user.docsRepositoryDetails}
                    >
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/Teptin-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex h-20 flex-1 flex-col justify-center">
                                <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="20"
                                            height="14"
                                            viewBox="0 0 20 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                        >
                                            <path
                                                d="M10.001.417c3.109 0 5.373 1.115 6.863 2.49a7.926 7.926 0 011.654 2.132c.358.688.567 1.383.567 1.961 0 .578-.209 1.273-.567 1.96a7.922 7.922 0 01-1.654 2.133c-1.49 1.375-3.754 2.49-6.863 2.491-3.109 0-5.372-1.116-6.862-2.491A7.927 7.927 0 011.484 8.96C1.126 8.273.918 7.578.918 7c0-.578.208-1.273.566-1.96A7.924 7.924 0 013.14 2.906C4.629 1.532 6.892.417 10 .417zm0 1.5c-2.724 0-4.626.968-5.845 2.093a6.43 6.43 0 00-1.342 1.722c-.292.561-.396 1.013-.396 1.268 0 .255.104.707.396 1.269A6.432 6.432 0 004.156 9.99c1.219 1.125 3.121 2.093 5.845 2.093 2.724 0 4.627-.968 5.846-2.093a6.425 6.425 0 001.34-1.722c.293-.562.398-1.014.398-1.269 0-.255-.105-.707-.398-1.268a6.427 6.427 0 00-1.34-1.722C14.628 2.885 12.725 1.917 10 1.917zm0 1.833a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm0 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                fill="#656C7B"
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">1540</p>
                                    </div>
                                    <div className="flex items-center gap-1">
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
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <div className="flex items-center gap-3">
                                <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                                    Lớp 12
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="my-1 h-[1px] w-full bg-[#DBDDE0]"></div>
                    <div className="flex-1 p-3.5">
                        <div className="flex flex-col gap-2.5">
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}   
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href="/tai-lieu/thi-thu-tot-nghiep-thpt-toan-2025---binh-phuoc-de-bai-75sws9d021pl"
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg bg-[#EFF0F1]">
                    <a
                        className="cursor-pointer p-3.5"
                        href={ROUTE_PATHS.user.docsRepositoryDetails}
                    >
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/Teptin-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex h-20 flex-1 flex-col justify-center">
                                <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="20"
                                            height="14"
                                            viewBox="0 0 20 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                        >
                                            <path
                                                d="M10.001.417c3.109 0 5.373 1.115 6.863 2.49a7.926 7.926 0 011.654 2.132c.358.688.567 1.383.567 1.961 0 .578-.209 1.273-.567 1.96a7.922 7.922 0 01-1.654 2.133c-1.49 1.375-3.754 2.49-6.863 2.491-3.109 0-5.372-1.116-6.862-2.491A7.927 7.927 0 011.484 8.96C1.126 8.273.918 7.578.918 7c0-.578.208-1.273.566-1.96A7.924 7.924 0 013.14 2.906C4.629 1.532 6.892.417 10 .417zm0 1.5c-2.724 0-4.626.968-5.845 2.093a6.43 6.43 0 00-1.342 1.722c-.292.561-.396 1.013-.396 1.268 0 .255.104.707.396 1.269A6.432 6.432 0 004.156 9.99c1.219 1.125 3.121 2.093 5.845 2.093 2.724 0 4.627-.968 5.846-2.093a6.425 6.425 0 001.34-1.722c.293-.562.398-1.014.398-1.269 0-.255-.105-.707-.398-1.268a6.427 6.427 0 00-1.34-1.722C14.628 2.885 12.725 1.917 10 1.917zm0 1.833a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm0 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                fill="#656C7B"
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">1540</p>      
                                    </div>
                                    <div className="flex items-center gap-1">
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
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <div className="flex items-center gap-3">
                                <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                                    Lớp 12
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="my-1 h-[1px] w-full bg-[#DBDDE0]"></div>
                    <div className="flex-1 p-3.5">
                        <div className="flex flex-col gap-2.5">
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href="/tai-lieu/thi-thu-tot-nghiep-thpt-toan-2025---binh-phuoc-de-bai-75sws9d021pl"
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg bg-[#EFF0F1]">
                    <a
                        className="cursor-pointer p-3.5"
                        href={ROUTE_PATHS.user.docsRepositoryDetails}
                    >
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/Teptin-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex h-20 flex-1 flex-col justify-center">
                                <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="20"
                                            height="14"
                                            viewBox="0 0 20 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                        >
                                            <path
                                                d="M10.001.417c3.109 0 5.373 1.115 6.863 2.49a7.926 7.926 0 011.654 2.132c.358.688.567 1.383.567 1.961 0 .578-.209 1.273-.567 1.96a7.922 7.922 0 01-1.654 2.133c-1.49 1.375-3.754 2.49-6.863 2.491-3.109 0-5.372-1.116-6.862-2.491A7.927 7.927 0 011.484 8.96C1.126 8.273.918 7.578.918 7c0-.578.208-1.273.566-1.96A7.924 7.924 0 013.14 2.906C4.629 1.532 6.892.417 10 .417zm0 1.5c-2.724 0-4.626.968-5.845 2.093a6.43 6.43 0 00-1.342 1.722c-.292.561-.396 1.013-.396 1.268 0 .255.104.707.396 1.269A6.432 6.432 0 004.156 9.99c1.219 1.125 3.121 2.093 5.845 2.093 2.724 0 4.627-.968 5.846-2.093a6.425 6.425 0 001.34-1.722c.293-.562.398-1.014.398-1.269 0-.255-.105-.707-.398-1.268a6.427 6.427 0 00-1.34-1.722C14.628 2.885 12.725 1.917 10 1.917zm0 1.833a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm0 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                fill="#656C7B"
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">1540</p>
                                    </div>
                                    <div className="flex items-center gap-1">
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
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <div className="flex items-center gap-3">
                                <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                                    Lớp 12
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="my-1 h-[1px] w-full bg-[#DBDDE0]"></div>
                    <div className="flex-1 p-3.5">
                        <div className="flex flex-col gap-2.5">
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href="/tai-lieu/thi-thu-tot-nghiep-thpt-toan-lan-2-2025---thai-binh-75sxqla01qx6"
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg bg-[#EFF0F1]">
                    <a
                        className="cursor-pointer p-3.5"
                        href={ROUTE_PATHS.user.docsRepositoryDetails}
                    >
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/Teptin-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex h-20 flex-1 flex-col justify-center">
                                <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            width="20"
                                            height="14"
                                            viewBox="0 0 20 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                        >
                                            <path
                                                d="M10.001.417c3.109 0 5.373 1.115 6.863 2.49a7.926 7.926 0 011.654 2.132c.358.688.567 1.383.567 1.961 0 .578-.209 1.273-.567 1.96a7.922 7.922 0 01-1.654 2.133c-1.49 1.375-3.754 2.49-6.863 2.491-3.109 0-5.372-1.116-6.862-2.491A7.927 7.927 0 011.484 8.96C1.126 8.273.918 7.578.918 7c0-.578.208-1.273.566-1.96A7.924 7.924 0 013.14 2.906C4.629 1.532 6.892.417 10 .417zm0 1.5c-2.724 0-4.626.968-5.845 2.093a6.43 6.43 0 00-1.342 1.722c-.292.561-.396 1.013-.396 1.268 0 .255.104.707.396 1.269A6.432 6.432 0 004.156 9.99c1.219 1.125 3.121 2.093 5.845 2.093 2.724 0 4.627-.968 5.846-2.093a6.425 6.425 0 001.34-1.722c.293-.562.398-1.014.398-1.269 0-.255-.105-.707-.398-1.268a6.427 6.427 0 00-1.34-1.722C14.628 2.885 12.725 1.917 10 1.917zm0 1.833a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm0 1.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                fill="#656C7B"
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">1540</p>
                                    </div>
                                    <div className="flex items-center gap-1">
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
                                            />
                                        </svg>
                                        <p className="text-[#656C7B]">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <div className="flex items-center gap-3">
                                <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                                    Lớp 12
                                </div>
                            </div>
                        </div>
                    </a>

                    <div className="my-1 h-[1px] w-full bg-[#DBDDE0]"></div>
                    <div className="flex-1 p-3.5">
                        <div className="flex flex-col gap-2.5">
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href="/tai-lieu/thi-thu-tot-nghiep-thpt-toan-2025---binh-phuoc-loi-giai-75sx9q801qu0"
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)
                                </p>
                            </a>
                            <a
                                className="flex cursor-pointer items-center gap-2.5"
                                href={ROUTE_PATHS.user.docsRepositoryDetails}
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#5A5A5A"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="line-clamp-1 flex-1 font-sans text-[#5A5A5A]">
                                    THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsRepositoryPage;
