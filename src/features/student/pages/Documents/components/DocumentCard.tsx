import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";
import { DocumentType } from "../documentsApi";

import { formatter } from "~/utils/format";
import TagBadge from "~/features/student/components/TagBadge";
import { Clock4, Eye } from "lucide-react";

type DocumentCardProps = {
    doc: DocumentType;
};

const DocumentCard = ({ doc }: DocumentCardProps) => {
    return (
        <Link className="flex gap-4 rounded-lg bg-[#EFF0F1] py-3.5 pr-4 pl-2.5" to={ROUTE_PATHS.docsDetails}>
            <div className="flex h-26 w-22 items-center justify-center">
                <img src="/assets/icons/pdf.svg" alt="PDF Icon" className="h-20 w-16 object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className="line-clamp-2 font-medium text-[#373737]">{doc.title}</p>
                    <div
                        className="mt-1 mb-4 flex w-full items-center gap-1.5 overflow-x-auto"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {doc.tags.map(({ id, name }) => (
                            <TagBadge key={id + name}>{name}</TagBadge>
                        ))}
                    </div>
                </div>
                <div className="border-t-[1px] border-t-[#E3E3E3] pt-2.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Eye />
                            <p className="text-[#656C7B]">{doc.views}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock4 />
                            <p className="text-[#656C7B]">{formatter.date(new Date(doc.created_at))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DocumentCard;
