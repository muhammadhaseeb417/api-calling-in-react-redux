import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo-slice"

const todoStore = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default todoStore