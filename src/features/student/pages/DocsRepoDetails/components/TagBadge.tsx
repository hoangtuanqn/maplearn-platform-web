type TagBadgeProps = {
    name: string;
    className?: string;
};

const TagBadge = ({ name, className = "" }: TagBadgeProps) => (
    <div className={`t1-flex-center bg-primary min-w-max rounded-full px-3 py-1 text-white ${className}`}>{name}</div>
);

export default TagBadge;
