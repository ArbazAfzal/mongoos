const express=require("express")
const router= new  express.Router()
const Product=require("../models/product")

router.post("/products", async (req, res) => {
    try {
        console.log(req.body);
        const pro = new Product(req.body);

        const result = await pro.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})


router.get("/products", async(req,res)=>{
    try{
       const getresult= await Product.find()
       res.send(getresult)
    }catch(e){console.log(e);}
})

router.patch("/products/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        
        const updateResult = await Product.findByIdAndUpdate(_id , req.body,{
            new : true
        })
        console.log("hello ================================" ,updateResult);
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

router.delete("/products/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateResult = await Product.findByIdAndDelete(_id)
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

module.exports= router;