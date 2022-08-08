const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://RajMohan:Q6T9UAdsfCnwTs1U@cluster0.eqoov19.mongodb.net/?retryWrites=true&w=majority")
}

module.exports=connect;