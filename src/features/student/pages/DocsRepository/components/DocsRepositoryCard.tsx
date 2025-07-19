import ExamItem from "./ExamItem";
import { Link } from "react-router-dom";
import { formatter } from "~/utils/format";
import { Eye, Files } from "lucide-react";
import TagBadge from "~/features/student/components/TagBadge";

interface Exam {
    title: string;
    link: string;
}

interface DocsRepositoryCardProps {
    title: string;
    views: number;
    grade: string;
    exams: Exam[];
}

const DocsRepositoryCard = ({ title, views, grade, exams }: DocsRepositoryCardProps) => {
    return (
        <div className="flex flex-col rounded-lg bg-gray-100">
            <Link className="cursor-pointer p-3.5" to={exams[0]?.link}>
                <div className="flex items-center gap-4">
                    <img src="/assets/icons/file.svg" alt="Icon" className="h-16 w-16 object-contain" />
                    <div className="flex h-20 flex-1 flex-col justify-center">
                        <p className="text-md line-clamp-2 font-medium text-black opacity-80">{title}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Eye className="opacity-60"/>
                                <p className="text-gray-500">{formatter.number(views)}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Files className="opacity-60"/>
                                <p className="text-gray-500">{formatter.number(2000)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3.5">
                    <div className="flex items-center gap-3">
                        <TagBadge>{grade}</TagBadge>
                    </div>
                </div>
            </Link>
            <div className="my-1 h-[1px] w-full bg-gray-200"></div>
            <div className="flex-1 p-3.5">
                <div className="flex flex-col gap-2.5">
                    {exams.map((exam, i) => (
                        <ExamItem key={i} title={exam.title} link={exam.link} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocsRepositoryCard;
