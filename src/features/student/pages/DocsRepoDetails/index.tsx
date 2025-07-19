import { ROUTE_PATHS } from "~/router/routePaths";
import DocumentCard from "./components/DocumentCard";
import TagBadge from "../../components/TagBadge";
import { formatter } from "~/utils/format";
import { Eye, Files } from "lucide-react";
import DocumentCategoryCard from "../Documents/components/DocumentCategoryCard";
import SearchBar from "~/features/student/components/SearchBar";
import useDocumentTitle from "~/hooks/useDocumentTitle";

const mockDocuments = [
    {
        id: "1",
        title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH",
        views: 1597,
        created_at: "2025-12-06",
        tags: [
            { id: 1, name: "Toán", created_at: "" },
            { id: 2, name: "Lớp 12", created_at: "" },
            { id: 3, name: "Ôn thi", created_at: "" },
        ],
        link: ROUTE_PATHS.docsDetails,
    },
    {
        id: "2",
        title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 1 2025 - HÀ NỘI",
        views: 1200,
        created_at: "2025-12-06",
        tags: [
            { id: 1, name: "Toán", created_at: "" },
            { id: 2, name: "Lớp 12", created_at: "" },
        ],
        link: ROUTE_PATHS.docsDetails,
    },
    {
        id: "1",
        title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH",
        views: 1597,
        created_at: "2025-12-06",
        tags: [
            { id: 1, name: "Toán", created_at: "" },
            { id: 2, name: "Lớp 12", created_at: "" },
        ],
        link: ROUTE_PATHS.docsDetails,
    },
    {
        id: "2",
        title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 1 2025 - HÀ NỘI",
        views: 1200,
        created_at: "2025-12-06",
        tags: [
            { id: 1, name: "Toán", created_at: "" },
            { id: 2, name: "Lớp 12", created_at: "" },
        ],
        link: ROUTE_PATHS.docsDetails,
    },
];

// const mockOtherRepos = [
//     {
//         title: "Tuyển tập đề thi thử tốt nghiệp THPT Vật lý",
//         tags: [{ id: 1, name: "Lớp 12", created_at: "" }],
//         link: ROUTE_PATHS.docsRepositoryDetails,
//         image: "/assets/icons/file.svg",
//     },
// ];

const DocsRepoDetails = () => {
    useDocumentTitle("Chi tiết kho tài liệu");
    return (
        <div className="min-h-screen px-4 lg:px-0">
            <div className="flex w-full flex-row gap-10">
                <div className="w-full lg:flex-[2]">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <img src="/assets/icons/file.svg" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex flex-1 flex-col justify-center">
                                <p className="line-clamp-2 text-xl font-medium text-black">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="mt-1.5 flex items-center gap-4">
                                    <div className="5 flex items-center gap-1">
                                        <Eye className="opacity-70"/>
                                        <p className="text-sm text-gray-500">{formatter.number(2000)}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Files className="size-4 opacity-70"/>
                                        <p className="text-sm text-gray-500">{formatter.number(30)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <div className="flex items-center gap-3">
                                <TagBadge>Lớp 12</TagBadge>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <SearchBar />
                        </div>
                        <div className="mt-3.5 grid grid-cols-1 gap-3.5 xl:grid-cols-2">
                            {mockDocuments.map((doc) => (
                                <DocumentCard
                                    key={doc.id + doc.title}
                                    title={doc.title}
                                    tags={doc.tags}
                                    views={doc.views}
                                    created_at={doc.created_at}
                                    link={doc.link}
                                    image="/assets/icons/pdf.svg"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden flex-1 rounded-lg lg:block">
                    <div className="relative h-full">
                        <div className="w-full" style={{ height: "0px" }}></div>
                        <div className="sticky w-full" style={{ top: "76px" }}>
                            <div className="rounded-lg bg-white p-4 shadow-sm">
                                <p className="text-primary text-base font-medium">Kho tài liệu khác</p>
                                <div className="mt-4.5 flex flex-col gap-3.5">
                                    {/* {mockOtherRepos.map((repo, idx) => (
                                        // <DocumentCategoryCard
                                        //     key={idx}
                                        //     title={repo.title}
                                        //     tags={repo.tags}
                                        //     link={repo.link}
                                        //     image={repo.image}
                                        // />
                                    ))} */}
                                    <DocumentCategoryCard />
                                    <DocumentCategoryCard />
                                    <DocumentCategoryCard />
                                    <DocumentCategoryCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DocsRepoDetails;
