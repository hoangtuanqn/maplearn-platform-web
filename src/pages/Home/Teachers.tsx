// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "./HeaderSection";
const teachers = [
    {
        name: "Thầy Vũ Ngọc Anh",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/64b229b5d0a652b97e5ab22d/thay-vu-ngoc-anh-1719903957239.png",
        href: "#",
    },
    {
        name: "Thầy Nguyễn Anh Phong",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/ssje00d001mj/thay-phong-1719904088246.png",
        href: "#",
    },
    {
        name: "Thầy Nguyễn Chí Nhân",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/64b22c56d0a652b97e5ab25a/thay-nguyen-chi-nhan-1719904691156.png",
        href: "#",
    },
    {
        name: "Thầy Lam Trường",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/64b22ae2d0a652b97e5ab23f/thay-pham-ngoc-lam-truong-1719904662328.png",
        href: "#",
    },
    {
        name: "Thầy Thành Nam",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/yfmex9703azb/nguyen-thanh-nam-1731156203997.png",
        href: "#",
    },
    {
        name: "Thầy Nguyễn Phụ Hoàng Lân",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/ssjd7mc001j2/thay-lan-1719904579214.png",
        href: "#",
    },
    {
        name: "Thầy Đinh Hoàng Tùng",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/ssjep5c001pi/thay-tung-1719904541522.png",
        href: "#",
    },
    {
        name: "Cô Nguyễn Thị Thanh Thủy",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/teacher/ssjc7vu001gz/co-thuy---gv-mon-ngu-van-1719904650486.png",
        href: "#",
    },
];
const Teachers = () => {
    return (
        <div className="mt-3.5 bg-white px-4 py-6 shadow-sm md:rounded-xl xl:mt-6">
            <HeaderSection title="Giáo viên MapLearn" />
            <div className="overflow-hidden rounded-xl py-4">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.2,
                        },
                        640: {
                            slidesPerView: 4.1,
                        },
                        1024: {
                            slidesPerView: 5.7,
                        },
                        1280: {
                            slidesPerView: 6.1,
                        },
                        1536: {
                            slidesPerView: 5.5,
                        },
                    }}
                >
                    {teachers.map(({ name, image, href = "#" }) => (
                        <SwiperSlide>
                            <a
                                href={href}
                                key={name + image}
                                className="relative block h-45 w-32 shrink-0 overflow-hidden rounded-xl"
                            >
                                <img src={image} alt={name} className="aspect-[11/16] h-full w-full object-cover" />
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-30% to-transparent to-40%"></div>
                                <span className="absolute bottom-3 w-full px-2 text-center text-xs font-medium text-white">
                                    {name}
                                </span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Teachers;
