import {FC, ReactNode} from "react";
import Sidebar from "./Navbar/Sidebar";

interface MainLayout {
    children: ReactNode;
}

const MainLayout: FC<MainLayout> = ({children}) => {
    return (
        <>
            <Sidebar>
                {children}
            </Sidebar>
        </>
    );
};

export default MainLayout;