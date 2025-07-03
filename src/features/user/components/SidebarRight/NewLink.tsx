import { CalendarRange } from "lucide-react";
import { NewType } from "~/features/user/types/menu.type";
const NewLink = ({ title, url, image, createdAt }: NewType) => {
    return (
        <a className="flex cursor-pointer items-start rounded-md py-3" href={url}>
            <img className="h-[4.75rem] w-[4.75rem] overflow-hidden rounded-lg" alt={title} src={image} />
            <div className="ml-4 flex h-full min-h-[4.75rem] flex-1 flex-col justify-between gap-2">
                <p className="text-primary line-clamp-3 font-medium">{title}</p>
                <div className="flex items-center gap-2 text-gray-500">
                    <CalendarRange />
                    <p className="text-xs">{createdAt}</p>
                </div>
            </div>
        </a>
    );
};

export default NewLink;
