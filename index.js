const express = require("express");
const app = express();

const dotenv = require("dotenv");//when our port is bg so this port automatic on 
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json());

// database mongodb
const mongo = require("mongoose");
// const url ='mongodb+srv://Myskilldata:myskilldata7500@arjun.vdw9nvk.mongodb.net/MyTechSkill?retryWrites=true&w=majority';
// const url = 'mongodb://127.0.0.1:27017/MyTechSkill'
mongo.connect('mongodb+srv://Myskilldata:myskilldata7500@arjun.vdw9nvk.mongodb.net/MyTechSkill?retryWrites=true&w=majority', {
    useNewUrlParser:true
}).then(()=>{
    console.log("connection is done");
}).catch((err)=>{
    console.log("sorry please try agian",err);
});

// create Schema for mongo Db
const skillSchema = new mongo.Schema({
    title: String,
    description: String,
    image:String
})
const Skill = new mongo.model('TechSkill', skillSchema);

// root pege
app.get("/", (req, res) =>{
    res.send("hii welcome to here where to see my TechSkill");
});

// get my skill
app.get("/skill", async(req, res)=>{
    try{
        const getsdata = await Skill.find();
        res.status(200).json(getsdata);  //change .send- .json
    }catch(err){
        res.send(err);
    }
});

// get my skill indivisual by id
app.get("/skill/:id", async(req, res)=>{
    try{
        const u_id = req.params.id;
        console.log(u_id);
        const i_id = await Skill.findById(u_id);
        if(!i_id){
            return res.status(404).send();
        }
        else{
            res.send(i_id);
        }
    }catch(err){
        res.status(500).send(err);
    }
});

// post the data
app.post("/skill", async(req, res)=>{
    try{
        const user = new Skill(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }
});

// update the data by id
app.patch("/skill/:id", async(req, res)=>{
    try{
        const updateData = req.params.id;
        const up_data = await Skill.findByIdAndUpdate(updateData, req.body, {
            new : true
        });
        res.status(200).send(up_data);
    }catch(err){
        res.status(404).send(err);
    }
});

// delete data by id 
app.delete("/skill/:id", async(req, res)=>{
    try{
        const del_data = req.params.id;
        const d_data = await Skill.findByIdAndDelete(del_data);
        if(!d_data){
            return res.status(404).send();
        }else{
            res.send(d_data);
        }
    }catch(err){
        res.status(500).send(err);
    }
});

// listen 
app.listen(port, ()=>{
    console.log(`now you are connect at port no. ${port}`);
});