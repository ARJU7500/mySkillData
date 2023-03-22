const express = require("express");
const mongo = require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/MyTechSkill",{   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("bdhai ho connection is sucessfull");
}).catch((err)=>{
    console.log("sorry no connection please try agin",err);
});