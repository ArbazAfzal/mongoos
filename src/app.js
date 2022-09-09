const express= require("express")
const port = process.env.port || 5000
const app=express()
require("../src/db/conn")
app.use(express.json());


const router = require("./routes/userrouter")
 const User=require("../src/models/users")
const prorouter=require("../src/routes/productrouter")
const order=require("../src/routes/ordersrouter")
app.use(router)
app.use(prorouter)
app.use(order)






app.listen(port, () => {
    console.log(`listening to the ${port}`);
})