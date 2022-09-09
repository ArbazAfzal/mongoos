const mongoose = require("mongoose");



const productScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    des :{
        type : String
    },
    price:{
        type: Number,
        required:true

    },
    color:{
        type : String
    },
    quty:{
        type: Number,
        required:true
    },
    
    amount :{
        type :Number
    }

})

// <============create collection============>
const Product = new mongoose.model("product",productScheme);

module.exports=Product