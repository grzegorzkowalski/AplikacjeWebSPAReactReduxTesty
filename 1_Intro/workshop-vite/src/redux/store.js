import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./features/counterSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})