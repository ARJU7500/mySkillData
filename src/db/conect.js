const express = require("express");
const mongo = require("mongoose");
mongo.connect("mongodb+srv://Myskilldata:myskilldata7500@arjun.vdw9nvk.mongodb.net/?retryWrites=true&w=majority",{   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("bdhai ho connection is sucessfull");
}).catch((err)=>{
    console.log("sorry no connection please try agin",err);
});