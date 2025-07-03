import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Banner có thể bấm vô được hay không
const bannerImages = [
    {
        url: "",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/ui/slider/2k8-xps-1747810214128.jpg",
    },
    {
        url: "https://www.facebook.com/phamhoangtuanqn/",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/ui/slider/map-book-1736140098369.jpg",
    },
];
const Banner = () => {
    return (
        <div className="mt-4 overflow-hidden rounded-xl xl:mt-6">
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000, // 3 giây
                    disableOnInteraction: false, // Không dừng khi người dùng vuốt slide
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
            >
                {bannerImages.map(({ url, image }) => (
                    <SwiperSlide key={image + url}>
                        <a
                            href={url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (!url) e.preventDefault();
                            }}
                        >
                            <img
                                src={image}
                                alt="Banner"
                                className="h-[180px] w-full cursor-pointer rounded-xl object-cover sm:h-[200px] md:h-[225px] lg:h-[250px] xl:h-[280px] 2xl:h-[300px]"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
