const express = require('express');

const routerUsers = express.Router();

const useCaseUsers = require('../useCases/users');
const useCaseMachine = require('../useCases/machines');
const useCaseCrops = require('../useCases/crops');
const jwt = require('../lib/jwt');
const auth = require('../middlewares/auth');
routerUsers.use(auth);

routerUsers.post('/userInfo',async(req,res)=>{
    const token = await jwt.verify(req.headers.authorization);
    const userInfo = await useCaseUsers.getSingleUser(token.id);
    const user = userInfo[0].userName;
    const cropsUser = await useCaseCrops.findCrops({'id_user':token.id});
    const machines = await useCaseUsers.getSingleUser(token.id);
    const machinesSerial = machines[0].serial_numbers;
    res.json({
        success:true,
        message:'Dashboard Information',
        payload:{
            user,
            machinesSerial,
            cropsUser
        }
    });
    //const cropsUser = await useCaseCrops.findCrops();
});

routerUsers.get('/', async(req,res)=>{
    try {
        const getAllUsers =  await useCaseUsers.getAllUsers();
        res.json({
        success:true,
        message:"These are all the users saved",
        payload:{
            getAllUsers
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"There is a problem",
            error:[
                error
            ]
        });
    }
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
