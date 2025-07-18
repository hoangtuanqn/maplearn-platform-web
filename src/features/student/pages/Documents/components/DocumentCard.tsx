import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";
import { DocumentType } from "../documentsApi";
import EyeIcon from "../../../components/icons/EyeIcon";
import ClockIcon from "../../../components/icons/ClockIcon";

type DocumentCardProps = {
    doc: DocumentType;
};

const DocumentCard = ({ doc }: DocumentCardProps) => {
    return (
        <Link className="flex gap-4 rounded-lg bg-[#EFF0F1] py-3.5 pr-4 pl-2.5" to={ROUTE_PATHS.docsDetails}>
            <div className="flex h-26 w-22 items-center justify-center">
                <img src="/src/imgs/Pdf-icon.png" alt="PDF Icon" className="h-20 w-16 object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className="line-clamp-2 font-medium text-[#373737]">{doc.title}</p>
                    <div className="flex w-full items-center gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                        {doc.tags?.map((tag: { id: number; name: string }) => (
                            <div
                                key={tag.id}
                                className="t1-flex-center bg-primary min-w-max rounded-lg px-2 py-0.5 text-xs text-white"
                            >
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t-[1px] border-t-[#E3E3E3] pt-2.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <EyeIcon className="size-4.5" />
                            <p className="text-[#656C7B]">{doc.views}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <ClockIcon className="size-4.5" />
                            <p className="text-[#656C7B]">{new Date(doc.created_at).toLocaleDateString("vi-VN")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DocumentCard;
