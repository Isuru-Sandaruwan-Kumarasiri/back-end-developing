const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const { default: mongoose } = require("mongoose");
require('./DB/mongoose')


//create express app
const app=express();

app.use(cors());
app.use(bodyParser.json());


//create port 
const port=5000;
//create sever
app.listen(port,()=>{
    console.log("sever is up and running on part"+port)

})