const mongoose =require("mongoose")
const validator = require("validator");

const userSchema=new mongoose.Schema({

    name : {
        type : String,
        required : true,
        minlength : 3
    },
    phone :{
        type : Number,
        required:true
    },
    email :{
        type : String, 
        required:true,
        unique : [true , " Email already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw  new Error("INVALID EMAIL");
            }
        }
    },
    
    address :{
        type :String,
        required : true
    }

})

const  User = new mongoose.model("doc",userSchema);

module.exports=User

