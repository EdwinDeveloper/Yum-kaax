const express = require('express');

const user=require('./useCases/users');

const User=require('./models/users').model;

const app =express();

app.use(express.json());
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

app.post('/users', async(req,res)=>{
    try{
        const userData = req.body;
       
        const newUser = await User.create(userData);
         //console.warn(newUser);
        res.json({
            success:true,
            message:"New user created",
            payload:{
                newUser
            }
    });
    }catch(error){
        res.status(400);
        res.json({
            success:false,
            message:"User could not be created",
            error:[
                error
            ]
        });
    }
    
    // let newUser = await User.add(req,body);
    //     res.json({
    //         success:true,
    //         message:"New user",
    //         payload:{
    //             newUser
    //         }
    //     });
    //     newUser.save((error,user)=>{
    //         if(error){
    //             console.error("There is an error : "+error);
    //         }else{
    //             console.log(user);
    //             res.send({
    //                 success:true,
    //                 message:"New user from front",
    //                 payload:{
    //                     user
    //                 }
    //             });
    //         }
    //     });
});

app.delete('/users/:id'/*uri params*/,async (req,res)=>{
    //investigar query params
    try {
        const { id } = req.params;
        const userDeleted = await user.deleteUser(id);

        res.json({
            success:true,
            message:"User Deleted",
            payload:{
                user:userDeleted
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Message could not be deleted",
            error:{
                error
            }
        });
    }
});

module.exports = app;//Se exporta solo, dentro de un objeto da error