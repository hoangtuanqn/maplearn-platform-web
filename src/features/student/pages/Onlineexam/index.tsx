import ListExam from "./ListExam";
import FilterPanel from "./SidebarLeft";
const ExamOnline = () => {
    return (
        <section className="flex min-h-screen gap-6 px-6">
            <FilterPanel />
            <div className="w-full">
                <ListExam />
            </div>
        </section>
    );
};
export default ExamOnline;
