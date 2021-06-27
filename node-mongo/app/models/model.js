const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: String,
    res_review: String
})

module.exports = mongoose.model('Reviews', BookSchema)