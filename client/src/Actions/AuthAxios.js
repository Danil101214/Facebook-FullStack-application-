import axios from "../utils/axios.js"
import {AuthSlice} from "../Redux/Slices/AuthSlice"

export const AuthAxios = (data) => {
    return async (dispatch) => {
        try {
            dispatch(AuthSlice.actions.fecthLoading())
            const response = await axios.post(`/auth/registration`, data)
            console.log(response.data.token)
            dispatch(AuthSlice.actions.registration({
                username: data.username,
                password: data.password,
                token: response.data.token,
                message: response.data.message
            }))
            if(response.data.token) {
                localStorage.setItem('token', response.data.token)
            }
        } catch (error) {
            console.log(error)
            dispatch(AuthSlice.actions.error({
                error: error.response.data.message
            }))
        }
    }
}

export const AuthLoginAxios = (data) => {
    return async (dispatch) => {
        try {
            dispatch(AuthSlice.actions.fecthLoading())
            const response = await axios.post(`/auth/login`, data)
            console.log(response.data.message)
            dispatch(AuthSlice.actions.login({
                username: data.username,
                password: data.password,
                token: response.data.token,
                message: response.data.message
            }))
            if(response.data.token) {
                localStorage.setItem('token', response.data.token)
            }
        } catch (error) {
            console.log(error)
            dispatch(AuthSlice.actions.error({
                error: error.response.data.message
            }))
        }
    }
}