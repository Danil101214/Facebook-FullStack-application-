const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        next()
    }

    try {
        const token =(req.headers.authorization || '').replace(/Bearer\s?/, '')
        if(!token) {
            return res.status(400).json({message: 'Пользователь не авторизован'})
        }
        const decodedData = jwt.verify(token, process.env.SECRET)
        req.userId = decodedData.id
        next()
    } catch (error) {
        console.log(error)
    }
}