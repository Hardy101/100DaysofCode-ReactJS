// Redux
`
#1  Installation   npm install @reduxjs/toolkit react-redux


#2  Creating a store   Redux requires a store to hold the global state (store.tsx)
    import { configureStore } from "@reduxjs/toolkit";
    import counterReducer from "./counterSlice"; // Import your reducers

    const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
    export default store;

    
#3  Creating a slice (counterslice.tsx)
    import { createSlice } from "@reduxjs/toolkit";

    const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
        state.count += 1;
        },
        decrement: (state) => {
        state.count -= 1;
        },
        incrementByAmount: (state, action) => {
        state.count += action.payload;
        },
    },
    });

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;


#4 Providing the store to the App (main.tsx)
    import { createSlice } from "@reduxjs/toolkit";

    const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
        state.count += 1;
        },
        decrement: (state) => {
        state.count -= 1;
        },
        incrementByAmount: (state, action) => {
        state.count += action.payload;
        },
    },
    });

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;


#5 Using Redux State in component (<component>.tsx)
    import { useSelector, useDispatch } from "react-redux";
    import { RootState } from "./store"; // Import RootState type
    import { increment, decrement, incrementByAmount } from "./counterSlice";

    const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
        </div>
    );
    };

    export default Counter;

`;

import { configureStore } from "@reduxjs/toolkit";