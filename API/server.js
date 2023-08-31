const express=require("express");
const multer = require('multer');
const rRouter=require("./src/register/router")

const app=express();
const port=5000;

app.use(express.json());

app.use(express.static(process.cwd()+"Register"));


app.get("/",(req,res)=>{
    res.send("Server Running");
});

app.use("/api/v1",rRouter)




app.listen(port,()=>console.log(`listening`));