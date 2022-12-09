import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
// Example Slice

type CoreState = {};

const initialState: CoreState = {};

// ----------------------------------------------------------------------

export const testSlice = createSlice({
    name: "core",
    initialState,
    reducers: {
        increaseCounter(state: CoreState, action: PayloadAction) {

        },
    },
});

export const {} = testSlice.actions;

export default testSlice.reducer;
