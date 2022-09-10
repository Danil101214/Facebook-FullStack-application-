import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { UserIdPost } from '../../Actions/UserIdPostAxios'
import Moment from 'react-moment'
import './Style.css'
import Spinner from '../../Components/Spinner/Spinner'
const UserId = () => {
    const {name, register} = useSelector(state => state.User.user)
    const {isLoading} = useSelector(state => state.User)
    const list = useSelector(state => state.User.user.list)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserIdPost(id))
    }, [dispatch, id])
    if(isLoading) {
      return <Spinner />
    }
  return (
    <>
    <div className="block__userTop">
    <p className='name'>Имя: {name}</p>
    <p className='sites'> На сайте с <Moment date={register} format='D MMM YYYY'/></p>
    </div>
    <div className='blockUser'>
        {list?.map((UserPost) => 
                <div className="post__User__container">
                <div className="post__item">
                <img className='image1' style={{height: '309.21px'}} src={UserPost.image}/>
                </div>
                <div className="block__user">
                <div className="block__User__span">
                    <h1 style={{margin: 0, marginBottom: 10}}>{UserPost.title}</h1> 
                    <p className='description'>{UserPost.description}</p>
                    <p>Просмотры: {UserPost.views}</p>
                    </div> 
                </div>
                  </div>
        )}
    </div>
    </>
  )
}

export default UserId