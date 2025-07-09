import axios from "axios";
import { APP } from "~/config/env";

const apiPublic = axios.create({
    baseURL: APP.API_URL,
    withCredentials: false,
});

export default apiPublic;
