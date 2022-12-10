# Main

Page component:
```tsx
import {NextPage} from "next";
import Layout from "../layouts/Layout";

// ----------------------------------------------------------------------

const ExamplePage: NextPage = ({}) => {
    return (
        <>
            
        </>
    );
};

// @ts-ignore
ExamplePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ExamplePage;
```

Component: 
```tsx
import {FC} from "react";

// ----------------------------------------------------------------------

const Example: FC = ({}) => {

    return (
        <>
            
        </>
    );
};

export default Example;
```

Component Props:
```tsx
// ----------------------------------------------------------------------

interface ExampleProps {
    children: ReactNode;
}

// ----------------------------------------------------------------------

const Example: FC<ExampleProps> = ({children}) => {};
```

Slice:
```ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ErrorRequest, StatusRequest} from "./types";

// ----------------------------------------------------------------------

type ExampleState = {
    counter: number;
    entities: [];
    status: StatusRequest;
    error: ErrorRequest;
};

const initialState: ExampleState = {
    counter: 0,
    entities: [],
    status: 'idle',
    error: null,
};

// ----------------------------------------------------------------------

export const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        increaseCounter(state: ExampleState, action: PayloadAction<number>) {
            state.counter += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state: ExampleState) => {
            state.status = 'pending';
        })
        builder.addCase(fetchTodo.fulfilled, (state: ExampleState, action: PayloadAction<{ entities: [] }>) => {
            state.status = 'succeeded';
            state.entities = action.payload.entities;
        })
        builder.addCase(fetchTodo.rejected, (state: ExampleState, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
});

export const {
    increaseCounter,
} = exampleSlice.actions;

export default exampleSlice.reducer;
```

Template Slice:
```ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

type ExampleState = {};

const initialState: ExampleState = {};

// ----------------------------------------------------------------------

export const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        example(state: ExampleState, action: PayloadAction) {
            
        },
    },
});

export const {
    example,
} = exampleSlice.actions;

export default exampleSlice.reducer;
```

Thunk Action: 
```ts
import {createAsyncThunk} from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

export const fetchTodo = createAsyncThunk('todo/fetchList',
    async () => await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()))
```

Work flow with redux:
```ts
const dispatch = useTypeDispatch();
const {} = useTypedSelector(store => store);
```

---

Request on backend:
```ts
try {
    const response = await axiosBackend.get('api/');
    console.log(response.data);
} catch (e) {
    console.log(e)
}
```

---

getServerSideProps:
```tsx
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({}) => {
        console.log("getServerSideProps")
        return {props: {}}
    }
);
```

