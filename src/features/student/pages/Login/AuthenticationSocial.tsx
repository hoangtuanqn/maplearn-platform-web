import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Loading from "~/components/Loading";
import { useAuth } from "~/hooks/useAuth";
import { ROUTE_PATHS } from "~/router/routePaths";

const AuthenticationSocial = () => {
    const {
        getInfoMe: { mutate, isPending },
    } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        mutate(undefined, {
            onSuccess: () => {
                navigate("/");
                toast.success("Đã đăng nhập thành công!");
            },
            onError: () => {
                navigate(ROUTE_PATHS.login);
                toast.error("Đang có lỗi xảy ra! Bạn chưa thể dăng đăng nhập được vào lúc này!");
            },
        });
    }, [mutate, navigate]);
    return <div className="min-h-screen">{isPending && <Loading />}</div>;
};

export default AuthenticationSocial;
