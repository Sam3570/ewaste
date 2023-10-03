const express = require('express')
var cors = require('cors');
const app = express()
const itemsList = require('./Routes/ItemsList')
const allRoutes = require('./Routes/allRoutes')
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hola")
})

app.use(express.json());

app.use("/item-list",itemsList)

//details
app.use("/details",allRoutes)

// app.use("/changes",Admin)


app.listen(8080,()=>{
    console.log("server  runnging on port 8080");
})