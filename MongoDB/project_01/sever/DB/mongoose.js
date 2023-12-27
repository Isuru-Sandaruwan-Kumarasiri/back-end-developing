const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://isurusandaruwan0601:isuru789@cluster0.vklna5u.mongodb.net/mydatabase?retryWrites=true&w=majority",
{useNewUrlParser:true,
useUnifiedTopology:true,
});//to connect database,its give eassy way


const connection =mongoose.connection
mongoose.set('strictQuery',true);
connection.once("open",()=>{
         console.log('MongoDB connected')
});
