const express = require('express');
const routerAuth = express.Router();
const jwt = require('../lib/jwt');
const useCaseUsers = require('../useCases/users');

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

module.exports = {
    routerAuth
}