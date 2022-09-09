const mongoose = require("mongoose");


const orderScheme = new mongoose.Schema({
    cust_id : {
        type: mongoose.Schema.Types.ObjectId, ref: 'doc'
    },
    pro_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    },
    orders_des:{
        type: String
    },
    orders_totalprice:{
        type :Number,
        required : true
    },
  

})

// <============create collection============>
const Order = new mongoose.model("order",orderScheme);

module.exports=Order