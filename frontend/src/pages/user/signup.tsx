import {NextPage} from "next";
import {Stack} from "@mui/material";
import SignupForm from "../../user/SignupForm";

// ----------------------------------------------------------------------

interface SignupProps {
}

// ----------------------------------------------------------------------

const Signup: NextPage<SignupProps> = ({}) => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{height: '70vh'}}
        >
            <SignupForm/>
        </Stack>
    );
};

export default Signup;