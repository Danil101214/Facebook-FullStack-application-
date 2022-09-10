import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { GetPostAxios } from '../../Actions/GetPostAxios'
import GetPostComponent from '../../Components/GetPost/GetPostComponent'
import Spinner from '../../Components/Spinner/Spinner'
const GetPost = () => {
  const dispatch = useDispatch()
  const {post, isLoading} = useSelector(state => state.Post)
  useEffect(() => {
    dispatch(GetPostAxios())
  }, [dispatch])
  if(isLoading) {
    return <Spinner />
  }
  return (
    <div className='post' style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {post.map((postType, index) => 
              <GetPostComponent post={postType} key={index} />  
            )}
          </div>
  )
}

export default GetPost