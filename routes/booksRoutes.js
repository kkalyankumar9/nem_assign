const express = require("express")
const { BooksModel } = require("../models/bookModel")

const booksRouter=express.Router()

booksRouter.post("/create",async(req,res)=>{

    try {
        const data=new BooksModel(req.body)
        await data.save()
        res.status(200).send({msg:"New data created","data":data})
        console.log(data)
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
booksRouter.put("/update/:id",async(req,res)=>{
    let {id}=req.params

    try {
        const data=await BooksModel.findOne({_id:id})
        if(data){
            await BooksModel.findByIdAndUpdate({_id:id},req.body)
            res.status(200).send({msg:"data updated"})
        }
        
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
booksRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params
    try {
        const data=await BooksModel.findOne({_id:id})
        if(data){
            await BooksModel.findByIdAndDelete({_id:id})
            res.status(200).send({msg:"data deleted"})
        }
        
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
booksRouter.get("/",async(req,res)=>{
   
    try {
        const data=await BooksModel.find(req.body)

        res.status(200).send({"msg":data})
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
booksRouter.get("/:id",async(req,res)=>{
    let {id}=req.params
    try {
        const data=await BooksModel.findById(id)
        if(data){
            res.status(200).send({"msg":data})
        }else{
            res.status(500).send({"msg":"data not found!"})
            return
        }
        res.status(200).send({"msg":data})
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
booksRouter.get("/search",async(req,res)=>{
   const {query}=req.query
    try {
        const data=await BooksModel.find({$or:[{title:{$regex:query,$option:"i"}},
        {author:{$regex:query,$option:"i"}}]
    })
        if(data){
            res.status(200).send({"msg":data})
            console.log(data)
        }
      
    } catch (error) {
        res.status(500).send({"err":error})
    }
})
module.exports={booksRouter}