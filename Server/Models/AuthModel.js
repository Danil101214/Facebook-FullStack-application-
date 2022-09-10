const {default: mongoose} = require('mongoose')
const User = new mongoose.Schema({
    username: {type: String, unigue: true, required: true},
    password: {type: String, required: true},
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    }]
}, {timestamps: true})

module.exports = mongoose.model('User', User)