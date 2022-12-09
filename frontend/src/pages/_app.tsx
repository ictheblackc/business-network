// Next
import type {AppProps} from 'next/app'
import {NextPage} from "next";
// Redux Store
import {wrapper} from "../redux/store";
import {Provider as ReduxProvider} from "react-redux";
// User
import Cookies from "cookies";
import {authentication, initialAuthGuard} from "../user/initialAuth";
import AuthGuard from "../user/AuthGuard";
// MUI Theme
import lightThemeOptions from "theme";
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {SnackbarProvider} from "notistack";

// ----------------------------------------------------------------------

const lightTheme = createTheme(lightThemeOptions);

// ----------------------------------------------------------------------

const MyApp = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    // @ts-ignore
    const getLayout = Component.getLayout ?? ((page: NextPage) => page);


    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={lightTheme}>
                <SnackbarProvider maxSnack={5}>
                    <AuthGuard>
                        <CssBaseline/>
                        {getLayout(<Component {...props.pageProps} />)}
                    </AuthGuard>
                </SnackbarProvider>
            </ThemeProvider>
        </ReduxProvider>
    );
};

// ----------------------------------------------------------------------

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ctx}) => {

    const {req, res} = ctx;

    if (req && res) {
        const cookies = new Cookies(req, res);
        const {dispatch, getState} = store;

        await authentication({cookies, dispatch});

        await initialAuthGuard({req, res, isAuth: getState().user.isAuth});
    }

    return {pageProps: {}}
})

export default MyApp;