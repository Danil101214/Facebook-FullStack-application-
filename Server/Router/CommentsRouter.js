const Router = require('express')
const CommentsController = require('../Controller/CommentsController.js')
const CheckAuth = require('../Middleware/CheckAuth.js')

const routerComments = new Router()

routerComments.post('/create/:id', CheckAuth, CommentsController.createComment)

module.exports = routerComments