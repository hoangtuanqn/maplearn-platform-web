import HeaderSection from "./HeaderSection";
import DisplayCourse from "../../components/Courses/DisplayCourse";

const Courses = () => {
    const course = {
        title: "KHOÁ I - CHUYÊN ĐỀ CƠ BẢN MÔN VẬT LÝ NĂM 2026",
        teacher: "Thầy Phạm Hoàng Tuấn",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/yl5iqo800qho/khoa-i---chuyen-de-co-ban-mon-vat-ly-nam-2026-1731491263660.jpg",
        url: "/khoa-hoc/lap-trinh-tu-duy-tu-truong-va-hat-nhan",
    };
    return (
        <>
            {[...Array(5)].map(() => (
                <div className="mt-3.5 bg-white px-4 py-6 shadow-sm md:rounded-xl xl:mt-6">
                    <HeaderSection title="Khóa học HOT" />
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 xl:grid-cols-4">
                        {[...Array(5)].map(() => (
                            <DisplayCourse
                                key={course.title + course.teacher + course.thumbnail}
                                thumbnail={course.thumbnail}
                                title={course.title}
                                teacher={course.teacher}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Courses;
