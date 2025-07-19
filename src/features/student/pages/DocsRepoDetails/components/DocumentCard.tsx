import { Link } from "react-router-dom";

import TagBadge from "../../../components/TagBadge";
import { TagType } from "~/features/student/types/document.type";
import { formatter } from "~/utils/format";
import { Clock4, Eye } from "lucide-react";
type DocumentCardProps = {
    title: string;
    tags: TagType[];
    views: number;
    created_at: string;
    link: string;
    image: string;
};

const DocumentCard = ({ title, tags, views, created_at, link, image }: DocumentCardProps) => {
    return (
        <Link className="flex gap-4 rounded-lg bg-gray-100 py-3.5 pr-4 pl-2.5" to={link}>
            <div className="t1-flex-center relative aspect-[72/94] w-20">
                <img src={image} alt="PDF Icon" className="h-20 w-16 object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className="line-clamp-2 font-medium text-black ">{title}</p>
                    <div
                        className="mt-1 mb-4 flex w-full flex-wrap items-center gap-x-1 gap-y-2 overflow-x-auto"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {tags.map(({ id, name }) => (
                            <>
                                <TagBadge key={id + name}>{name}</TagBadge>
                            </>
                        ))}
                    </div>
                </div>
                <div className="border-t-[1px] border-gray-100 pt-2.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Eye className="opacity-70"/>
                            <p className="text-gray-500">{formatter.number(views)}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock4 className="opacity-70"/>
                            <p className="text-gray-500">{formatter.date(new Date(created_at))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DocumentCard;
