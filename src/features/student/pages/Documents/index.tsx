import { useState } from "react";
import { useDocumentsQuery, DocumentListResponse } from "./documentsApi";
import DocumentsList from "./components/DocumentsList";
import FilterButtonList from "./components/FilterButtonList";
import SubjectTabList from "./components/SubjectTabList";
import DocumentRepositoryCard from "./components/DocumentRepositoryCard";
import DocumentSearchBar from "./components/DocumentSearchBar";
import LibraryIcon from "../../components/icons/LibraryIcon";

const Documents = () => {
    const [page, setPage] = useState(1);
    const limit = 4;
    const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
    const {
        data: documents,
        isLoading,
        isError,
        error,
    } = useDocumentsQuery(page, limit) as {
        data: DocumentListResponse | undefined;
        isLoading: boolean;
        isError: boolean;
        error: unknown;
    };

    return (
        <div className="px-4 md:px-8 lg:px-0">
            <div className="mt-2.5 mb-4 hidden h-10 flex-nowrap items-center gap-3 text-slate-500">
                <a className="t1-flex-center cursor-pointer rounded-full duration-150 hover:bg-[#e9e9e9]" href="/">
                    <LibraryIcon />
                </a>
                <div className="text-lg">&gt;</div>
                <span className="cursor-default truncate font-medium" style={{ color: "var(--primary)" }}>
                    Tài liệu
                </span>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-6 px-4 lg:grid lg:grid-cols-3">
                <div className="md:col-span-2">
                    <p className="text-2xl font-medium text-[#0A4875]">Thư viện tài liệu</p>
                    <div className="mt-4">
                        <div>
                            <FilterButtonList filters={["ĐGTD", "DGNL", "Lớp 12", "Lớp 11", "Lớp 10", "Lớp 9"]} />
                            <div className="mt-3.5 flex justify-between">
                                <div
                                    className="relative flex w-full items-center overflow-x-auto"
                                    style={{ scrollbarWidth: "none" }}
                                >
                                    <SubjectTabList
                                        subjects={["Tất cả", "Toán", "Lý", "Sinh", "Anh", "Hoá", "Văn"]}
                                        selectedIndex={selectedSubjectIndex}
                                        onTabClick={setSelectedSubjectIndex}
                                    />
                                </div>
                                <DocumentSearchBar />
                            </div>
                        </div>
                    </div>
                    <DocumentsList
                        documents={documents}
                        isLoading={isLoading}
                        isError={isError}
                        error={error}
                        page={page}
                        setPage={setPage}
                    />
                </div>
                <div className="md:col-span-1">
                    <DocumentRepositoryCard />
                </div>
            </div>
        </div>
    );
};
export default Documents;
