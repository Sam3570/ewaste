const mongoose  = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB);
const userD = mongoose.model('Details', {
    name:Array,
    phone:String,
    cusName:String,
    product:String,
    address:Object
});

const details = async (req,res,next) =>{
    
        const{name,phone,cusName,product,address} = req.body       
        try {
            await userD.create({
                name,
                phone,
                cusName,
                product,
                address
            })
            res.status(200).send({massage:"Form Submited Successfully"})
            next()

        }
         catch (error) {
            console.log(error);
        }
    }
module.exports = details