import { APP } from "~/config/env";

const LoginGoogle = () => {
    return (
        <button
            onClick={() => (window.location.href = `${APP.API_ROOT}/api/v1/auth/google`)}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-white px-4 py-2 pr-8 font-bold text-black shadow"
        >
            <img src="/assets/icons/google.png" alt="Google" className="h-7.5 w-7.5 rounded-xl bg-white object-cover" />
            <span className="flex-1 text-center font-bold">Tiếp tục với Google</span>
        </button>
    );
};

export default LoginGoogle;
