const express = require('express');

const routerMachines = express.Router();

const machineUserCase = require('../useCases/machines');

routerMachines.get('/',async(req,res)=>{
    try {
        const AllMachines = await machineUserCase.getAllMachines();
        console.log(AllMachines);
        res.json({
            success:true,
            message:"Machines in the database",
            payload:{
                AllMachines
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the machine",
            error:[
                error
            ]
        });
    }
});

routerMachines.post('/',async(req,res)=>{
    try {
        const machineData = req.body;
        const newMachine = await machineUserCase.createMachine(machineData);
        res.json({
        success:true,
        message:"New machine created",
        payload:{
            newMachine
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the machine",
            error:{
                error
            }
        });
    }
});

module.exports = {
    routerMachines
}