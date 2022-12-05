import {FC} from "react";
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';
import {Button, Stack} from "@mui/material";
import useAuth from "./useAuth";

// ----------------------------------------------------------------------

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

interface SignupProps {
}

// ----------------------------------------------------------------------

const Signup: FC<SignupProps> = () => {
    const {signup} = useAuth();

    const onSubmit = async (values: FormData) => signup(values);

    const validate = async (values: FormData) => {
        const {email, password, confirmPassword} = values;

        if (!email) return {email: 'Required field'};

        if (!password) return {password: 'Required field'};

        if (!confirmPassword) return {confirmPassword: 'Required field'};

        if (confirmPassword !== password) return {confirmPassword: 'Passwords must match'};

        return;
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Stack direction="column" spacing={2} width={300}>
                        <TextField label="Email" name="email" type="email" size="small" autoComplete="off"/>

                        <TextField label="Password" name="password" type="password" size="small" autoComplete="off"/>

                        <TextField label="Confirm Password" name="confirmPassword" type="password" size="small"
                                   autoComplete="off"/>

                        <Button type="submit" variant="contained" size="large" sx={{textTransform: 'none'}}>
                            Sign up
                        </Button>
                    </Stack>
                </form>
            )}
        />
    );
}

export default Signup;


