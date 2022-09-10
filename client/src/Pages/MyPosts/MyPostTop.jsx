import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { MyPosts } from '../../Actions/MyPostAxios'
import MyPostComponents from '../../Components/MyPostComponents/MyPostComponents'
import Spinner from '../../Components/Spinner/Spinner'
const MyPostTop = () => {
    let {post, isLoading} = useSelector(state => state.AuthmePost)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MyPosts())
    }, [dispatch])
    if (isLoading) {
      return <Spinner />
    }
    if(post == 0) {
      return <h1>Пока постов нету</h1>
    }
  return (
    <div>
      {post?.map((MyPost, index) =>
        <MyPostComponents MyPost={MyPost} key={index} /> 
      )}
      </div>
  )
}

export default MyPostTop