import {NextPage} from "next";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

interface SignupProps {}

const Signup: NextPage<SignupProps> = ({}) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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
                    Sign up
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
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={value.confirmPassword}
                    onChange={(event) => setValue(prevState => ({...prevState, confirmPassword: event.target.value}))}
                />
                <Stack alignItems="end">
                    <Button variant="contained">Submit</Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Signup;