import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ABOUT_US, CREATE_POST, GET_POST, LOGIN, MY_POST, REGISTRATION } from '../Constants'
import './Style.css'
import { AuthSlice } from '../../Redux/Slices/AuthSlice'
const Navbar = () => {
    const {isAuth, username} = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    const logOutHandleClick = () => {
        dispatch(AuthSlice.actions.logOut())
    }
  return (
    <div className='Navbar'>
        <div className="Navbar__container">
            <div className="Navbar__item">
                <div className="Navbar__block1">
                    <ul>
                        <li><Link to={ABOUT_US} style={{color: 'white', textDecoration: 'none'}}>Facebook</Link></li>
                    </ul>
                </div>
                <div className="Navbar__block2">
                    <ul>
                    <li><Link to={ABOUT_US} style={{color: 'white', textDecoration: 'none'}}>About</Link></li>
                        <li><Link to={GET_POST} style={{color: 'white', textDecoration: 'none', marginLeft: 15}}>Publications</Link></li>
                    </ul>
                </div>
                <div className="Navbar__block3">
                    <ul>
                        {isAuth ? 
                        <>
                        <li><Link to={CREATE_POST} style={{color: 'white', textDecoration: 'none'}}>Добавить публикацию</Link></li>
                        <li><Link to={MY_POST} style={{color: 'white', textDecoration: 'none'}}>{username}</Link></li>
                        <li><a style={{color: 'white', textDecoration: 'none', cursor: 'pointer'}} onClick={logOutHandleClick}>Выйти</a></li>
                        </> :
                        <li><Link to={REGISTRATION} style={{color: 'white', textDecoration: 'none'}}>Зарегистрироваться</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar