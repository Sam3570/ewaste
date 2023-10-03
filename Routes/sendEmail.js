const nodemailer = require("nodemailer");
require('dotenv').config()
const sendEmail = async (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        },
      });
      console.log("email send successfully");
      const{name,phone,cusName,address} = req.body   
      const info = {
        from: process.env.USER,
        to: process.env.TO,
        subject:"New Request",
        text:`Customer Name :${cusName} Product: ${name} Phone: ${phone} Address: ${address}`
      }

     await transporter.sendMail(info,(err,result)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.status(200).send({
                success:false,
                result
            })
            console.log("email send successfully");
        }
     })

}

module.exports = sendEmail 