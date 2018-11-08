const express=require('express');
const app=express();

const db = require('./db');

app.get('/users',(req,res)=>{
    console.log("Buenas tardes usuarios");
    res.json({
        success:true,
        message:"Hi users"
    });
});
app.listen(8080,()=>{
    console.log("I am running on port 8080");
    db.connect()
        .then((dato)=> {console.log("El dato es : "+dato)})
        .catch((error)=> {console.log("Error : "+error)})
});