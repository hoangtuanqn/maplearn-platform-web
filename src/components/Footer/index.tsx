import { Tooltip } from "react-tooltip";
import FooterLaptop from "./Laptop";
import FooterMobile from "./Mobile";
import ScrollToTopButton from "./ScrollToTopButton";
const Footer = () => {
    return (
        <>
            <FooterLaptop />
            <FooterMobile />
            <Tooltip anchorSelect=".view_tooltip" />
            <ScrollToTopButton />
        </>
    );
};

export default Footer;
