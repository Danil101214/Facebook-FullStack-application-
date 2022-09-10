import { configureStore } from "@reduxjs/toolkit"
import AuthSlices from "./Slices/AuthSlice"
import GetPost from "./Slices/GetPost"
import FindPost from '../Redux/Slices/FindPublications.js'
import CreatePublications from "./Slices/CreatePublications"
import MyPost from "./Slices/MyPosts"
import UserId from "./Slices/UserId"
import CommentsSlice from "./Slices/CommentsSlice"
const store = configureStore({
    reducer: {
        Auth: AuthSlices,
        Post: GetPost,
        PostFind: FindPost,
        CreatePost: CreatePublications,
        AuthmePost: MyPost,
        User: UserId,
        Comments: CommentsSlice
    }
})

export default store