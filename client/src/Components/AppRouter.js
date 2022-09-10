import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRouter, publicRouter } from '../Router'

const AppRouter = () => {
    const isAuth = true
  return (
    <div>
        <Routes>
            {isAuth && authRouter.map(({path, element}) =>
                <Route path={path} element={element} />    
            )}
            {publicRouter.map(({path, element}) =>
                <Route path={path} element={element} />    
            )}
        </Routes>
    </div>
  )
}

export default AppRouter