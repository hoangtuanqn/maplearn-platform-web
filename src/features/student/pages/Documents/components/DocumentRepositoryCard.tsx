import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";
import DocumentCategoryCard from "./DocumentCategoryCard";

const DocumentRepositoryCard = () => {
    return (
        <div className="relative h-full">
            <div className="w-full" style={{ height: "0px" }}></div>
            <div className="sticky w-full" style={{ top: 74 }}>
                <div className="flex items-center justify-between">
                    <p className="text-primary text-base font-medium">Kho tài liệu</p>
                    <Link to={ROUTE_PATHS.docsRepository}>
                        <p className="text-primary cursor-pointer">Xem tất cả &gt;&gt;&gt;</p>
                    </Link>
                </div>
                <div className="mt-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <DocumentCategoryCard />
                    <DocumentCategoryCard />
                    <DocumentCategoryCard />
                    <DocumentCategoryCard />
                </div>
            </div>
        </div>
    );
};

export default DocumentRepositoryCard;
