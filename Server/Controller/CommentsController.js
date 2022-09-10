const Comments = require("../Models/Comments.js")
const Post = require('../Models/PostModel.js')
const User = require('../Models/AuthModel.js')

class CommentsController {
    async createComment(req, res) {
        try {
            const {id} = req.params
            const {comment} = req.body
            const user = await User.findById(req.userId)
            if(!comment) {
                res.status(400).json({message: 'Коментарий не может быть пустым.'})
            }
            const comments = new Comments({username: user.username, author: user._id, comment: comment})
            await comments.save()
            try {
                await Post.findByIdAndUpdate(id, {$push: {comments}})
            } catch (error) {
                console.log(error)
            }
            res.status(200).json({message: 'Комментарий успешно добавлен' ,comments})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CommentsController