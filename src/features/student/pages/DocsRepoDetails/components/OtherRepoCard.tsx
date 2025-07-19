import { Link } from "react-router-dom";
import TagBadge from "../../../components/TagBadge";
import { TagType } from "~/features/student/types/document.type";
import { Files } from "lucide-react";

export type OtherRepoCardProps = {
    title: string;
    tags: TagType[];
    link: string;
    image: string;
    downloadCount?: number;
    downloadStatus?: string;
};

const OtherRepoCard = ({ title, tags, link, image }: OtherRepoCardProps) => (
    <Link className="rounded-lg bg-[#EFF0F1] p-3.5" to={link}>
        <div className="flex items-center gap-4">
            <img src={image} alt="Icon" className="h-16 w-16 object-contain" />
            <div className="flex-1">
                <p className="text-md line-clamp-2 font-medium text-[#373737]">{title}</p>
                <div className="flex items-center gap-1">
                    <Files className="size-4.5" />
                    <p className="text-[#656C7B]">500 tài liệu đang có</p>
                </div>
            </div>
        </div>
        <div className="mt-3.5">
            <div className="flex items-center gap-3">
                {tags.map(({ id, name }) => (
                    <TagBadge key={id + name}>{name}</TagBadge>
                ))}
            </div>
        </div>
    </Link>
);

export default OtherRepoCard;
