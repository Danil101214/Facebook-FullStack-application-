const express = require('express')
require('dotenv').config()
const moongose = require('mongoose')
const routerPost = require('./Router/PostRouter.js')
const router = require('./Router/UserRouter.js')
const cors = require('cors')
const routerComments = require('./Router/CommentsRouter.js')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', router)
app.use('/api', routerPost)
app.use('/comments', routerComments)
app.use('/static', express.static("assets"))
const startApp = async (req, res) => {
    try {
        await moongose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(process.env.PORT, () => {
            console.log(`Server started on PORT ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json('Ошибка работы сервера')
    }
}

startApp()