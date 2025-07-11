import ProfileContentLayout from "../layout/ProfileContentLayout";

const savedCourses = [
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ HÓA HỌC 12",
        slug: "cay-li-thuyet-360-do---hoa-hoc-12",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/course/4kw4b1z028im/cay-li-thuyet-360-do-hoa-hoc-lop-12-1744535529719.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---hoa-hoc-12",
    },
    {
        title: "CÀY LÍ THUYẾT 360 ĐỘ - VẬT LÍ 12",
        slug: "cay-li-thuyet-360-do---vat-li-12",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/course/2o7q0yd00ifw/cay-li-thuyet-360-vat-li-lop-12-1740382852693.png",
        url: "/khoa-hoc/cay-li-thuyet-360-do---vat-li-12",
    },
    {
        title: "2K9 XUẤT PHÁT SỚM MÔN VẬT LÝ - LỚP 11",
        slug: "2k9-xuat-phat-som-mon-vat-ly---lop-11",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/course/3od8kft00rtd/2k9-xuat-phat-som-mon-vat-ly---lop-11-1751535797754.png",
        url: "/khoa-hoc/2k9-xuat-phat-som-mon-vat-ly---lop-11",
    },
    {
        title: "TỔNG ÔN TOÀN DIỆN 360 ĐỘ - TOÁN 12",
        slug: "tong-on-toan-dien-360-do---toan-12",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/course/5g5keb800q23/tong-on-toan-dien-360-do-mon-toan---lop-12-1746425848436.png",
        url: "/khoa-hoc/tong-on-toan-dien-360-do---toan-12",
    },
    {
        title: "LẬP TRÌNH TƯ DUY TỪ TRƯỜNG VÀ HẠT NHÂN",
        slug: "lap-trinh-tu-duy-tu-truong-va-hat-nhan",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/course/wohur3e041cp/lap-trinh-tu-duy-tu-truong-va-hat-nhan-1727339175338.jpg",
        url: "/khoa-hoc/lap-trinh-tu-duy-tu-truong-va-hat-nhan",
    },
];

const SavedCourse = () => {
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Khoá học đã lưu">
                {savedCourses.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <img alt="" className="h-35" src="/assets/images/common/study.png" />
                        <span className="mt-8 text-center text-lg font-semibold text-[#295779]">
                            Bạn chưa lưu khoá học nào
                        </span>
                    </div>
                ) : (
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                        {savedCourses.map((course) => (
                            <a className="text-secondary-typo" href={course.url} key={course.slug}>
                                <div>
                                    <img
                                        alt={course.title}
                                        className="aspect-square w-full rounded-xl object-cover"
                                        src={course.image}
                                    />
                                </div>
                                <div className="mt-2.5 flex flex-col">
                                    <div className="flex items-center">
                                        <span className="text-md line-clamp-2 block w-full font-medium">
                                            {course.title}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </ProfileContentLayout>
        </section>
    );
};

export default SavedCourse;
