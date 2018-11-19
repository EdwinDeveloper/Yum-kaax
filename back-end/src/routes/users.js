const express = require('express');

const routerUsers = express.Router();

const useCaseUsers = require('../useCases/users');

// routerUsers.get('/',(req,res)=>{
//     /*Mandamos la respuesta */
//     res.json({
//         success:true,
//         message:"Connected to Yumkaax Data Base"
//     });
// });

routerUsers.get('/', async(req,res)=>{
    const getAllUsers =  await useCaseUsers.getAllUsers();
    res.json({
        success:true,
        message:"These are all the users saved",
        payload:{
            getAllUsers
        }
    });
});

routerUsers.post('/',async (req,res)=>{
    try {
        const userData = req.body;
        //console.log(userData);
        const newUser = await useCaseUsers.createUser(userData);
        res.json({
            success:true,
            message:"New user created",
            payload:{
                newUser
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"User can not be created",
            error:[
                error
            ]
        });
    }
});

routerUsers.delete('/:id',async (req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);
        const userDeleted = await useCaseUsers.deleteUserId(id);
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
            message:"User can not be deleted",
            error:[
                error
            ]
        });
    }
});

routerUsers.put('/',async(req,res)=>{
    try {
        const putUser = req.body;
        const usersPut = await useCaseUsers.findUser(putUser);
        //console.log(usersPut);
        res.json({
            success:true,
            message:"User updated",
            payload:{
                usersPut
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:true,
            message:"User can not be modified",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerUsers
}