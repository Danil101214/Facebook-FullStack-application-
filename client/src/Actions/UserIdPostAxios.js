import { UserId } from "../Redux/Slices/UserId.js"
import axios from "../utils/axios.js"
export const UserIdPost = (id) => {
    return async (dispatch) => {
        try {
            dispatch(UserId.actions.fecthLoading())
            const response = await axios.get(`/auth/user/me/${id}`)
            dispatch(UserId.actions.fetchSuccess({
                user: response.data
            }))
        } catch (error) {
            console.log(error)
        }
    }
}