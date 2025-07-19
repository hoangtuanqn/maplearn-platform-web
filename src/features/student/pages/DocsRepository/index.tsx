import { useState } from "react";
import { ROUTE_PATHS } from "~/router/routePaths";
import DocsRepositoryCard from "./components/DocsRepositoryCard";
import { Link } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import SearchBar from "~/features/student/components/SearchBar";
import useDocumentTitle from "~/hooks/useDocumentTitle";

const DocsRepository = () => {
    useDocumentTitle("Kho tài liệu");
    const [selectedSubject, setSelectedSubject] = useState("Tất cả");
    const subjects = ["Tất cả", "Toán", "Lý", "Sinh", "Anh", "Hoá", "Văn"];

    const mockRepositories = [
        {
            title: "Tuyển tập đề thi thử tốt nghiệp THPT Toán",
            views: 1540,
            grade: "Lớp 12",
            exams: [
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH",
                    link: ROUTE_PATHS.docsRepositoryDetails,
                },
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)",
                    link: ROUTE_PATHS.docsRepositoryDetails,
                },
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)",
                    link: "/tai-lieu/thi-thu-tot-nghiep-thpt-toan-2025---binh-phuoc-de-bai-75sws9d021pl",
                },
            ],
        },
        {
            title: "Tuyển tập đề thi thử tốt nghiệp THPT Toán",
            views: 1540,
            grade: "Lớp 12",
            exams: [
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH",
                    link: ROUTE_PATHS.docsRepositoryDetails,
                },
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (LỜI GIẢI)",
                    link: ROUTE_PATHS.docsRepositoryDetails,
                },
                {
                    title: "THI THỬ TỐT NGHIỆP THPT TOÁN 2025 - BÌNH PHƯỚC (ĐỀ BÀI)",
                    link: "/tai-lieu/thi-thu-tot-nghiep-thpt-toan-2025---binh-phuoc-de-bai-75sws9d021pl",
                },
            ],
        },
    ];

    return (
        <div className="max-w-8xl mx-auto min-h-screen px-4">
            <div className="mt-2.5 mb-4 hidden h-10 flex-nowrap items-center gap-3 text-slate-500">
                <Link
                    className="flex cursor-pointer items-center justify-center rounded-full transition duration-150 hover:bg-gray-200"
                    to="/"
                >
                    <HomeIcon />
                </Link>
                <div className="text-lg">&gt;</div>
                <Link className="max-w-[20%] truncate transition duration-150 hover:text-blue-600" to="/tai-lieu">
                    Tài liệu
                </Link>
                <div className="text-lg">&gt;</div>
                <span className="cursor-default truncate font-medium text-blue-600">Kho tài liệu</span>
            </div>
            <p className="text-primary text-xl font-bold">Tổng hợp kho tài liệu</p>
            <div className="mt-6 flex w-full items-center justify-between">
                <SearchBar />
                <div className="ml-auto flex min-w-0 items-center gap-4">
                    <select
                        className="h-12 w-full rounded-xl bg-gray-100 px-4 text-base font-medium text-gray-500 focus:outline-none sm:w-40 md:w-52"
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
                {mockRepositories.map((repo, idx) => (
                    <DocsRepositoryCard
                        key={idx}
                        title={repo.title}
                        views={repo.views}
                        grade={repo.grade}
                        exams={repo.exams}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocsRepository;
