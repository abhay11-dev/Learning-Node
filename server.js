const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
});
app.get("/about",(req,res)=>{
    res.send("<h1> Welcome to About Page <h1>");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});