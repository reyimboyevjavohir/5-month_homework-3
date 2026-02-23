const  express = require("express")
const cors = require("cors")
const connectDb = require("./config/db.config")
const AuthorRouter = require("./router/aftor.routes")
require("dotenv").config()

 const PORT= process.env.PORT ||3001
const app= express()
 

//router
app.use(AuthorRouter)

connectDb()
app.use(express.json())
 app.use(cors())
 app.listen(PORT,()=>{
    console.log("server ishlayabdi"+PORT);
    
 })