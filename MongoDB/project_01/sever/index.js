const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");


//create express app
const app=express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://isurusandaruwan0601:isuru789@cluster0.vklna5u.mongodb.net/mydatabase?retryWrites=true&w=majority",
{useNewUrlParser:true,
useUnifiedTopology:true,
});//to connect database,its give eassy way


const connection =mongoose.connection
connection.once("open",()=>{
         console.log('MongoDB connected')
});

//create port 
const port=5000;
//create sever
app.listen(port,()=>{
    console.log("sever is up and running on part"+port)

})