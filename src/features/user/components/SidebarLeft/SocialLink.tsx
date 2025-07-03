import { SidebarType } from "~/features/user/types/menu.type";

export default function SocialLink({ title, url, image }: SidebarType) {
    return (
        <a target="_blank" className="flex cursor-pointer items-center py-1.5" href={url}>
            <img src={image} className="h-10 w-10 rounded-full" alt="" />
            <p className="text-primary ml-2">{title}</p>
        </a>
    );
}
