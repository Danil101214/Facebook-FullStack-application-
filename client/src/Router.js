import { ABOUT_US, CREATE_POST, GET_POST, LOGIN, MY_POST, POST_ABOUT, POST_UPDATE, REGISTRATION, USER_ID_INFORMATION } from "./Components/Constants";
import CreatePostTop from "./Pages/CreatePost/CreatePost";
import GetPost from "./Pages/GetPost/GetPost";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PostAbout from "./Pages/PostAbout/PostAbout";
import MyPostTop from "./Pages/MyPosts/MyPostTop";
import UserId from "./Pages/UserId/UserId";
import PostUpdate from "./Pages/PostUpdate/PostUpdate";
export const authRouter = [
    {
        path: CREATE_POST,
        element: <CreatePostTop />
    },
    {
        path: GET_POST,
        element: <GetPost />
    },
    {
        path: LOGIN,
        element: <Login />
    },
    {
        path: REGISTRATION,
        element: <Registration />
    },
    {
        path: ABOUT_US,
        element: <AboutUs />
    },
    {
        path: POST_ABOUT,
        element: <PostAbout />
    },
    {
        path: MY_POST,
        element: <MyPostTop />
    },
    {
        path: USER_ID_INFORMATION,
        element: <UserId />
    },
    {
        path: POST_UPDATE,
        element: <PostUpdate />
    }
]

export const publicRouter = [
    {
        path: GET_POST,
        element: <GetPost />
    },
    {
        path: LOGIN,
        element: <Login />
    },
    {
        path: REGISTRATION,
        element: <Registration />
    },
    {
        path: ABOUT_US,
        element: <AboutUs />
    },
    {
        path: POST_ABOUT,
        element: <PostAbout />
    },
    {
        path: USER_ID_INFORMATION,
        element: <UserId />
    }
]