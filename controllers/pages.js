const Note = require('../models/Note')
const Page = require('../models/Page')
const { ensureAuth } = require('../middleware/auth')


module.exports = {
    // getUser: async (req, res) => {
    //     const user = await req.user
    //     console.log(user)
    //     res.send(user)
    // },
    getPages: async (req, res) => {
        try{
            if(!req.user){
                res.send(false)
            }else{
                const pages = await Page.find({user: req.user._id})
                res.send({pages: pages})
            }
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
            res.sendStatus(200)
        }catch(err){
            console.log(err)
        }
    },
    deletePage: async (req, res) => {
        try{
            await Page.findOneAndDelete({ _id: req.body.pageId })
            res.sendStatus(200)
        }catch(err){
            console.log(err)
        }
    },
    getNotes: async (req,res) => {
        try{
            if(!req.user){
                res.send(false)
            }else{
                const notes = await Note.find({})
                res.send({notes: notes})
            }
            // const notes = await Note.find({})

            // res.send({ notes: notes })
        }catch(err){
            console.log(err)
        }
    },
    createNote: async (req, res) => {

        const colorPaletteOne = [0,'#85c8f5','#93fadb','#d2ff8f','#faaa88','#ff5a51']

        const color = colorPaletteOne[req.body.rating];

        try {
            await Note.create({
                note: req.body.note, 
                page: req.body.page._id,
                color: color,
                rating: req.body.rating,
                completed: false
            })

            res.json({
                note: req.body.note, 
                page: req.body.page._id,
                color: color,
                rating: req.body.rating,
                completed: false
            })
        }catch(err){
            console.log(err)
        }
     },
     updateComplete: async(req,res) => {
        try{
            await Note.findOneAndUpdate
            ({
                _id: req.body.noteId
            }, {
                completed: !req.body.comp
            })
            res.send(true)
        }catch(err){
            console.log(err)
        }
     },
    // updatePos: async (req, res) => {
    //     console.log(req.body)
    //     try{
    //         await Note.findOneAndUpdate({
    //             _id: req.body.noteId
    //         },{
    //             position: {
    //                 x: req.body.position.x,
    //                 y: req.body.position.y
    //             }
    //         })

    //         res.send({
    //             x: req.body.position.x,
    //             y: req.body.position.y
    //         })
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
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
            res.sendStatus(200)
        }catch(err){
            console.log(err)
        }
    }
}