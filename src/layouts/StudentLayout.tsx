import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "~/features/student/components/Footer";
import Header from "~/features/student/components/Header";
import { AppDispatch } from "~/store";
import { loadAuthFromLocalStorage } from "~/store/auth/authThunks";
const UserLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    // Load user từ LOCALSTOREAGE ra
    useEffect(() => {
        dispatch(loadAuthFromLocalStorage());
    }, [dispatch]);
    return (
        <>
            <Header />
            <section className="pb-6">
                <div className="max-w-8xl mx-auto mt-5 pb-12 md:mt-[56px] md:py-5 lg:px-4">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default UserLayout;
