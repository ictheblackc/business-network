import jwtDecode from 'jwt-decode';
import axiosClient from "../utils/axios";
import {PATH_USER} from "../routes/paths";

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
    if (!accessToken) return false;

    // @ts-ignore
    const { exp } = jwtDecode(accessToken);

    const currentTime = Date.now() / 1000;

    return exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
    const currentTime = Date.now();

    const timeLeft = exp * 1000 - currentTime;

    const expiredTimer = setTimeout(() => {

        localStorage.removeItem('accessToken');

        window.location.href = PATH_USER.login;
    }, timeLeft);

    clearTimeout(expiredTimer);
};

const setSession = (accessToken: string | null) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // @ts-ignore
        const {exp} = jwtDecode(accessToken);

        handleTokenExpired(exp);
    } else {
        localStorage.removeItem('accessToken');
        delete axiosClient.defaults.headers.common.Authorization;
    }
};

export { isValidToken, setSession };
