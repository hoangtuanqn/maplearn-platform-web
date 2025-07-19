import SearchIcon from "../../../components/icons/SearchIcon";

const DocumentSearchBar = () => {
    return (
        <label className="relative hidden w-72 items-center rounded-lg bg-[#F0F3F7] px-2 py-3 xl:flex">
            <input
                className="text-primary w-full bg-transparent outline-none placeholder:text-[#AFC0CD]"
                placeholder="Tìm kiếm"
            />
            <button type="button" className="ml-2 cursor-pointer">
                <SearchIcon className="size-4.5" />
            </button>
        </label>
    );
};

export default DocumentSearchBar;
