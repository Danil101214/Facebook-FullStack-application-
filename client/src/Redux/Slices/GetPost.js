import { createSlice } from "@reduxjs/toolkit";

export const GetPost = createSlice({
    name: "Post",
    initialState: {
        isLoading: false,
        post: [],
        error: false
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.post = action.payload.post
        },
        fetchError: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export default GetPost.reducer