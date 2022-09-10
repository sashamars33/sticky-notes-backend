const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    position: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model('Note', NoteSchema)