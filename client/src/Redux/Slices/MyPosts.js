import { createSlice } from "@reduxjs/toolkit";

export const MyPost = createSlice({
    name: "postTop",
    initialState: {
        isLoading: false,
        post: [],
        deletePost: [],
        message: '',
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
        fetchDelete: (state, action) => {
            state.isLoading = false
            state.deletePost = state.deletePost.filter(post => post._id !== action.payload.postdelete)
            state.message = action.payload.message
        },
        fetchError: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export default MyPost.reducer