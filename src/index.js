const express= require("express");
const user=require("./controller/user.controller");


const app=express();

app.use(express.json());

app.use("/users",user)

module.exports=app;
