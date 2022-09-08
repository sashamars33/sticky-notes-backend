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
    selected: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Page', PageSchema)