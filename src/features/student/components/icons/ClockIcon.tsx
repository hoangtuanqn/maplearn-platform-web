import React from "react";

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9 .75a8.25 8.25 0 110 16.5A8.25 8.25 0 019 .75zm0 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm0 2.667a.75.75 0 01.75.75v2.932l2.166 1.444.061.046a.75.75 0 01-.827 1.241l-.066-.039-2.5-1.667A.75.75 0 018.25 9V5.667a.75.75 0 01.75-.75z"
            fill="#656C7B"
        ></path>
    </svg>
);

export default ClockIcon;
