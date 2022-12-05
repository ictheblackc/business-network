// Base
import type {AppProps} from 'next/app'
import {FC} from "react";
// Redux Store
import {wrapper} from "../redux/store";
import {Provider as ReduxProvider} from "react-redux";
// User
import Auth from "../user/Auth";
// MUI Theme
import lightThemeOptions from "theme";
import {createTheme, ThemeProvider} from '@mui/material';
// Layouts
import MainLayout from "../layouts/MainLayout";

// ----------------------------------------------------------------------

const lightTheme = createTheme(lightThemeOptions);

// ----------------------------------------------------------------------

interface MyAppProps extends AppProps {

}

const MyApp: FC<MyAppProps> = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    // const { emotionCache = clientSideEmotionCache, pageProps } = props;
    const {pageProps} = props;

    return (
        <ReduxProvider store={store}>
            <Auth>
                <ThemeProvider theme={lightTheme}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </ThemeProvider>
            </Auth>
        </ReduxProvider>
    );
};

export default MyApp;