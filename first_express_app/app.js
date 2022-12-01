const express=require("express");
const fs=require('fs');
const path=require('path');
// const file_content=fs.readFileSync("hardikgarg.html");
const app=express();
const port=80;
app.get('/',(req,res)=>{
    res.send("this is my first express app");
})
app.get('/about',(req,res)=>{
    res.send("this is my about page");
})
app.get('/services',(req,res)=>{
    res.send("this is my services page");
})
app.get('/contact',(req,res)=>{
    res.send("this is my contact page");
})
app.listen(port,()=>{
    console.log(`my server starts at port ${port} with addres http://localhost:${port}/`);
})
