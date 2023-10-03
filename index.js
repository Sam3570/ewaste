const express = require('express')
var cors = require('cors');
require('dotenv').config()
const app = express()
const itemsList = require('./Routes/ItemsList')
const allRoutes = require('./Routes/allRoutes')
 const PORT = process.env.PORT || 6010

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hola")
})

app.use(express.json());

app.use("/item-list",itemsList)

//details
app.use("/details",allRoutes)

// app.use("/changes",Admin)


app.listen(PORT,()=>{
    console.log(`server  runnging on port ${PORT}`);
})