import { TrendingUp } from "lucide-react";
interface HeaderSectionType {
    title: string;
    url?: string;
}
const HeaderSection = ({ title, url = "#" }: HeaderSectionType) => {
    return (
        <div className="t1-flex-center justify-between">
            <h3 className="block-heading">{title}</h3>
            <a href={url} className="t1-flex-center justify-between gap-1 text-gray-500 italic">
                <span>Xem tất cả</span>
                <TrendingUp />
            </a>
        </div>
    );
};

export default HeaderSection;
