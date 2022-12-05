import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodo} from "../thunk/test";
import {ErrorRequest, StatusRequest} from "./types";

// ----------------------------------------------------------------------
// Example Slice

type TestState = {
    counter: number;
    entities: [];
    status: StatusRequest;
    error: ErrorRequest;
};

const initialState: TestState = {
    counter: 0,
    entities: [],
    status: 'idle',
    error: null,
};

// ----------------------------------------------------------------------

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increaseCounter(state: TestState, action: PayloadAction<number>) {
            state.counter += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state: TestState) => {
            state.status = 'pending'
        })
        builder.addCase(fetchTodo.fulfilled, (state: TestState, action: PayloadAction<{ entities: [] }>) => {
            state.status = 'succeeded'
            state.entities = action.payload.entities
        })
        builder.addCase(fetchTodo.rejected, (state: TestState, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
});

export const {
    increaseCounter,
} = testSlice.actions;

export default testSlice.reducer;
