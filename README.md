# Step - 1
### Starting point

- If you are reading this you have successfully cloned this lessons repo. **Go you**
- Run an npm install. We need to do this because we dont push up node_modules so we need to manually install them
- Run npm `run npm server` and navigate to `http://localhost:3000/authors`
- Run `git branch -a` to see all the available branches. 
- You can check out to any step of the lesson by typing in `git checkout <branch_name>`
- Possible errors for this step
    - You forgot to cd into your directory before funning npm install
    - You forgot to cd into your directory before funning npm run server
    - There is something already running on 3000. Either choose a different port or run 
    `lsof -ti:3000 | xargs kill` to kill the port and then run `run npm server` again.
---

# Step - 2
### Creating a full crud resource
- Create a Show route for Authors: 
in routes.js add `router.get("/authors/:id", AuthorController.show)`
- Create a Show controller for Authors in the author_controller.js (dont forget to export the new function): 

```
async function show(req, res) {
  let { id } = req.params;
  let author = await AuthorModel.findById(id);
  res.render("author/show", { author });
}
```
- Create the show.handlebars for Authors in the views/author directory:

```
<h1>Author</h1>
<p>Name: {{author.name}} </p>
<p>Bio: {{author.bio}}</p>
<p>Gender: {{author.bio}}</p>
```

- Create a Link to the Show Author page. (Done on the index page)

```
<a href="/authors/{{this._id}}">View Author</a>
```
- Add a link to the index page for UPDATE and DELETE authors. To get you started here is the link you will need to delete a author. NB it is not attached to a controller or view yet.
`<a href="/authors/{{this._id}}?_method=DELETE">Delete Author</a>`

- Possible errors for this step 
    - Typos (its always a typo)
    - You forgot to export the show function
    - Using 'this.' instead of 'author.'
    - not having the `?_method=DELETE"` on your link tag

### Step 2 Challenge

- Create the delete method
- Create an update method, and views
