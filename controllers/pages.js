const Note = require('../models/Note')
const Page = require('../models/Page')

module.exports = {
    getPages: async (req, res) => {

        console.log(req.user, req.user.id)
        try{
            const pages = await Page.find({userId:req.user.id})

            console.log(pages)
            res.send({ pages: pages })
        }catch(err){
            console.log(err)
        }
    },
    createPage: async (req, res) => {
        try {
            await Page.create({
                title: req.body.pageTitle,
                user: req.user.id,
                selected: false
            })

            res.send({
                title: req.body.pageTitle,
                user: req.user.id,
                selected: false
            })
        }catch(err){
            console.log(err)
        }
    },
    selectPage: async (req, res) => {
        console.log(req.body.pageId)
        try{
            await Page.findOneAndUpdate
            ({
                _id: req.body.pageId
            }, {
                selected: true
            })
            res.send(true)
        }catch(err){
            console.log(err)
        }
    },
    deleteNotes: async (req, res) => {
        try{
            await Note.deleteMany({page: req.body.pageId})
            res.send(200)
        }catch(err){
            console.log(err)
        }
    },
    deletePage: async (req, res) => {
        try{
            await Page.findOneAndDelete({ _id: req.body.pageId })
            res.send(200)
        }catch(err){
            console.log(err)
        }
    },
    getNotes: async (req,res) => {
        try{
            // const pageId = await Page.find({ selected: true })
            const notes = await Note.find({})

            res.send({ notes: notes })
        }catch(err){
            console.log(err)
        }
    },
    createNote: async (req, res) => {

        const colorPaletteOne = ['#5B8D8Eff','#7CA4A3ff','#8BB0C3ff','#8DBFB3ff','#7CB089ff','#83C5CBff','#A2DEEEff','#BCB4E0ff','#C6C4F6ff','#B3AADEff']

        const color = colorPaletteOne[Math.floor(Math.random()*(colorPaletteOne.length))];

        console.log(req.body.page._id, color)

        try {
            await Note.create({
                note: req.body.note, 
                page: req.body.page._id,
                color: color,
                position: {
                    x: 50,
                    y: 50
                }
            })

            res.json({
                note: req.body.note, 
                page: req.body.page._id,
                color: color,
                position: {
                    x: 50,
                    y: 50
                }
            })
        }catch(err){
            console.log(err)
        }
    },
    updatePos: async (req, res) => {
        console.log(req.body)
        try{
            await Note.findOneAndUpdate({
                _id: req.body.noteId
            },{
                position: {
                    x: req.body.position.x,
                    y: req.body.position.y
                }
            })

            res.send({
                x: req.body.position.x,
                y: req.body.position.y
            })
        }catch(err){
            console.log(err)
        }
    },
    closePage: async (req, res) => {
        try{
            await Page.findOneAndUpdate
            ({
                _id: req.body.pageId
            }, {
                selected: false
            })
            res.send(true)
        }catch(err){
            console.log(err)
        }
    },
    deleteNote: async (req, res) => {
        try{
            await Note.findOneAndDelete({_id: req.body.noteId})
            res.send(200)
        }catch(err){
            console.log(err)
        }
    }
}