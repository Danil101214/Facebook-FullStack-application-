const Router = require('express')
const PostController = require('../Controller/PostController.js')
const path = require('path')
const multer = require('multer')
const CheckAuth = require('../Middleware/CheckAuth.js')
const routerPost = new Router()

const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage})
routerPost.post('/post/create', CheckAuth, upload.single('image'), PostController.create)
routerPost.get('/post/get', PostController.getAll)
routerPost.get('/post/get/:id', PostController.getOne)
routerPost.patch('/post/update', PostController.update)
routerPost.delete('/post/delete/:id', CheckAuth, PostController.delete)

module.exports = routerPost