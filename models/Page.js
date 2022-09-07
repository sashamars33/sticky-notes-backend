const mongoose = require('mongoose')

const PageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    selected: false
})

module.exports = mongoose.model('Page', PageSchema)