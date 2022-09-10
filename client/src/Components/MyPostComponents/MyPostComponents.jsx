import React, { useEffect } from 'react'
import Moment from 'react-moment';
import user from '../../Assets/user.png'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { MyPostDelete } from '../../Actions/MyPostAxios';
import './Style.css'
const MyPostComponents = ({MyPost}) => {
  //const {message} = useSelector(state => state.AuthmePost)
  const dispatch = useDispatch()
  const deletePost = () => {
    dispatch(MyPostDelete(MyPost._id))
  }
  /*if(deletePost) {
    toast(message)
  }*/
  const navigate = useNavigate()
  return (
<div className='PostAbout'>
<div className="PostAbout__container">
          <img className='imageTop' style={{width: 550}} src={MyPost.image}/>
          <div className="block__user">
    <img src={user} width={30} height={30} style={{padding: 10}}/>
    <div className="block__span">
    <p style={{margin: 0}}>{MyPost.username}</p>
    <Moment date={MyPost.createdAt} format='D MMM YYYY'/>
        <h1 style={{margin: 0, marginBottom: 10}}>{MyPost.title}</h1> 
        <ReactMarkdown children={MyPost.description}/>
        <div className='block__comments'>
        <button className='button4' onClick={() => navigate(`/postUpdate/${MyPost._id}`)}>Обновить</button>
        <button className='button5' onClick={deletePost}>Удалить</button>
        </div>
        </div> 
    </div>
      </div>
    </div>
  )
}

export default MyPostComponents