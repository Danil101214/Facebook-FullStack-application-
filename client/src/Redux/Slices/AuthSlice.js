import { createSlice } from "@reduxjs/toolkit";

const TOKEN_KEY = 'u-token'
const PASSWORD_KEY = 'u-password'
const USERNAME_KEY = 'u-username'
export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        isLoading: false,
        username: localStorage.getItem(USERNAME_KEY) || '',
        password: localStorage.getItem(PASSWORD_KEY) || '',
        token: localStorage.getItem(TOKEN_KEY) || '',
        isAuth: Boolean(localStorage.getItem(TOKEN_KEY)),
        message: '',
        error: ''
    },
    reducers: {
        fecthLoading: (state) => {
            state.isLoading = true
        },
        registration: (state, action) => {
            state.isLoading = false
            state.username = action.payload.username
            state.password = action.payload.password
            state.token = action.payload.token
            state.isAuth = Boolean(action.payload.token)
            state.message = action.payload.message
            localStorage.setItem(USERNAME_KEY, action.payload.username)
            localStorage.setItem(PASSWORD_KEY, action.payload.password)
            localStorage.setItem(TOKEN_KEY, action.payload.token)
        },
        login: (state, action) => {
            state.isLoading = false
            state.username = action.payload.username
            state.password = action.payload.password
            state.token = action.payload.token
            state.isAuth = Boolean(action.payload.token)
            state.message = action.payload.message
            localStorage.setItem(USERNAME_KEY, action.payload.username)
            localStorage.setItem(PASSWORD_KEY, action.payload.password)
            localStorage.setItem(TOKEN_KEY, action.payload.token)
        },
        logOut: (state) => {
            state.isLoading = false
            state.username = ''
            state.password = ''
            state.token = ''
            state.isAuth = false
            localStorage.removeItem(USERNAME_KEY)
            localStorage.removeItem(PASSWORD_KEY)
            localStorage.removeItem(TOKEN_KEY)
        },
        error: (state, action) => {
            state.error = action.payload.error
        },
    }
})

export default AuthSlice.reducer