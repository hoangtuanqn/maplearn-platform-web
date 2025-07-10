import ListExam from "./ListExam";
import FilterPanel from "./SidebarLeft";
const ExamOnline = () => {
    return (
        
            <div className="flex gap-6">
                <FilterPanel />
                <div className="w-full">
                    <ListExam />
                </div>
            </div>
        
    );
};
export default ExamOnline;
