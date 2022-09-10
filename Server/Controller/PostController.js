const User = require('../Models/AuthModel.js')
const Post = require('../Models/PostModel.js')
const Comments = require('../Models/Comments.js')
class PostController {
    async create(req, res) {
        try {
            const {title, description} = req.body
            const user = await User.findById(req.userId)
            const post = await Post.create({
                username: user.username,
                title,
                description,
                image: `http://localhost:5000/static/${req.file.filename}`,
                author: req.userId,
            })
            await post.save()
            await User.findByIdAndUpdate(req.userId, {$push: {posts: post}})
            res.status(200).json(post) 
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка при создании публикации, попробуйте ещё раз', error})
        }
    }
    async getAll(req, res) {
        try {
            const post = await Post.find()
            res.status(200).json(post)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка сервера', error})
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            const post = await Post.findByIdAndUpdate(id, {$inc: {views: 0.5}})
            const list = await Promise.all(
                post.comments.map(comment => {
                    return Comments.findById(comment._id)
                })
            )
            res.status(201).json({post: post, list: list})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка сервера', error})
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            updatePost.save()
            res.status(201).json({message: 'Пост успешно изменён', updatePost})
        } catch (error) {
            res.status(400).json({message: 'Что-то пошло не так', error})    
        }
    }
    async delete(req, res) {
        const {id} = req.params
        const deletePost = await Post.findByIdAndDelete(id)

        await User.findByIdAndUpdate(req.userId, {$pull: {posts: id}})
        res.status(200).json({message: 'Публикация успешно удалена, перезагрузите страницу чтобы в этом убедится', deletePost})
    }
}

module.exports = new PostController