import { createSlice } from "@reduxjs/toolkit";

export const CommentsSlice = createSlice({
    name: "CommentsSlice",
    initialState: {
        isLoading: false,
        comments: [],
        message: '',
        error: false
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.comments.push(action.payload.comment)
            state.message = action.payload.message
        },
        fetchError: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export default CommentsSlice.reducer