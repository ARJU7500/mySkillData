const express = require("express");
const router = new express.Router();
const Skill = require("../models/skill");

router.get("/", (req, res)=>{
    res.send("hii welcome where to see my skill");
});

// async ans await method create new skill
// router.post("/skill", async(req, res)=>{
//     try{
//         const user = new Skill(req.body);
//     const createUser =await user.save();
//     res.status(201).send(createUser);
//     }catch(err){
//         res.status(400).send(err);
//     }
// });

// read the data
router.get("/skill", async(req, res)=>{
    try{
        const skillData = await Skill.find();
        res.send(skillData);
    }catch(err){
        res.send(err);
    }
});

// get indivisual data by id 
router.get("/skill/:id", async(req, res)=>{
    try{
        const u_id=req.params.id;
        const i_data = await Skill.findById(u_id);
        if(!i_data){
            return res.status(404).send();
        }else{
            res.send(i_data);
        }
    }catch(err){
        res.status(500).send(err);
    }
});

// get indivisal data by title

// router.get("/skill/:title", async(req, res)=>{
//     try{
//         const title = req.params.title;
//         const u_title = await Skill.findOne(title);
//         if(!u_title){
//             return res.status(404).send();
//         }else{
//             res.send(u_title);
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// delete data
// router.delete("/skill/:id", async(req,res)=>{
//     try{
//         const _id=req.params.id;
//         console.log(_id);
//         const d_data = await Skill.findByIdAndDelete(_id);
//         console.log(d_data);
//         if(!d_data){
//             return res.status(404).send();
//         }else{
//             res.send(d_data);
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).send(err);
        
//     }
// });

// update by id 
// router.patch("/skill/:id",async(res, req)=>{
//  try{
//     const _id=req.params.id;
//     const u_data = await Skill.findByIdAndUpdate( _id, req.body);
//     res.send(u_data);
//  }catch(err){
//     // res.send(err);
//  }
// });

   module.exports =router;