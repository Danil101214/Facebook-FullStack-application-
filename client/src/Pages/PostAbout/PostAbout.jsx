import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FindUser } from '../../Redux/Slices/FindPublications'
import Moment from 'react-moment';
import user from '../../Assets/user.png'
import ReactMarkdown from 'react-markdown'
import './Style.css'
import Comments from '../../Components/Comments/Comments';
import { PostIdFind } from '../../Actions/PostIdAxios';
import Spinner from '../../Components/Spinner/Spinner';
const PostAbout = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
      dispatch(PostIdFind(id))
  }, [dispatch, id])
    const {username, image, description, title, author, createdAt} = useSelector(state => state.PostFind.postId)
    const {isLoading} = useSelector(state => state.PostFind)
    const navigate = useNavigate()
    if(isLoading) {
      return <Spinner />
    }
  return (
    <div className='PostAbout'>
      <div className="PostAbout__container">
          <img className='imageTop' src={image}/>
          <div className="block__user">
    <img src={user} width={30} height={30} style={{padding: 10}}/>
    <div className="block__span">
    <p style={{margin: 0, cursor: 'pointer'}} onClick={() => navigate(`/useridinformation/${author}`)}>{username}</p>
    <Moment date={createdAt} format='D MMM YYYY'/>
        <h1 style={{margin: 0, marginBottom: 10}}>{title}</h1> 
        <ReactMarkdown children={description} className='descriptionTop'/>
        <Comments />
        </div> 
    </div>
      </div>
    </div>
  )
}

export default PostAbout