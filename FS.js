const http=require("http");

const fs=require("fs");


//create sever
 http.createServer((req,res)=>{
        fs.readFile("./FS.html",(err,data)=>{
            if (err){
                res.end("ERROR")
            }else{
                res.end(data)
            }
        })
 }).listen(4000,()=>{
    console.log("sever is up and running on port 4000")
 })