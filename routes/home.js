const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getPages)
router.post('/createPage', homeController.createPage)
router.put('/select', homeController.selectPage)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.delete('/deletePage', homeController.deletePage)


module.exports = router


