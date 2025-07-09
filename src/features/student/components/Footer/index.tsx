import { Tooltip } from "react-tooltip";
import FooterLaptop from "./Laptop";
import FooterMobile from "./Mobile";
import ScrollToTopButton from "./ScrollToTopButton";
import { Toaster } from "sonner";
const Footer = () => {
    return (
        <>
            <FooterLaptop />
            <FooterMobile />
            <Tooltip anchorSelect=".view_tooltip" />
            <ScrollToTopButton />
            <Toaster position="top-center" expand={true} richColors />
        </>
    );
};

export default Footer;
