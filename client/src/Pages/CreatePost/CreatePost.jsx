import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { CreatePost } from '../../Actions/CreatePost'
import { useNavigate } from 'react-router-dom'
import './Style.css'
const CreatePostTop = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const handleClick = useCallback((event) => {
    event.preventDefault()
    const formData = new FormData;
    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', image)
    dispatch(CreatePost(formData)).then(() => {
      navigate('/getPost')
    })    
    }, [dispatch, title, description, image])
    const clearInformation = () => {
      setTitle('')
      setDescription('')
      setImage(null)
    }
    return (
    <>
    <h1 style={{textAlign: 'center'}}>Создать публикацию</h1>
    <div className='form__form'>
      <form onSubmit={handleClick}>
      <label htmlFor="">Фотография для публикации</label>
      <input type="file" multiple style={{maxWidth: 600}} onChange={(e) => setImage(e.target.files[0])}/>
        <label htmlFor="">Название</label>
      <input className='input' type="text" placeholder='Введите название публикации.' onChange={(e) => setTitle(e.target.value)}/>
      <label htmlFor="">Описание</label>
      <textarea className='input1' type="text" placeholder='Введите описание публикации.' onChange={(e) => setDescription(e.target.value)}/>
      <button className='button1' onClick={handleClick}>Создать публикацию</button>
      <button className='button2' onClick={() => clearInformation}>Очистить</button>
      </form>
    </div>
    </>
  )
}

export default CreatePostTop