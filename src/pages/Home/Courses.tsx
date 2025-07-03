import { User } from "lucide-react";
import HeaderSection from "./HeaderSection";

const Courses = () => {
    return (
        <>
            {[...Array(5)].map(() => (
                <div className="mt-6 rounded-xl bg-white px-4 py-6 shadow-sm">
                    <HeaderSection title="Khóa học HOT" />
                    <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-6">
                        {[...Array(5)].map(() => (
                            <a href="#" className="text-secondary-typo block h-full w-full rounded-xl">
                                <img
                                    src="https://mapstudy.sgp1.digitaloceanspaces.com/course/yl5iqo800qho/khoa-i---chuyen-de-co-ban-mon-vat-ly-nam-2026-1731491263660.jpg"
                                    alt="Thầy VNA"
                                    className="aspect-square w-full rounded-xl object-cover"
                                />
                                <span className="text-md mt-4 line-clamp-2 w-full font-medium">
                                    KHOÁ I - CHUYÊN ĐỀ CƠ BẢN MÔN VẬT LÝ NĂM 2026
                                </span>
                                <div className="mt-1 flex items-center gap-1 text-xs font-medium">
                                    <User style={{ fill: "currentColor" }} />
                                    <span className="line-clamp-2">Thầy Phạm Hoàng Tuấn</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Courses;
