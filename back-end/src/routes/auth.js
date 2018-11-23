const express = require('express');
const routerAuth = express.Router();
const jwt = require('../lib/jwt');
const useCaseUsers = require('../useCases/users');
const useCaseAuth = require('../useCases/auth');

routerAuth.post('/login',async(req,res)=>{
    try {
        const { email , password } = req.body;
        console.log(email,password);
        const token = await useCaseUsers.loginUser(email,password);
        //console.log(token);
        res.json({
            success:true,
            message:"Logged successfuly",
            payload:{
                token
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

routerAuth.post('/signin',async(req,res)=>{
    try {
        const dataNewUser = req.body;
        const userSigned = await useCaseAuth.signUp(dataNewUser);
        res.json({
            success:true,
            message:"Welcome to YumKaax",
            payload:{
                userSigned
            }
        });
    } catch (error) {
        res.status(401);
        res.json({
            success:false,
            message:"There is a problem width the users informacion or the machine"
        });
    }
});

module.exports = {
    routerAuth
}