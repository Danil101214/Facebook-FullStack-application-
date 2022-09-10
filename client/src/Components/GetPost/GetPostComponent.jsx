import React from 'react'
import './Style.css'
import user from '../../Assets/user.png'
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
const GetPostComponent = ({post}) => {
  const navigate = useNavigate()
  return (
    <div className="post__container">
    <div className="post__item">
    <img className='image1' style={{width: 550, height: '309.21px'}} src={post.image} onClick={() => navigate(`/post/${post._id}`)}/>
    <div className="block__user">
    <img src={user} width={30} height={30} style={{padding: 10}}/>
    <div className="block__span">
    <p style={{margin: 0, cursor: 'pointer'}} onClick={() => navigate(`/useridinformation/${post.author}`)}>{post.username}</p>
    <Moment date={post.createdAt} format='D MMM YYYY'/>
        <h1 style={{margin: 0, marginBottom: 10}}>{post.title}</h1> 
        <p className='description'>{post.description}</p>
        <p>Просмотры: {post.views}</p>
        </div> 
    </div>
      </div>
    </div>
  )
}

export default GetPostComponent