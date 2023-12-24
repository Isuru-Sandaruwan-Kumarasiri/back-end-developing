console.log("*******Create a Sever******");

var http=require("http");
http.createServer(function(request,responce){//call back function
    // responce.write("MIHIYA")
    // responce.end()
            //responce.end("MIHIYA")
            responce.end("<h1>MIHIYA</h1>")   //get the html output

    
}).listen(3000,()=>{
    console.log("sever up at port 9000")
})//hyper text transfer protocol-http
//HTTP Methods-psot,get,put,delete