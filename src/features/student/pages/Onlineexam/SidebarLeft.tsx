import { Search, ChevronRight, LayoutGrid } from "lucide-react";
import GraduationIcon from "../../components/icons/GraduationIcon";

const subjects = ["Toán", "Lý", "Sinh", "Anh", "Hoá", "Văn"];
const categories = [
    "ĐGNL HSA",
    "ĐGNL V-ACT",
    "ĐGTD TSA",
    "Tốt nghiệp THPT",
    "Thi cuối kì 1",
    "Thi cuối kì 2",
    "Thi giữa kì 1",
    "Thi giữa kì 2",
];

export default function FilterPanel() {
    return (
        <div className="relative w-96 rounded-lg bg-white p-6 shadow-sm">
            {/* Search bar */}
            <div className="flex h-12 w-full items-center rounded-lg bg-gray-200 px-5">
                <input
                    type="text"
                    placeholder="Tìm kiếm đề thi"
                    className="flex-grow bg-gray-200 placeholder-gray-400 outline-none"
                />
                <button className="ml-4 shrink-0 text-gray-600 hover:text-gray-800">
                    <Search size={26} />
                </button>
            </div>

            {/* Title Bộ lọc */}
            <h2 className="text-primary-typo mt-8 text-xl font-bold">Bộ lọc</h2>

            {/* Subject Filter */}
            <section className="border-t border-gray-300 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-primary-typo text-md flex items-center gap-2 font-bold">
                        <GraduationIcon />
                        Môn học
                    </div>
                    <ChevronRight size={20} className="rotate-90 stroke-gray-600" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {subjects.map((subj) => (
                        <button
                            key={subj}
                            className="rounded-lg bg-gray-200 px-4 py-1.5 text-gray-700 transition duration-150 ease-out hover:bg-gray-300"
                        >
                            {subj}
                        </button>
                    ))}
                </div>
            </section>

            {/* Category Filter */}
            <section className="border-t border-gray-300 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-primary-typo text-md flex items-center gap-2 font-bold">
                        <LayoutGrid size={20} stroke="#525960" />
                        Phân loại
                    </div>
                    <ChevronRight size={20} className="rotate-90 stroke-gray-600" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className="rounded-lg bg-gray-200 px-4 py-1.5 text-gray-700 transition duration-150 ease-out hover:bg-gray-300"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
