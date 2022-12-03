import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk('todo/fetchList', async () => {
        return await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    }
)