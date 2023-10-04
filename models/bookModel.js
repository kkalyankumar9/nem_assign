const mongoose=require("mongoose")

const booksSchema=new mongoose.Schema(
    {
        title:String,
        author:String,
        ISBN:Number,
        description:String,
        pushlished_data:String

    },{versionKey:false})

const BooksModel=new mongoose.model("booksData",booksSchema)

module.exports={BooksModel}