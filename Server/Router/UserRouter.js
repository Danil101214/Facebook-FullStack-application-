const Router = require('express')
const AuthContoller = require('../Controller/AuthContoller')
const CheckAuth = require('../Middleware/CheckAuth.js')

const router = new Router()

router.post('/registration', AuthContoller.registration)
router.post('/login', AuthContoller.login)
router.get('/users', CheckAuth, AuthContoller.users)
router.get('/me/MyPosts', CheckAuth, AuthContoller.getPosts)
router.get('/user/me/:id', AuthContoller.authMeUser)
module.exports = router