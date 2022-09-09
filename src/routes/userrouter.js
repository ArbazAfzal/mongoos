const express=require("express")
const router= new  express.Router()
const User=require("../models/users")







router.post("/users", async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);

        const result = await user.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})

router.get("/users", async(req,res)=>{
    try{
       const getresult= await User.find()
       res.send(getresult)
    }catch(e){console.log(e);}
})


router.patch("/users/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        
        const updateResult = await User.findByIdAndUpdate(_id , req.body,{
            new : true
        })
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

router.delete("/users/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateResult = await User.findByIdAndDelete(_id)
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

module.exports= router;