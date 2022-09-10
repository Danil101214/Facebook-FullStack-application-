import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostForUpdate } from '../../Actions/CreatePost'
const PostUpdate = () => {
    const {title, description, image} = useSelector(state => state.CreatePost.post)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [imageTop, setImageTop] = useState(null)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostForUpdate(id))
    }, [dispatch, id])
    const handleUpdateClick = useCallback(() => {
        const formData = new FormData;
        formData.append('title', name)
        formData.append('description', desc)
        formData.append('image', imageTop)
        dispatch(PostUpdate(formData))
    })
  return (
    <>
    <h1 style={{textAlign: 'center'}}>Обновить публикацию</h1>
    <div className='form__form'>
      <form onSubmit={() => handleUpdateClick}>
      <label htmlFor="">Фотография для публикации</label>
      <img src={image} alt="" />
      <input type="file" style={{maxWidth: 600}} onChange={(e) => (e.target.files[0])}/>
        <label htmlFor="">Название</label>
      <input className='input' type="text" value={name} placeholder='Введите название публикации.' onChange={(e) => title(setName(e.target.value))}/>
      <label htmlFor="">Описание</label>
      <textarea className='input1' value={description} type="text" placeholder='Введите описание публикации.' onChange={(e) => setDesc(e.target.value)}/>
      <button className='button1' onClick={() => handleUpdateClick}>Обновить публикацию</button>
      <button className='button2'>Очистить</button>
      </form>
    </div>
    </>
  )
}

export default PostUpdate