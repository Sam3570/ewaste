const mongoose  = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB);
const category = mongoose.model('Categories', {});
const itemsList = async (req,res)=>{
    const result = await category.find({})
    res.send(result)
}

module.exports = itemsList