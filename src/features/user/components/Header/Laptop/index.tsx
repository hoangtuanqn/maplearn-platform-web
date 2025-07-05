import { KeyRound } from "lucide-react";
import HeaderLink from "./HeaderLink";
import HomeIcon from "../../icons/HomeIcon";
import GraduationIcon from "../../icons/GraduationIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import NewsIcon from "../../icons/NewsIcon";
import EntertainmentIcon from "../../icons/EntertainmentIcon";
import { ROUTE_PATHS } from "~/router/routePaths";
import { Link } from "react-router-dom";
const headerLinks = [
    {
        label: "Trang chủ",
        icon: HomeIcon,
        href: "/",
        isActive: true,
    },
    {
        label: "Khóa học",
        icon: GraduationIcon,
        href: "/khoa-hoc",
    },
    {
        label: "Thi thử",
        icon: DocumentIcon,
        href: "/thi-online",
        isActive: false,
    },
    {
        label: "Tin tức",
        icon: NewsIcon,
        href: "/tin-tuc",
        isActive: false,
    },
    {
        label: "Tài liệu",
        icon: EntertainmentIcon,
        href: "/tai-lieu",
        isActive: false,
    },
];
const HeaderLaptop = () => {
    return (
        <header className="relative z-30 hidden w-full md:block">
            <div
                className="padding-scrollbar fixed top-0 flex w-full items-center backdrop-blur-md"
                style={{
                    color: "var(--primary)",
                    height: "56px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    // "--scrollbar-w": "15px",
                }}
            >
                <div className="max-w-8xl mx-auto w-full items-center px-4">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center max-xl:hidden">
                            <div className="tab:pr-4">
                                <a className="cursor-pointer" href="/">
                                    <span className="sr-only">MapLearn</span>
                                    <img
                                        className="h-10 rounded-xl object-contain"
                                        alt=""
                                        src="/assets/images/logo/logo-64.png"
                                    />
                                </a>
                            </div>
                            <div>
                                {/* <div className="block w-[calc(100%-1.25rem)] pr-4 text-base"></div> */}
                                <button className="flex w-48 cursor-pointer items-center justify-between">
                                    <div className="pr-4 text-base">
                                        {/* <p className="line-clamp-1 w-full text-start text-[#a3b6c6]">Tìm kiếm</p> */}
                                    </div>
                                    {/* <Search /> */}
                                </button>
                            </div>
                        </div>
                        <div className="flex shrink-1 justify-center">
                            <div className="relative flex items-center">
                                <div className="relative">
                                    <div data-el="portal-host" id="navigation" className="relative">
                                        <div className="mx-auto flex items-center">
                                            {headerLinks.map((link) => (
                                                <HeaderLink {...link} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-6">
                            <a
                                className="text-secondary-typo max-lap:hidden flex items-center gap-3 whitespace-nowrap hover:text-gray-900"
                                href="/kich-hoat-the"
                            >
                                <KeyRound />
                                <span>Kích hoạt thẻ</span>
                            </a>
                            <div className="bg-secondary-typo max-lap:hidden h-6 w-0.5"></div>
                            <a className="text-secondary-typo whitespace-nowrap hover:text-gray-900" href="/dang-ky">
                                <span>Đăng ký</span>
                            </a>
                            <Link
                                className="bg-primary hover:bg-primary-light t1-flex-center rounded-xl border-2 border-transparent px-5 py-1.5 whitespace-nowrap text-white shadow-sm duration-150 ease-out"
                                to={ROUTE_PATHS.login}
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </header>
    );
};

export default HeaderLaptop;
