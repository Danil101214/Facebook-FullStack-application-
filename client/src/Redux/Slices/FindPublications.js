import {createSlice } from "@reduxjs/toolkit";

export const FindPost = createSlice({
    name: "PostFind",
    initialState: {
        isLoading: false,
        postId: [],
        comments: [],
        error: null
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.postId = action.payload.postId
            state.comments = action.payload.comments
        },
        fetchError: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export default FindPost.reducer