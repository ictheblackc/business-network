import {NextPage} from "next";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

interface LoginProps {
}

const LoginPage: NextPage<LoginProps> = ({}) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{height: '70vh'}}
        >
            <Stack
                direction="column"
                spacing={2}
                width={350}
            >
                <Typography variant="h4" align="center">
                    Log in
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    value={value.email}
                    type="email"
                    onChange={(event) => setValue(prevState => ({...prevState, email: event.target.value}))}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={value.password}
                    onChange={(event) => setValue(prevState => ({...prevState, password: event.target.value}))}
                />
                <Stack alignItems="end">
                    <Button variant="contained">Submit</Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LoginPage;