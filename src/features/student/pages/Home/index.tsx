// import CourseActive from "../../components/SidebarRight/CourseActive";
import ExamCountdown from "../../components/SidebarRight/ExamCountdown";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import Teachers from "./Teachers";
import Banner from "./Banner";
import Courses from "./Courses";
import HomeTab from "./HomeTab";
import useDocumentTitle from "~/hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle("");
    return (
        <>
            <section className="flex gap-2">
                <SidebarLeft />
                <div className="mx-auto w-[100%] sm:m-0 sm:mr-auto md:w-[80%] lg:mx-auto lg:w-[85%] xl:w-[70%] 2xl:w-[52%]">
                    {/* Home Tab */}
                    <HomeTab />
                    <div className="max-md:bg-white max-md:p-4">
                        {/* Banner */}
                        <Banner />
                        {/* <CourseActive className="xl:hidden" /> */}
                        <ExamCountdown className="max-2xl:mt-4 2xl:hidden" />
                    </div>

                    {/* Giáo viên */}
                    <Teachers />

                    {/* Danh sách các khóa học */}
                    <Courses />
                </div>

                <SidebarRight />
            </section>
        </>
    );
};

export default Home;
