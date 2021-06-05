const express = require("express");
const path = require("path");
const app=express();
const hbs= require("hbs");
const bcrypt = require("bcryptjs");
require("./db/connect")
const Register = require("./models/registers");
const port = process.env.PORT || 8000;
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("register")
});
app.get("/syllabus",(req,res) =>{
    res.render("syllabus");
})
app.get("/index",(req,res) =>{
    res.render("index");
})
app.get("/timetable",(req,res) =>{
    res.render("timetable");
})
app.get("/register",(req,res) =>{
    res.render("register");
})
app.get("/login",(req,res) =>{
    res.render("login");
})
app.post("/register", async(req,res) =>{
    try
    {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password===cpassword)
        {
            const registerDec = new Register({
                Name : req.body.username,
                email: req.body.email,
                phone:req.body.phone,
                gender:req.body.gender,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const completed = await registerDec.save();
            res.status(201).render("index");
        }
        else
        {
            res.send("password are not matching");
        }
    }
    catch(error)
    {
        res.status(400).send(error);
    }
})
//login validate
app.post("/login",async(req,res) =>{
try
{
    const email =req.body.email;
    const password =req.body.Pass;

    const usermail = await Register.findOne({email:email})
    const isMatch = await bcrypt.compare(password,usermail.password);
    if(isMatch){
        res.status(201).render("index");
    }
    else
    {
        res.send("invalid login details");
    }
}
catch(error)
{
    res.status(400).send("invalid login details");
}
});


app.listen(port, () =>{
    console.log('server is running to port no ${port}');
})