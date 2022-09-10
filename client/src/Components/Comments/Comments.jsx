import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommentsCreate } from '../../Actions/CommentsAxios'
import {useParams, useNavigate} from 'react-router-dom'
import './Style.css'
import { toast } from 'react-toastify'
const Comments = () => {
    const {id} = useParams()
    const {comments} = useSelector(state => state.PostFind)
    const {message} = useSelector(state => state.Comments)
    const {isAuth} = useSelector(state => state.Auth)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(CommentsCreate(id, {comment: comment}))
      }
      if(message) {
        toast(message)
      }
  return (
    <>
    {isAuth &&
    <>
    <h1 style={{marginBottom: 10, marginTop: 10}}>Комментарии: </h1>
        {comments?.map(comment =>
          <li className='li1'>{comment.username}: {comment.comment}</li>
          )}
    <div className='block__comments'>
        <textarea type="text" className='input2' placeholder='Добавите комментарий' onChange={(e) => setComment(e.target.value)}/>
        <button className='button3' onClick={handleClick}>Отправить</button>
    </div>
    </>
    }
    </>
  )
}

export default Comments