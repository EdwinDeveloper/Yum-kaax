const express = require('express');

const user=require('./useCases/users');

const User=require('./models/users').model;

const app =express();

let objUser={
    firstNameOne:"extra",
    firstNameTwo:"Gutierrez",
    lastName:"Gutierrez",
    address:"Porvenir 155",
    email:"Misa@hotmail.com",
    country:"Mexico",
    city:"CDMX",
    password:"test123",
    phoneNumber:"32219188243"
}

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Yum-Kaax is running"
    });
});

app.get('/users', async(req,res)=>{
    const users = await user.get();
    console.log("Consulta de usuarios");
    res.json({
        success:true,
        message:"Showing all users",
        payload:{
            users
        }
    });
});

app.get('/users/:id', async(req,res)=>{
    console.log("Getting a user");
    await user.findOne(req,res);
});
// app.post('/users', async(req,res)=>{
//     const newUsers =  await user.createUser(objUser);
//     console.log("Nuevo Usuario");
//     res.json({
//         success:true,
//         message:"User Inserted",
//         payload:{
//             newUsers
//         }
//     });
// });

app.post('/users',async(req,res)=>{
    const newUser = await new User();
        newUser.firstNameOne=req.body.firstNameOne;
        newUser.firstNameTwo=req.body.firstNameTwo;
        newUser.lastName=req.body.lastName;
        newUser.address=req.body.address;
        newUser.email=req.body.email;
        newUser.country=req.body.country;
        newUser.city=req.body.city;
        newUser.password=req.body.city;
        newUser.phoneNumber=req.body.phoneNumber;
        newUser.save((error,user)=>{
            if(error){
                console.error("There is an error : "+error);
            }else{
                console.log(user);
                res.send({
                    success:true,
                    message:"New user from front",
                    payload:{
                        user
                    }
                });
            }


        });
});

module.exports = app;//Se exporta solo, dentro de un objeto da error