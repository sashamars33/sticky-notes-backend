const Note = require('../models/Note')
const Page = require('../models/Page')

module.exports = {
    getNotes: async (req,res) => {
        try{
            const pageId = await Page.find({ selected: true })
            const notes = await Note.find({
                'page': { $in: pageId}
            })

            res.send({ notes: notes })
        }catch(err){
            console.log(err)
        }
    },
    createNote: async (req, res) => {
        try {
            const colorPaletteOne = ['#5B8D8Eff','#7CA4A3ff','#8BB0C3ff','#8DBFB3ff','#7CB089ff','#83C5CBff','#A2DEEEff','#BCB4E0ff','#C6C4F6ff','#B3AADEff']

            const color = colorPaletteOne[Math.floor(Math.random()*(colorPaletteOne.length))];

            const pageId = await Page.find({ selected: true })

            await Note.create({
                note: req.body.note, 
                page: pageId,
                color: color,
                position: {
                    x: 50,
                    y: 50
                }
            })

            res.send('new note created')
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
        }catch(err){
            console.log(err)
        }
    },
    deleteNote: async (req, res) => {
        try{
            await Note.findOneAndDelete({_id: req.body.noteId})
        }catch(err){
            console.log(err)
        }
    }
}