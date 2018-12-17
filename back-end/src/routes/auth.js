const express = require('express');
const routerAuth = express.Router();
const jwt = require('../lib/jwt');
const useCaseUsers = require('../useCases/users');
const useCaseAuth = require('../useCases/auth');
const useCaseCrops=require('../useCases/crops');

routerAuth.post('/login',async(req,res)=>{
    try {
        const { email , password } = req.body;
        console.log(email,password);
        const user_info = await useCaseUsers.loginUser(email,password);
        res.json({
            success:true,
            message:"Logged successfuly",
            payload:{
                user_info
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Can not log in",
            error:[
                error
            ]
        });
    }
});

routerAuth.post('/signup',async(req,res)=>{
    try {
        const dataNewUser = req.body;
        const userSigned = await useCaseAuth.signUp(dataNewUser);
        //console.log(userSigned)
        res.json({
            success:true,
            message:"Welcome to YumKaax",
            payload:{
                userSigned
            }
        });
    } catch (error) {
        console.warn("Error : ",error);
        res.status(401);
        res.json({
            success:false,
            error: error.message,
            message:"There is a problem width the users informacion or the machine"
        });
    }
});

routerAuth.post('/test',async(req,res)=>{
    try {
        const datos = req.body;
        //console.log(datos);
        const resultTest = await useCaseCrops.checkActivateCropStatus(datos);
        res.json({
            success:true,
            message:"Test Correcto",
            payload:{
                resultTest
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Test failed",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerAuth
}