const express = require("express");
require("./src/db/conect");
const Router = require("./src/routers/mySkill");
const dotenv = require("dotenv");//when our port is bg so this port automatic on 
dotenv.config();

const app = express();
const port = process.env.PORT||5000;

app.use(express.json()); //conver json file
app.use(Router);

app.listen(port, ()=>{
    console.log(`connect is setup at ${port}`);
});