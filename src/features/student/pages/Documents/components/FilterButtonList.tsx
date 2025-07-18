interface FilterButtonListProps {
    filters: string[];
    onFilterClick?: (filter: string) => void;
}

const FilterButtonList = ({ filters, onFilterClick }: FilterButtonListProps) => {
    return (
        <div className="flex items-center gap-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className="relative flex h-10 min-w-16 items-center justify-center gap-2 rounded-lg bg-[#F0F3F7] text-base font-medium text-[#656C7B]"
                    onClick={() => onFilterClick?.(filter)}
                >
                    <p className="text-base font-medium">{filter}</p>
                </button>
            ))}
        </div>
    );
};

export default FilterButtonList;
