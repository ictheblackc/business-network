import {FC, ReactNode} from "react";
import Sidebar from "./Navbar/Sidebar";
import {CssBaseline} from "@mui/material";

// ----------------------------------------------------------------------

interface MainLayout {
    children: ReactNode;
}

// ----------------------------------------------------------------------

const MainLayout: FC<MainLayout> = ({children}) => {
    return (
        <>
            <Sidebar>
                <CssBaseline/>
                {children}
            </Sidebar>
        </>
    );
};

export default MainLayout;