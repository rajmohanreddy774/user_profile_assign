const mongoose=require("mongoose");

const usermodel=new mongoose.Schema({
    Name:{type:String, required:true},
    Mobile:{type:Number, required:true},
    Address:{type:String, require:true},
     Profile:{type:String, required:true},

    
},
{
    versionKey:false,
    timestamps:true
})

const User=mongoose.model("user",usermodel)
module.exports=User;

