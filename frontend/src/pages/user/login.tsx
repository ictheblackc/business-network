import {NextPage} from "next";
import {Stack} from "@mui/material";
import LoginForm from "../../user/LoginForm";

// ----------------------------------------------------------------------

interface LoginProps {
}

// ----------------------------------------------------------------------

const LoginPage: NextPage<LoginProps> = ({}) => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{height: '70vh'}}
        >
            <LoginForm />
        </Stack>
    );
};

export default LoginPage;