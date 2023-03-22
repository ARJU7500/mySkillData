const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: String,
    description: String,
    image:String
})
// we wiil create new Collection

const Skill = new mongoose.model('TechSkill', skillSchema);
module.exports = Skill;