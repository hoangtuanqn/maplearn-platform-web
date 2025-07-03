import { ItemLinkType } from "~/components/Header/Laptop/HeaderLink";

const FooterMobileLink = ({ label, icon: Icon, href, iconColor = "#ff0000" }: ItemLinkType) => {
    return (
        <li className="flex-1">
            <a className="t1-flex-center relative flex h-full w-full flex-col gap-0.5" href={href}>
                <div className="t1-flex-center h-7 w-7">
                    <Icon color={iconColor} />
                </div>
                <span className="text-center text-xs text-gray-600 md:text-sm">{label}</span>
            </a>
        </li>
    );
};

export default FooterMobileLink;
