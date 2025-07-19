interface SubjectTabListProps {
    subjects: string[];
    selectedIndex: number;
    onTabClick?: (index: number) => void;
}

const SubjectTabList = ({ subjects, selectedIndex, onTabClick }: SubjectTabListProps) => {
    return (
        <div className="relative flex w-full items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {subjects.map((subject, idx) => (
                <button
                    key={subject}
                    className={`relative cursor-pointer border-b-[1px] border-gray-300 px-5 py-3 ${selectedIndex === idx ? "" : ""}`}
                    onClick={() => onTabClick?.(idx)}
                >
                    {selectedIndex === idx ? (
                        <div
                            className="bg-primary absolute bottom-0 left-0 h-[2px] w-full rounded-full"
                            style={{ opacity: 1 }}
                        ></div>
                    ) : null}
                    <p className={`text-md font-medium ${selectedIndex === idx ? "text-primary" : "text-gray-400"}`}>
                        {subject}
                    </p>
                </button>
            ))}
        </div>
    );
};

export default SubjectTabList;
