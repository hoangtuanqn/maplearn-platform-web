import Teachers from "./Teachers";
import Banner from "./Banner";
import Courses from "./Courses";
import HomeTab from "./HomeTab";
const Home = () => {
    return (
        <div className="w-[50%] pt-5">
            {/* Home Tab */}
            <HomeTab />

            {/* Banner */}
            <Banner />

            {/* Giáo viên */}
            <Teachers />

            {/* Danh sách các khóa học */}
            <Courses />
        </div>
    );
};

export default Home;
