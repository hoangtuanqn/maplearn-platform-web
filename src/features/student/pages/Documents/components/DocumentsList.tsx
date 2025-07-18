import DocumentCard from "./DocumentCard";
import { DocumentType, DocumentListResponse } from "../documentsApi";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";

type DocumentsListProps = {
    documents?: DocumentListResponse;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    page: number;
    setPage: (p: number) => void;
};

const DocumentsList = ({ documents, isLoading, isError, error, page, setPage }: DocumentsListProps) => {
    return (
        <div>
            <div className="mt-6 grid grid-cols-1 gap-3.5 xl:grid-cols-2">
                {isLoading && <div>Đang tải tài liệu...</div>}
                {isError && (
                    <div className="text-red-500">
                        Lỗi tải tài liệu: {error instanceof Error ? error.message : "Unknown error"}
                    </div>
                )}
                {documents && documents.data.length === 0 && <div>Không có tài liệu nào.</div>}
                {documents &&
                    Array.isArray(documents.data) &&
                    documents.data.map((doc: DocumentType) => <DocumentCard key={doc.id} doc={doc} />)}
            </div>
            <div className="t1-flex-center mt-6">
                <nav
                    className="relative z-0 flex flex-wrap justify-center -space-x-px rounded-md"
                    aria-label="Pagination"
                >
                    <div className="t1-flex-center flex gap-1.5">
                        <button
                            className={`t1-flex-center flex size-9 cursor-pointer rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${page === 1 ? "pointer-events-none opacity-25" : ""}`}
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            aria-label="Trang trước"
                        >
                            <ArrowRightIcon className="size-5 rotate-180" />
                        </button>
                        {documents &&
                            documents.last_page &&
                            Array.from({ length: documents.last_page }, (_, i) => i + 1).map((p) => (
                                <button
                                    key={p}
                                    className={`t1-flex-center text-md relative h-9 w-9 cursor-pointer rounded-md border duration-100 ${p === page ? "pointer-events-none border-[#128ce9] bg-white font-medium text-[#128ce9]" : "border-transparent text-[#333333] hover:bg-[#eeeeee] active:bg-[#e0e0e0]"}`}
                                    onClick={() => setPage(p)}
                                    disabled={p === page}
                                >
                                    {p}
                                </button>
                            ))}
                        <button
                            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${documents && page === documents.last_page ? "pointer-events-none opacity-25" : ""}`}
                            onClick={() => setPage(page + 1)}
                            disabled={documents && page === documents.last_page}
                            aria-label="Trang sau"
                        >
                            <ArrowRightIcon className="size-5" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default DocumentsList;
