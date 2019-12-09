const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const AuthorController = require('./controllers/author_controller') // Bring in the AuthorController

// Remember the pattern
// router.<verb>('url', <controller>.<function>)

router.get('/authors', AuthorController.index)

router.post('/authors', AuthorController.create)

router.get('/authors/new', AuthorController.make)

// Show is the name chosen because of rails naming convention. We could choose anything
// The ":" indicates there is a variable or wild card coming into the route
// What we put after the ":" will be made avalible under params in the controller
router.get('/authors/:id', AuthorController.show)

module.exports = router
