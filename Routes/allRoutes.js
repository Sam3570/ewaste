const express = require("express")
const details = require("./details")
const sendEmail = require("./sendEmail")

//router object
const router = express.Router()

router.post("/pickup-form",details,sendEmail)


module.exports = router