const AuthorModel = require('./../database/models/author_model')

// logic for creating a resource
async function create (req, res) {
  let { name, bio, gender } = req.body // Destructuring off the name, bio and gender from the req.body
  let author = await AuthorModel.create({ name, bio, gender }) // Creating the author
    .catch(err => res.status(500).send(err))
  res.redirect('/authors') // Redirect to /authors
}

// showed a list of all the resources
async function index (req, res) {
  let authors = await AuthorModel.find() // Extracting all the authors from the DB
  res.render('author/index', { authors }) // Render the 'author/index view' pass it the authors
}

// shows the form to create the resource
function make (req, res) {
  res.render('author/new')
}

module.exports = {
  create,
  index,
  make
}
