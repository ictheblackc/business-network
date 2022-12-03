import {createSlice, PayloadAction} from "@reduxjs/toolkit";


// Slice
type UserState = {
    isAuth: boolean;
    user: null | User;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: null | string;
    registered: boolean;
};

const initialState: UserState = {
    isAuth: false,
    user: null,
    status: 'idle',
    error: null,
    registered: false,
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetRegistered(state: UserState, action: PayloadAction<number>) {
            state.registered = false
        },
    },
});

// Types

type User = {}

export const {
    resetRegistered,
} = userSlice.actions;

export default userSlice.reducer;
