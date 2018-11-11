const express = require('express');

const user=require('./useCases/users');

const app =express();

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Yum-Kaax is running"
    });
});

app.get('/users', async(req,res)=>{
    const users = await user.get();
    console.log("Buenas tardes usuarios");
    res.json({
        success:true,
        message:"Hi users",
        payload:{
            users
        }
    });
});
app.post('/users',(req,res)=>{
    console.log("New User in the way");
    res.json({
        success:"Congrats",
        message:"New user"
    });
});

module.exports = app;//Se exporta solo, dentro de un objeto da error