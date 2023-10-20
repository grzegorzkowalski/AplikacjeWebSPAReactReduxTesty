import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    "isCounting": false,
    "value": 0,
    "list": []
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        start: (state) => {
            state.isCounting = true;
        },
        stop: (state) => {
            state.isCounting = false;
        },
        addToList: (state) => {
            state.list.push(state.value);
        },
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    start,
    stop,
    addToList
} = counterSlice.actions;

export default counterSlice.reducer;