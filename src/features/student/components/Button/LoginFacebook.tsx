import { APP } from "~/config/env";

const LoginFacebook = () => {
    return (
        <button
            onClick={() => (window.location.href = `${APP.API_ROOT}/api/v1/auth/facebook`)}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-[#4285F4] px-4 py-2 text-white shadow"
        >
            <div className="t1-flex-center h-7 w-7 rounded-xl">
                <img src="/assets/icons/facebook.png" alt="Google" className="w-[80%] object-cover" />
            </div>
        </button>
    );
};

export default LoginFacebook;
