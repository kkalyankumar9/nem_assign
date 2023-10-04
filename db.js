const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://kkalyan:kalyan@cluster0.iisergf.mongodb.net/nodepsc?retryWrites=true&w=majority")

module.exports={connection}