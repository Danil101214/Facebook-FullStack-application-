import axios from "../utils/axios.js"
import { CreatePublications } from "../Redux/Slices/CreatePublications"

export const CreatePost = (data) => {
    return async (dispatch) => {
        try {
            dispatch(CreatePublications.actions.fecthLoading())
            const response = await axios.post('/api/post/create', data)
            console.log(response)
            dispatch(CreatePublications.actions.fetchSuccess({
                title: data.title,
                description: data.description,
                image: data.image
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPostForUpdate = (id) => {
    return async (dispatch) => {
        try {
            dispatch(CreatePublications.actions.fecthLoading())
            const response = await axios.get(`/api/post/get/${id}`)
            console.log(response)
            dispatch(CreatePublications.actions.fetchUpdate({
                post: response.data
                /*title: data.title,
                description: data.description,
                image: data.image*/
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const PostUpdate = (data) => {
    return async (dispatch) => {
        try {
            dispatch(CreatePublications.actions.fecthLoading())
            const response = await axios.patch(`/api/post/update`, data)
            console.log(response)
            dispatch(CreatePublications.actions.fetchUpdateForPost({
                title: data.title,
                description: data.description,
                image: data.image
            }))
        } catch (error) {
            console.log(error)
        }
    }
}