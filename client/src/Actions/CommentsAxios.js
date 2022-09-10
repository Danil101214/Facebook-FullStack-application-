import { CommentsSlice } from "../Redux/Slices/CommentsSlice"
import axios from "../utils/axios"
export const CommentsCreate = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch(CommentsSlice.actions.fecthLoading())
            const response = await axios.post(`/comments/create/${id}`, data)
            console.log(response.data)
            dispatch(CommentsSlice.actions.fetchSuccess({
                comment: data.comment,
                message: response.data.message
            }))
        } catch (error) {
            console.log(error)
        }
    }
}