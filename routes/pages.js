const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pages')
const { ensureAuth } = require('../middleware/auth')



router.get('/', pageController.getPages)
// router.get('/user', pageController.getUser)
router.post('/createpage', pageController.createPage)
router.put('/select', pageController.selectPage)
router.delete('/deletepage', pageController.deletePage)
router.get('/notes', pageController.getNotes)
router.post('/createnote', pageController.createNote)
router.put('/updatepos', pageController.updatePos)
router.put('/closepage', pageController.closePage)
router.delete('/deletenote', pageController.deleteNote)
router.delete('/deletenotes', pageController.deleteNotes)

module.exports = router