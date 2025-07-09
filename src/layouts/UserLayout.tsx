import { Outlet } from "react-router-dom";
import Footer from "~/features/student/components/Footer";
import Header from "~/features/student/components/Header";

const UserLayout = () => {
    return (
        <>
            <Header />
            <section className="pb-6">
                <div className="max-w-8xl mx-auto mt-5 md:mt-[56px] md:py-5 lg:px-4">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default UserLayout;
