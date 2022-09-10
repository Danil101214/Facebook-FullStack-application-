import { createSlice } from "@reduxjs/toolkit";

export const UserId = createSlice({
    name: "UserId",
    initialState: {
        isLoading: false,
        user: [],
        error: false
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        },
        fetchError: (state) => {
            state.isLoading = true
            state.error = true
        }
    }
})

export default UserId.reducer