import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExamItemProps {
    title: string;
    link: string;
}

const ExamItem = ({ title, link }: ExamItemProps) => {
    return (
        <Link className="flex cursor-pointer items-center gap-2.5" to={link}>
            <ChevronRight className="size-5 opacity-60"/>
            <p className="line-clamp-1 flex-1 font-sans text-gray-600">{title}</p>
        </Link>
    );
};

export default ExamItem;
