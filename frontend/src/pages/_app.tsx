import type {AppProps} from 'next/app'
import {FC} from "react";
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import lightThemeOptions from "theme";
import {wrapper} from "../redux/store";
import {Provider} from "react-redux";
import MainLayout from "../layouts/MainLayout";


interface MyAppProps extends AppProps {

}

const lightTheme = createTheme(lightThemeOptions);

const MyApp: FC<MyAppProps> = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    // const { emotionCache = clientSideEmotionCache, pageProps } = props;
    const {pageProps} = props;

    return (
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <MainLayout>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </Provider>
    );
};

export default MyApp;