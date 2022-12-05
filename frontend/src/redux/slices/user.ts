import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginRequest, signupRequest} from "../thunk/user";
import {setSession} from "../../user/jwt";

// ----------------------------------------------------------------------

type User = {
    email: string;
}

type UserState = {
    isInitialized: boolean,
    isAuth: boolean,
    user: null | User,
};

const initialState: UserState = {
    isInitialized: false,
    isAuth: false,
    user: null,
};

// ----------------------------------------------------------------------

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initialize: (state: UserState, action: PayloadAction<{ user: User | null, isAuth: boolean }>) => {
            state.isInitialized = true;
            state.isAuth = action.payload.isAuth;
            state.user = action.payload.user;
        },
        logoutAction: (state: UserState) => {
            setSession(null);
            state.isAuth = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.fulfilled, (state: UserState, action: PayloadAction<{ user: User }>) => {
            state.isAuth = true;
            state.user = action.payload.user;
        })
        builder.addCase(signupRequest.fulfilled, (state: UserState, action: PayloadAction<{ user: User }>) => {
            state.isAuth = true;
            state.user = action.payload.user;
        })
    },
});

export const {
    initialize,
    logoutAction,
} = userSlice.actions;

export default userSlice.reducer;
