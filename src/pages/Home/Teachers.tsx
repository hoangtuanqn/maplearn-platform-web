import HeaderSection from "./HeaderSection";
const Teachers = () => {
    //mt-6 rounded-xl
    return (
        <div className="mt-3.5 bg-white px-4 py-6 shadow-sm md:rounded-xl xl:mt-6">
            <HeaderSection title="Giáo viên MapLearn" />
            <div className="scrollbar flex gap-4 py-4">
                {[...Array(8)].map(() => (
                    <a href="#" className="relative block h-45 w-32 shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="https://mapstudy.sgp1.digitaloceanspaces.com/teacher/64b229b5d0a652b97e5ab22d/thay-vu-ngoc-anh-1719903957239.png"
                            alt="Thầy VNA"
                            className="aspect-[11/16] h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-30% to-transparent to-40%"></div>
                        <span className="absolute bottom-3 w-full px-2 text-center text-xs font-medium text-white">
                            Thầy Vũ Ngọc Anh
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
