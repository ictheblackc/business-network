import {createAsyncThunk} from "@reduxjs/toolkit";
import {setSession} from "../../user/jwt";
import axiosClient from "../../utils/axios";

// ----------------------------------------------------------------------

export type loginRequestArguments = {
    email: string;
    password: string;
}

export type signupRequestArguments = {
    email: string;
    password: string;
}

// ----------------------------------------------------------------------

export const loginRequest = createAsyncThunk('user/login',
    async (data: loginRequestArguments) => {
        const response = await axiosClient.post('/api/user/login', data);
        const {access, user} = response.data;

        setSession(access);

        return {access, user};
    }
);

export const signupRequest = createAsyncThunk('user/signup',
    async (data: signupRequestArguments) => {
        const response = await axiosClient.post('/api/user/signup', data);
        const {access, user} = response.data;

        localStorage.setItem('accessToken', access);

        return {access, user};
    }
);
