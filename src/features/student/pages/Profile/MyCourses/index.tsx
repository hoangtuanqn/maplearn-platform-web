import DisplayCourse from "~/features/student/components/Courses/DisplayCourse";
import ProfileContentLayout from "../layout/ProfileContentLayout";
import DisplatNoData from "~/features/student/components/Courses/DisplatNoData";

const myCourses = [
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ HÓA HỌC 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/4kw4b1z028im/cay-li-thuyet-360-do-hoa-hoc-lop-12-1744535529719.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---hoa-hoc-12",
    },
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ VẬT LÍ 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/2o7q0yd00ifw/cay-li-thuyet-360-vat-li-lop-12-1740382852693.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---vat-li-12",
    },
    {
        title: "2K9 XUẤT PHÁT SỚM MÔN VẬT LÝ - LỚP 11",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/3od8kft00rtd/2k9-xuat-phat-som-mon-vat-ly---lop-11-1751535797754.png",
        url: "/khoa-hoc/2k9-xuat-phat-som-mon-vat-ly---lop-11",
    },
    {
        title: "TỔNG ÔN TOÀN DIỆN 360 ĐỘ - TOÁN 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/5g5keb800q23/tong-on-toan-dien-360-do-mon-toan---lop-12-1746425848436.png",
        url: "/khoa-hoc/tong-on-toan-dien-360-do---toan-12",
    },
    {
        title: "TỔNG ÔN TOÀN DIỆN 360 ĐỘ - TOÁN 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/5g5keb800q23/tong-on-toan-dien-360-do-mon-toan---lop-12-1746425848436.png",
        url: "/khoa-hoc/tong-on-toan-dien-360-do---toan-12",
    },
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ HÓA HỌC 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/4kw4b1z028im/cay-li-thuyet-360-do-hoa-hoc-lop-12-1744535529719.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---hoa-hoc-12",
    },
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ VẬT LÍ 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/2o7q0yd00ifw/cay-li-thuyet-360-vat-li-lop-12-1740382852693.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---vat-li-12",
    },
    {
        title: "2K9 XUẤT PHÁT SỚM MÔN VẬT LÝ - LỚP 11",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/3od8kft00rtd/2k9-xuat-phat-som-mon-vat-ly---lop-11-1751535797754.png",
        url: "/khoa-hoc/2k9-xuat-phat-som-mon-vat-ly---lop-11",
    },
    {
        title: "TỔNG ÔN TOÀN DIỆN 360 ĐỘ - TOÁN 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/5g5keb800q23/tong-on-toan-dien-360-do-mon-toan---lop-12-1746425848436.png",
        url: "/khoa-hoc/tong-on-toan-dien-360-do---toan-12",
    },
    {
        title: "TỔNG ÔN TOÀN DIỆN 360 ĐỘ - TOÁN 12",
        teacher: "Thầy Vũ Ngọc Anh",
        thumbnail:
            "https://mapstudy.sgp1.digitaloceanspaces.com/course/5g5keb800q23/tong-on-toan-dien-360-do-mon-toan---lop-12-1746425848436.png",
        url: "/khoa-hoc/tong-on-toan-dien-360-do---toan-12",
    },
];

const MyCourses = () => {
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Khoá học của tôi">
                {myCourses.length === 0 ? (
                    <DisplatNoData title="Bạn chưa đăng ký khóa học nào" />
                ) : (
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                        {myCourses.map((course) => (
                            <DisplayCourse
                                key={course.title + course.teacher + course.thumbnail}
                                thumbnail={course.thumbnail}
                                title={course.title}
                                teacher={course.teacher}
                            />
                        ))}
                    </div>
                )}
            </ProfileContentLayout>
        </section>
    );
};

export default MyCourses;
