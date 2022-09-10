const {default: mongoose} = require('mongoose')

const Post = new mongoose.Schema({
    username: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    views: {type: Number, default: 0},
    image: {type: String, default: ''},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: ''},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments', default: ''}]
}, {timestamps: true})

module.exports = mongoose.model('Post', Post)