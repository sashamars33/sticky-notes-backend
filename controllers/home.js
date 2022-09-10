// const Page = require('../models/Page')
// const Note = require('../models/Note')

// module.exports = {
//     getPages: async (req, res) => {

//         console.log(req.user, req.user.id)
//         try{
//             const pages = await Page.find({userId:req.user.id})

//             res.send({ pages: pages })
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createPage: async (req, res) => {
//         try {
//             await Page.create({
//                 title: req.body.pageTitle,
//                 user: req.user._id,
//                 selected: false
//             })
//         }catch(err){
//             console.log(err)
//         }
//     },
//     selectPage: async (req, res) => {
//         try{
//             await Page.findOneAndUpdate
//             ({
//                 _id: req.body.pageId
//             }, {
//                 selected: true
//             })
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deletePage: async (req, res) => {
//         try{
//             const notesToDelete = await Note.find({page: req.body.pageId})

//             await Note.deleteMany({ page: { $gte: notesToDelete }})

//             await Page.findOneAndDelete({ _id: req.body.pageId })
//         }catch(err){
//             console.log(err)
//         }
//     }
// }

