const express=require("express")
const router= new  express.Router()
const Order=require("../models/order")


router.post("/orders", async (req, res) => {
    try {
        console.log(req.body);
        const ord = new Order(req.body);

        const result = await ord.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})



router.get("/orders", async(req,res)=>{
    try{
       const getresult= await Order.find()
       res.send(getresult)
    }catch(e){console.log(e);}
})

router.patch("/orders/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        
        const updateResult = await Order.findByIdAndUpdate(_id , req.body,{
            new : true
        })
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})


// delete data 
router.delete("/orders/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateResult = await Order.findByIdAndDelete(_id)
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})





module.exports= router;