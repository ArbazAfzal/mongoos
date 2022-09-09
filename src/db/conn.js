const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://arbaz:AcVsydOaL9hAOFZg@cluster0.frme9f2.mongodb.net/doc").then(()=>{
    console.log("connect successfully");
}).catch((e)=>{
    console.log(" and the error",e);

})
        
