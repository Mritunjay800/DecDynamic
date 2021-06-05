const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/DEC",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log("Connection sucessfull...");
}).catch((err)=>{
    console.log("no connection...")
});