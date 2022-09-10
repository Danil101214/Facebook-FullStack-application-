const User = require('../Models/AuthModel.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../Models/PostModel.js')

class AuthController {
    async registration(req, res) {
        try {
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate) {
                return res.status(400).json({message: `Пользователь ${username} уже существует.`})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({username, password: hashPassword})
            const token = jwt.sign({id: user}, process.env.SECRET, {expiresIn: '30d'})
            await user.save()
            res.status(201).json({message: 'Пользователь успешно создан', user, token: token})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка при создании пользователя, попробуйте ещё раз', error})
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует.'})
            }
            const hasPassword = bcrypt.compareSync(password, user.password)
            if(!hasPassword) {
                return res.status(400).json({message: `Пользователя с таким паролем не существует.`})
            }
            const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '30d'})
            res.status(201).json({token: token, user, message: 'Пользователь успешно вошёл'})
        } catch (error) { 
            console.log(error)
            res.status(400).json({message: 'Проверьте своё имя или пароль', error})
        }
    }
    async users(req, res) {
        try {
            const user = await User.findById(req.userId)
            if(!user) {
                return res.status(400).json({message: 'Такого пользователя не существует.'})
            }
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
        }
    }
    async getPosts(req, res) {
        try {
            const user = await User.findById(req.userId)
            const list = await Promise.all(
                user.posts.map((post) => {
                    return Post.findById(post._id)
                })
            )
            res.status(200).json(list)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка работы сервера', error})
        }
    }
    async authMeUser(req, res) {
        try {
            const {id} = req.params
            const user = await User.findById(id)
            const list = await Promise.all(
                user.posts.map(post => {
                    return Post.findById(post._id)
                })
            )
            res.status(200).json({register: user.createdAt, name: user.username, list})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка сервера', error})
        }
    }
}

module.exports = new AuthController