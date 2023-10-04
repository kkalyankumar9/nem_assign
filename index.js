const express=require("express");
const { connection } = require("./db");
const { booksRouter } = require("./routes/booksRoutes");

const app =express();
app.use(express.json())
app.use("/books",booksRouter)

app.listen(8000,async()=>{
    try {
         await connection
         console.log("MongoDB connected")
        console.log("Server Running at 8000")
    } catch (error) {
        console.log(error)

        
    }
})