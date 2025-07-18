import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";
import DownloadIcon from "../../../components/icons/DownloadIcon";

const DocumentRepositoryCard = () => {
    return (
        <div className="relative h-full">
            <div className="w-full" style={{ height: "0px" }}></div>
            <div className="sticky w-full" style={{ top: 74 }}>
                <div className="flex items-center justify-between">
                    <p className="text-primary text-xl font-medium">Kho tài liệu</p>
                    <Link to={ROUTE_PATHS.docsRepository}>
                        <p className="text-primary cursor-pointer">Xem tất cả &gt;&gt;&gt;</p>
                    </Link>
                </div>
                <div className="mt-4.5 grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-1">
                    <Link className="rounded-lg bg-[#EFF0F1] p-3.5" to={ROUTE_PATHS.docsRepositoryDetails}>
                        <div className="flex items-center gap-4">
                            <img src="/src/imgs/File-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                            <div className="flex-1">
                                <p className="text-md line-clamp-2 font-medium text-[#373737]">
                                    Tuyển tập đề thi thử tốt nghiệp THPT Vật lý
                                </p>
                                <div className="hidden items-center gap-1 lg:flex">
                                    <DownloadIcon className="size-5" />
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
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DocumentRepositoryCard;
