import { ElementType } from "react";
export type HeaderLinkType = {
    icon: ElementType;
    label: string;
    href: string;
};
const HeaderLink = ({ label, icon: Icon, href }: HeaderLinkType) => {
    return (
        <a className="cursor-pointer" href={href}>
            <div className="h-max w-max">
                <div
                    className="view_tooltip flex items-center px-6 duration-200 hover:scale-110"
                    data-tooltip-content={label}
                    style={{ height: "56px" }}
                >
                    <Icon />
                </div>
            </div>
        </a>
    );
};

export default HeaderLink;
