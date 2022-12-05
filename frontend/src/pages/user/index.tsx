import {Button} from "@mui/material";
import useAuth from "../../user/useAuth";
import {NextPage} from "next";

// ----------------------------------------------------------------------

interface UserPageProps {
}

// ----------------------------------------------------------------------

const UserPage: NextPage<UserPageProps> = ({}) => {
    const {user, logout} = useAuth();

    return (
        <>
            <h1>{user?.email}</h1>
            <Button onClick={logout}>
                logout
            </Button>
        </>
    );
};

export default UserPage;