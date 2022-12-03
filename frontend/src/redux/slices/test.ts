import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodo} from "../thunk/test";


// State
type TestState = {
    counter: number;
    entities: [];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: null | string | undefined;
};

const initialState: TestState = {
    counter: 0,
    entities: [],
    status: 'idle',
    error: null,
};

// Slice
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increaseCounter(state: TestState, action: PayloadAction<number>) {
            state.counter += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state: TestState, action) => {
            state.status = 'pending'
        })
        builder.addCase(fetchTodo.fulfilled, (state: TestState, action) => {
            state.status = 'succeeded'
            state.entities = action.payload.entities
        })
        builder.addCase(fetchTodo.rejected, (state: TestState, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
});

// Types
export type Test = {
    article: string;
    description?: string;
}

// Export
export const {
    increaseCounter,
} = testSlice.actions;

export default testSlice.reducer;
