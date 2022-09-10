import { createSlice } from "@reduxjs/toolkit";

export const CreatePublications = createSlice({
    name: "CreatePublications",
    initialState: {
        isLoading: false,
        title: '',
        descrption: '',
        image: null,
        post: [],
        error: false
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.title = action.payload.title
            state.descrption = action.payload.descrption
            state.image = action.payload.image
        },
        fetchUpdate: (state, action) => {
            state.isLoading = false
            state.post = action.payload.post
        },
        fetchUpdateForPost: (state, action) => {
            state.isLoading = false
            state.title = action.payload.title
            state.descrption = action.payload.descrption
            state.image = action.payload.image
        },
        fetchError: (state) => {
            state.isLoading = true
            state.error = true
        }
    }
})

export default CreatePublications.reducer