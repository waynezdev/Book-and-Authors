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

### Next Steps
- In order to have a full CRUD app we will need to make use of dynamic routing. 
- Create a Show route for Authors
- Create a Show controller for Authors
- Create a Show View for Authors
- Create a Link to the Show Author page. (Done on the index page)
