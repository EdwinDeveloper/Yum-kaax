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
let objUser={
    firstNameOne:"PV",
    firstNameTwo:"Gutierrez",
    lastName:"Gutierrez",
    address:"Porvenir 155",
    email:"Misa@hotmail.com",
    country:"Mexico",
    city:"CDMX",
    password:"test123",
    phoneNumber:"32219188243"
}
app.post('/users', async(req,res)=>{
    const newUsers =  await user.createUser(objUser);
    console.log("Nuevo Usuario");
    res.json({
        success:true,
        message:"User Inserted",
        payload:{
            newUsers
        }
    });
});

module.exports = app;//Se exporta solo, dentro de un objeto da error