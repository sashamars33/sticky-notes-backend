const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pages')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, pageController.getNotes)
router.post('/createNote', pageController.createNote)
router.put('/closePage'.pageController.closePage)
router.delete('/deleteNote', pageController.deleteNote)

module.exports = router