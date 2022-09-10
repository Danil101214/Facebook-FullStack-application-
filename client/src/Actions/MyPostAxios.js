import { MyPost } from "../Redux/Slices/MyPosts.js"
import axios from "../utils/axios.js"
export const MyPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(MyPost.actions.fecthLoading())
            const response = await axios.get('/auth/me/MyPosts')
            dispatch(MyPost.actions.fetchSuccess({
                post: response.data
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const MyPostDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(MyPost.actions.fecthLoading())
            const response = await axios.delete(`/api/post/delete/${id}`)
            dispatch(MyPost.actions.fetchDelete({
                postdelete: response.data,
                message: response.data.message
            }))
        } catch (error) {
            console.log(error)
        }
    }
}