const {Router} = require("express")
const { getAllAuthors, getOneAuthor, AddAuthor, updateAuthor, deleteAuthor } = require("../controller/aftor.controller")

const AuthorRouter=Router()
AuthorRouter.get("/get_all_Authors",getAllAuthors)
AuthorRouter.get("/get_one_Authors",getOneAuthor)
AuthorRouter.post("/add_Authors",AddAuthor)
AuthorRouter.put("/update_Authors",updateAuthor)
AuthorRouter.delete("/delete_Authors",deleteAuthor)

module.exports = AuthorRouter