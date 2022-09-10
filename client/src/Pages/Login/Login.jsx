import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AuthLoginAxios } from '../../Actions/AuthAxios'
import { REGISTRATION } from '../../Components/Constants'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
      const {message, error} = useSelector(state => state.Auth)
      if(message) {
        toast(message)
      } else if (error) {
        toast(error)
      }
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const dispatch = useDispatch()
      const handleClick = (e) => {
        e.preventDefault()
        dispatch(AuthLoginAxios({username: username, password: password}))
      }
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>Вход</h1>
          <form onSubmit={handleClick} className='form'>
            <div className="formBlock">
            <div className="formBlock1">
              <label htmlFor="username" style={{fontSize: 18, fontWeight: 600}}>Имя</label>
            <input style={{width: 350, height: 30, fontSize: 18, marginTop: 5}} placeholder='Введите своё имя' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></div>
            <div className="formBlock2">
            <label htmlFor="password" style={{fontSize: 18, fontWeight: 600, marginTop: 5}}>Пароль</label>
            <input style={{width: 350, height: 30, fontSize: 18, marginTop: 5}} placeholder='Введите свой пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <p>Не имеешь аккаунта <Link to={REGISTRATION}>зарегистрируйся</Link></p>
            <button type='submit' className='button' onClick={handleClick}>Войти</button>
            </div>
          </form>
        </div>
      )
    }

export default Login