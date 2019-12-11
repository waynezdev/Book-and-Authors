const BookModel = require('./../database/models/book_model')

// Logic for creating a resource
async function create (req, res) {
  let { name, summary, author } = req.body // Destructuring off the name, bio and gender from the req.body
  console.log(name,summary, author);
  let book = await BookModel.create({ name, summary, author }) // Creating the book
    .catch(err => res.status(500).send(err))
  res.redirect('/books') // Redirect to /books
}

// Showed a list of all the resources
async function index (req, res) {
  let books = await BookModel.find() // Extracting all the books from the DB
  res.render('book/index', { books }) // Render the 'author/index view' pass it the books
}

// Shows the form to create the resource
function make (req, res) {
  res.render('book/new')
}

// The logic for the Show controller
async function show (req, res) {
  //   console.log(req.params)
  let { id } = req.params // Destructure the id off the params.
  let book = await BookModel.findById(id) // Find the author by id and add save it to the variable author
  res.render('book/show', { book }) // render the 'author/show' and pass it the {author}
}

// Logic for deleting one single author
async function destroy (req, res) {
  let { id } = req.params // Destructure off the id off req.params
  await BookModel.findByIdAndRemove(id) // Delete the author by finding them by the id
  res.redirect('/book') // Redirect the user to the index page of all the books
}

// Logic for showing the form for editing an author
async function edit (req, res) {
  let { id } = req.params // Destructure off the id off req.params
  let book = await BookModel.findById(id) // query the DB for the author by ID
  res.render('book/edit', { author }) // Pass that author through to 'books/edit'
}

// The logic for updating by ID
async function update (req, res) {
  let { name, summary, author } = req.body // Destructure name, bio and gender off req.body
  console.log(req.params)
  let { id } = req.params // Destructure off the id off req.params
  await BookModel.findByIdAndUpdate(id, { name, summary, author }) // Update the author. Find by the id and then update with the new name, bio and gender
  res.redirect(`/book/${id}`) // Redirect to the show page for author we just updated
}

module.exports = {
  create,
  index,
  make,
  show,
  update,
  edit,
  destroy
}
