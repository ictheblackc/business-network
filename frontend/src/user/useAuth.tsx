import {useTypeDispatch, useTypedSelector} from "../redux/store";
import {loginRequest, loginRequestArguments, signupRequest, signupRequestArguments} from "../redux/thunk/user";
import {logoutAction} from "../redux/slices/user";

// ----------------------------------------------------------------------

const useAuth = () => {
    const {isInitialized, isAuth, user} = useTypedSelector(state => state.user);
    const dispatch = useTypeDispatch();

    // @ts-ignore
    const signup = ({email, password}: signupRequestArguments) => dispatch(signupRequest({email, password}));

    // @ts-ignore
    const login = ({email, password}:loginRequestArguments) => dispatch(loginRequest({email, password}));

    const logout = () => dispatch(logoutAction());

    return {isInitialized, isAuth, user, signup, login, logout};
};

export default useAuth;