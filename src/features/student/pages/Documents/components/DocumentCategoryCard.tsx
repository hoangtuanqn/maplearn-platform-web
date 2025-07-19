import { Files } from "lucide-react";
import { Link } from "react-router-dom";
import TagBadge from "~/features/student/components/TagBadge";
import { ROUTE_PATHS } from "~/router/routePaths";
import { formatter } from "~/utils/format";

const DocumentCategoryCard = () => {
    return (
        <Link className="rounded-lg bg-gray-100 p-3.5" to={ROUTE_PATHS.docsRepositoryDetails}>
            <div className="flex items-center gap-4">
                <img src="/assets/icons/file.svg" alt="Icon" className="h-16 w-16 object-contain" />
                <div className="flex-1">
                    <p className="text-md line-clamp-2 font-medium text-black opacity-80">
                        Tuyển tập đề thi thử tốt nghiệp THPT Vật lý
                    </p>
                    <div className="mt-1.5 hidden items-center gap-1 text-gray-500 lg:flex">
                        <Files />
                        <p className="text-sm">Đang có {formatter.number(500)} tài liệu</p>
                    </div>
                </div>
            </div>
            <div className="mt-3.5 hidden lg:block">
                <div className="flex items-center gap-3">
                    <TagBadge>Lớp 12</TagBadge>
                </div>
            </div>
        </Link>
    );
};

export default DocumentCategoryCard;
