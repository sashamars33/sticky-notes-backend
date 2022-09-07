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
        x: 50,
        y: 50
    }
})