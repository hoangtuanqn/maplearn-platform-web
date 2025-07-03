const NewsIcon = ({ color = "#868686" }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            xmlns="http://www.w3.org/2000/svg"
            className="h-[22px] w-[22px]"
        >
            <path
                d="M19 8a3 3 0 100-6 3 3 0 000 6zM7 13h5M7 17h9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </svg>
    );
};

export default NewsIcon;
