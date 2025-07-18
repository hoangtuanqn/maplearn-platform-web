import { ROUTE_PATHS } from "~/router/routePaths";
import EyeIcon from "../../components/icons/EyeIcon";
import DownloadIcon from "../../components/icons/DownloadIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import DocumentCard from "./components/DocumentCard";
import OtherRepoCard from "./components/OtherRepoCard";

const mockDocuments = [
    {
        id: "1",
        title: "THI THỬ TỐT NGHIỆP THPT TOÁN LẦN 2 2025 - THÁI BÌNH",
        views: 1597,
        created_at: "17/06/2025",
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
        created_at: "10/06/2025",
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
        created_at: "17/06/2025",
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
        created_at: "10/06/2025",
        tags: [
            { id: 1, name: "Toán", created_at: "" },
            { id: 2, name: "Lớp 12", created_at: "" },
        ],
        link: ROUTE_PATHS.docsDetails,
    },
];

const mockOtherRepos = [
    {
        title: "Tuyển tập đề thi thử tốt nghiệp THPT Vật lý",
        tags: [{ id: 1, name: "Lớp 12", created_at: "" }],
        link: ROUTE_PATHS.docsRepositoryDetails,
        image: "/src/imgs/File-icon.png",
        downloadStatus: "Đang cập nhật...",
    },
];

const DocsRepoDetails = () => {
    return (
        <div className="px-4 lg:px-0">
            <div className="flex w-full flex-row gap-6">
                <div className="w-full lg:flex-[2]">
                    <div className="rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/File-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex flex-1 flex-col justify-center">
                                <p className="line-clamp-2 text-xl font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Toán
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <EyeIcon className="size-5" />
                                        <p className="text-[#656C7B]">1555</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <DownloadIcon className="size-5" />
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
                        <div className="flex items-center justify-end">
                            <label className="relative flex w-72 items-center rounded-lg bg-[#F0F3F7] px-2 py-3">
                                <input
                                    className="text-primary w-full bg-transparent outline-none placeholder:text-[#AFC0CD]"
                                    placeholder="Tên tài liệu"
                                />
                                <button type="button" className="ml-2">
                                    <SearchIcon className="size-4.5" />
                                </button>
                            </label>
                        </div>
                        <div className="mt-3.5 grid grid-cols-1 gap-3.5 xl:grid-cols-2">
                            {mockDocuments.map((doc) => (
                                <DocumentCard
                                    key={doc.id}
                                    title={doc.title}
                                    tags={doc.tags}
                                    views={doc.views}
                                    created_at={doc.created_at}
                                    link={doc.link}
                                    image="/src/imgs/Pdf-icon.png"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden flex-1 rounded-lg lg:block">
                    <div className="relative h-full">
                        <div className="w-full" style={{ height: "0px" }}></div>
                        <div className="sticky w-full" style={{ top: "76px" }}>
                            <div className="rounded-lg p-4 shadow-sm">
                                <p className="text-primary text-xl font-medium">Kho tài liệu khác</p>
                                <div className="mt-4.5 flex flex-col gap-5.5">
                                    {mockOtherRepos.map((repo, idx) => (
                                        <OtherRepoCard
                                            key={idx}
                                            title={repo.title}
                                            tags={repo.tags}
                                            link={repo.link}
                                            image={repo.image}
                                            downloadStatus={repo.downloadStatus}
                                        />
                                    ))}
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
