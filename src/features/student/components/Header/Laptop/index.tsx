import { Bell, ChevronDown } from "lucide-react";
import HeaderLink from "./HeaderLink";
import HomeIcon from "../../icons/HomeIcon";
import GraduationIcon from "../../icons/GraduationIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import NewsIcon from "../../icons/NewsIcon";
import EntertainmentIcon from "../../icons/EntertainmentIcon";
import { ROUTE_PATHS } from "~/router/routePaths";
import { Link } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import Loading from "~/components/Loading";
import { getCharacterName } from "~/utils/hepler";
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
    const { auth, logout } = useAuth();
    return (
        <>
            {logout.isPending && <Loading />}
            <header className="fixed top-0 z-30 hidden w-full md:block">
                <div
                    className="padding-scrollbar text-primary flex h-[56px] w-full items-center bg-white/50 backdrop-blur-md"
                    // style={{
                    //     color: "var(--primary)",
                    //     height: "56px",
                    //     backgroundColor: "rgba(255, 255, 255, 0.5)",
                    // }}
                >
                    <div className="max-w-8xl mx-auto w-full items-center px-4 pl-6.5">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center max-xl:hidden">
                                <div className="tab:pr-4">
                                    <Link className="cursor-pointer" to={ROUTE_PATHS.home}>
                                        <span className="sr-only">MapLearn</span>
                                        <img
                                            className="h-10 rounded-xl object-contain"
                                            alt=""
                                            src="/assets/images/logo/logo-64.png"
                                        />
                                    </Link>
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
                                {auth.user ? (
                                    <div className="flex items-center gap-2">
                                        <div className="t1-flex-center h-9.5 w-9.5 cursor-pointer rounded-full border-2 border-[#b4d1e9] p-px">
                                            <Bell className="text-primary" />
                                        </div>
                                        <div className="dropdown" style={{ position: "relative" }} tabIndex={0}>
                                            <div>
                                                <div className="flex cursor-pointer items-center gap-1">
                                                    <div className="h-9.5 w-9.5 rounded-full border-2 border-[#b4d1e9] p-0.5">
                                                        <div
                                                            className="t1-flex-center shrink-0 rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] font-medium text-white"
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                fontSize: "0.9rem",
                                                                lineHeight: "0.9rem",
                                                            }}
                                                        >
                                                            {getCharacterName(auth.user.full_name)}
                                                        </div>
                                                    </div>
                                                    <ChevronDown />
                                                </div>
                                            </div>
                                            <div
                                                className="dropdown-menu"
                                                style={{
                                                    position: "absolute",
                                                    width: "max-content",
                                                    zIndex: 20,
                                                    top: "120%",
                                                    right: 0,
                                                    left: "auto",
                                                    transitionDuration: "150ms",
                                                    transitionTimingFunction: "ease-in-out",
                                                    opacity: 0,
                                                    visibility: "hidden",
                                                }}
                                            >
                                                <div className="w-36 rounded-lg bg-white p-1 shadow-md">
                                                    <Link to={ROUTE_PATHS.user.profile}>
                                                        <button className="w-full cursor-pointer rounded-md px-2 py-1.5 text-left text-black duration-150 hover:bg-[#ededed]">
                                                            Cá nhân
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className="w-full cursor-pointer rounded-md px-2 py-1.5 text-left text-red-500 duration-150 hover:bg-[#ededed]"
                                                        onClick={() => logout.mutate()}
                                                    >
                                                        Đăng xuất
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    zIndex: 10,
                                                    opacity: 0,
                                                    width: "100%",
                                                    top: "100%",
                                                    height: "20%",
                                                    visibility: "hidden",
                                                }}
                                            ></div>
                                            <style>
                                                {`
                                                .dropdown:hover .dropdown-menu,
                                                .dropdown:focus-within .dropdown-menu {
                                                    opacity: 1 !important;
                                                    visibility: visible !important;
                                                    transform: scale(1) !important;
                                                }
                                            `}
                                            </style>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            className="text-secondary-typo whitespace-nowrap hover:text-gray-900"
                                            to={ROUTE_PATHS.register}
                                        >
                                            <span>Đăng ký</span>
                                        </Link>
                                        <Link
                                            className="bg-primary hover:bg-primary-light t1-flex-center rounded-xl border-2 border-transparent px-5 py-1.5 whitespace-nowrap text-white shadow-sm duration-150 ease-out"
                                            to={ROUTE_PATHS.login}
                                        >
                                            Đăng nhập
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full"></div>
            </header>
        </>
    );
};

export default HeaderLaptop;
