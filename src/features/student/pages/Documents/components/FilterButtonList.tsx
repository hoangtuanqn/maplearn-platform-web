import GraduationIcon from "~/features/student/components/icons/GraduationIcon";

interface FilterButtonListProps {
    filters: string[];
    onFilterClick?: (filter: string) => void;
}

const FilterButtonList = ({ filters, onFilterClick }: FilterButtonListProps) => {
    return (
        <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className="relative flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-base font-medium text-gray-500"
                    onClick={() => onFilterClick?.(filter)}
                >
                    <GraduationIcon />
                    <p className="text-base font-medium">{filter}</p>
                </button>
            ))}
        </div>
    );
};

export default FilterButtonList;
