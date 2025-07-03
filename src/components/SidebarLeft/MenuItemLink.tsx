import { SidebarType } from "~/types/menu.type";

export const MenuItemLink = ({ title, image, url, className }: SidebarType) => {
    return (
        <a
            className="flex cursor-pointer items-center justify-start rounded-lg px-4 py-2 hover:bg-[rgba(26,79,140,0.06)]"
            href={url}
        >
            <div className="flex-center">
                <img src={image} alt={title} className={className} />
            </div>
            <p className="text-primary ml-4 font-medium">{title}</p>
        </a>
    );
};
