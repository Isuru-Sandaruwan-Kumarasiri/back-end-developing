const mongoose=require('mongoose');//help conect to database 

const schem_template=mongoose.Schema;//create template in schema **like class
//create new shema

const userShema=new schem_template({  //like instance of the class
        name:{
            type:String,
            required: true//must be added name
        },
        email:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
});


const user=mongoose.model("user",userShema);
module.exports=true;