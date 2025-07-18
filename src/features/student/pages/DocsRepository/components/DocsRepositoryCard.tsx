import ExamItem from "./ExamItem";
import EyeIcon from "../../../components/icons/EyeIcon";
import DownloadIcon from "../../../components/icons/DownloadIcon";
import { Link } from "react-router-dom";

interface Exam {
    title: string;
    link: string;
}

interface DocsRepositoryCardProps {
    title: string;
    views: number;
    downloads: number;
    grade: string;
    exams: Exam[];
}

const DocsRepositoryCard = ({ title, views, downloads, grade, exams }: DocsRepositoryCardProps) => {
    return (
        <div className="flex flex-col rounded-lg bg-[#EFF0F1]">
            <Link className="cursor-pointer p-3.5" to={exams[0]?.link}>
                <div className="flex items-center gap-4">
                    <img src="/src/imgs/File-icon.png" alt="Icon" className="h-16 w-16 object-contain" />
                    <div className="flex h-20 flex-1 flex-col justify-center">
                        <p className="text-md line-clamp-2 font-medium text-[#373737]">{title}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <EyeIcon className="size-5" />
                                <p className="text-[#656C7B]">{views}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <DownloadIcon className="size-5" />
                                <p className="text-[#656C7B]">{downloads}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3.5">
                    <div className="flex items-center gap-3">
                        <div className="t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white">
                            {grade}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="my-1 h-[1px] w-full bg-[#DBDDE0]"></div>
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
