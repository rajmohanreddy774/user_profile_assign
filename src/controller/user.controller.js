const mongoose=require("mongoose");
const express=require("express");
const uploadfile=require("../middlleware/file_upload");
const user=require("../models/user.model");

const router=express.Router();

router.get("/",async(req,res)=>{
    try{
      const item= await user.find().lean().exec();
      return res.status(200).send(item);
    }
    catch(err)
    {
        return res.status(500).send(err); 
    }
})

router.post("/", uploadfile.single("path"),async(req,res)=>{
    try{
      
      const item= await user.create({

        Name:req.body.Name,
        Mobile:req.body.Mobile,
        Address:req.body.Address,
        Profile: req.file.path
      }
        );
       
      return res.status(200).send(item);
    }
    catch(err)
    {
        return res.status(500).send(err); 
    }
})

module.exports=router;