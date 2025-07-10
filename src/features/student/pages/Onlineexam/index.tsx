import Listexam from "./dethi";
import FilterPanel from "./SidebarLeft";
const Examonline = () => {
    return (
        
            <div className="flex gap-6">
                <FilterPanel />
                <div className="w-full">
                    <Listexam />
                </div>
            </div>
        
    );
};
export default Examonline;
