import { GetPost } from "../Redux/Slices/GetPost"
import axios from "../utils/axios.js"

export const GetPostAxios = () => {
    return async (dispatch) => {
        try {
            dispatch(GetPost.actions.fecthLoading())
            const response = await axios.get(`/api/post/get`)
            console.log(response.data)
            dispatch(GetPost.actions.fetchSuccess({
                post: response.data
            }))
        } catch (error) {
            console.log(error)
        }
    }
}