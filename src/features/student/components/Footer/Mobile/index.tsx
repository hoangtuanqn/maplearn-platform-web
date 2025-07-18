import HomeIcon from "../../icons/HomeIcon";
import GraduationIcon from "../../icons/GraduationIcon";
import EntertainmentIcon from "../../icons/EntertainmentIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import NewsIcon from "../../icons/NewsIcon";
import FooterMobileLink from "./FooterLink";
import { ROUTE_PATHS } from "~/router/routePaths";
const footerLinks = [
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
        isActive: false,
    },
    {
        label: "Đấu trường",
        icon: DocumentIcon,
        href: "/dau-truong-ly-thuyet",
    },
    {
        label: "Thi online",
        icon: NewsIcon,
        href: "/thi-online",
        isActive: false,
    },
    {
        label: "Đăng nhập",
        icon: EntertainmentIcon,
        href: ROUTE_PATHS.login,
        isActive: false,
    },
];
const FooterMobile = () => {
    return (
        <div className="fixed right-0 bottom-0 left-0 z-20 h-16 w-full bg-white py-2 shadow-2xs md:hidden">
            <ul className="flex h-full list-none flex-row gap-1 px-0.5">
                {footerLinks.map((link) => (
                    <FooterMobileLink key={link.href + link.label} {...link} iconColor="" />
                ))}
            </ul>
        </div>
    );
};

export default FooterMobile;
