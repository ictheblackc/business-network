import {FC} from "react";
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';
import {Button, Stack} from "@mui/material";
import useAuth from "./useAuth";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

const initialValues = {
    email: "admin@mail.com",
    password: "qwerty!12345"
}

// ----------------------------------------------------------------------

interface FormData {
    email: string;
    password: string;
}

interface LoginFormProps {
}

// ----------------------------------------------------------------------

const LoginForm: FC<LoginFormProps> = ({}) => {
    const {login} = useAuth();

    const onSubmit = async (values: FormData) => login(values);

    const validate = async (values: FormData) => {
        if (!values.email) return {email: 'Email is required field'};

        if (!values.password) return {password: 'Password is required field'};

        return;
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Stack direction="column" spacing={2} width={300}>
                        <TextField label="Email" name="email" type="email" size="small"/>

                        <TextField label="Password" name="password" type="password" size="small"/>

                        <Button type="submit" variant="contained" size="large" sx={{textTransform: 'none'}}>
                            Log in
                        </Button>
                        <Typography>
                            User: admin@mail.com
                        </Typography>
                        <Typography>
                            password: qwerty!12345
                        </Typography>
                    </Stack>
                </form>
            )}
        />
    );
}

export default LoginForm;

