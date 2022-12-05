import useEffectClient from "../hooks/useEffectClient";
import {FC, ReactNode} from "react";
import {isValidToken, setSession} from "./jwt";
import axiosClient from "../utils/axios";
import {useTypeDispatch} from "../redux/store";
import {initialize} from "../redux/slices/user";

// ----------------------------------------------------------------------

interface AuthProps {
    children: ReactNode;
}

// ----------------------------------------------------------------------

const Auth: FC<AuthProps> = ({children}) => {
    const dispatch = useTypeDispatch();

    useEffectClient(() => {
        (async () => {
            try {
                const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken);

                    const response = await axiosClient.get('api/authentication/');
                    const {user} = response.data;

                    dispatch(initialize({isAuth: true, user}));
                } else {
                    dispatch(initialize({isAuth: false, user: null}));
                }
            } catch (err) {
                console.error(err);
                dispatch(initialize({isAuth: false, user: null}));
            }
        })();
    }, []);

    return <>{children}</>;
};

export default Auth;