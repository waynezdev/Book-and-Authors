const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const AuthorController = require('./controllers/author_controller') // Bring in the AuthorController

// Remember the pattern
// router.<verb>('url', <controller>.<function>)

router.get('/authors', AuthorController.index)

router.post('/authors', AuthorController.create)

router.get('/authors/new', AuthorController.make)

module.exports = router
