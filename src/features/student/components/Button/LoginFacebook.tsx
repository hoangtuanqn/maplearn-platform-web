import { APP } from "~/config/env";

const LoginFacebook = () => {
    return (
        <button
            onClick={() => (window.location.href = `${APP.API_ROOT}/api/v1/auth/facebook`)}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-[#4285F4] px-4 py-2 pr-8 text-white shadow"
        >
            <img src="/assets/icons/facebook.png" alt="Facebook" className="rounded-xlobject-cover h-7.5 w-7.5" />
            <span className="flex-1 text-center font-bold">Tiếp tục với Facebook</span>
        </button>
    );
};

export default LoginFacebook;
