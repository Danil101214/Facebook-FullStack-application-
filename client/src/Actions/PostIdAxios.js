import { FindPost } from "../Redux/Slices/FindPublications"
import axios from '../utils/axios'
export const PostIdFind = (id) => {
    return async (dispatch) => {
        try {
            dispatch(FindPost.actions.fecthLoading())
            const response = await axios.get(`/api/post/get/${id}`)
            console.log(response.data)
            dispatch(FindPost.actions.fetchSuccess({
                postId: response.data.post,
                comments: response.data.list
            }))
        } catch (error) {
            console.log(error)
        }
    }
}