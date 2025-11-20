import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
})

const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        isLoading: false,
        isData: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isData = action.payload
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true
            state.isData = action.payload
        });
    }

})

export default todoSlice.reducer