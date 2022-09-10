const {default: mongoose} = require('mongoose')

const Comments = new mongoose.Schema({
    username: {type: String},
    comment: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: ''},
}, {timestamps: true})

module.exports = mongoose.model('Comments', Comments)