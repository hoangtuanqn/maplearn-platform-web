import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "~/store";
import { loadAuthFromLocalStorage } from "~/store/auth/authThunks";

const MainLayout = () => {
    const dispatch = useDispatch<AppDispatch>();

    // Load user từ LOCALSTOREAGE ra
    useEffect(() => {
        dispatch(loadAuthFromLocalStorage());
    }, [dispatch]);
    return <Outlet />;
};

export default MainLayout;
