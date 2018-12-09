const express = require('express');
const routerMachines = express.Router();
const machineUserCase = require('../useCases/machines');

const auth = require('../middlewares/auth');
routerMachines.use(auth);

routerMachines.get('/',async(req,res)=>{
    try {
        const AllMachines = await machineUserCase.getAllMachines();
        //console.log(AllMachines);
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

routerMachines.put('/assign',async(req,res)=>{
    try {
        const machineData = req.body;
        const { s,st,m,id_user} = machineData;
        const newMachine = await machineUserCase.assignMachine(machineData,id_user);
        res.json({
        success:true,
        message:"New machine assigned",
        payload:{
            newMachine
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not assign the machine",
            error:{
                error
            }
        });
    }
});

routerMachines.put('/unassign',async(req,res)=>{
    try {
        const maquineData = req.body;
        const unassignMachine = await machineUserCase.unassignMachine(maquineData);
        res.json({
            success:true,
            message:"Machine unassigned",
            payload:{
                unassignMachine
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not Unassign the machine",
            error:[
                error
            ]
        });
    }
});

routerMachines.post('/',async(req,res)=>{
    try {
        const dataMachine = req.body;
        const machineCreated = await machineUserCase.createMachine(dataMachine);
        res.json({
        success:true,
        message:"New machine create",
        payload:{
            machineCreated
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
routerMachines.delete('/:id',(req,res)=>{
    try {
        const { id } = req.params;
        //console.log(id);
        const machineDeleted = machineUserCase.deleteMachine(id);
        res.json({
        success:true,
        message:"Machine deleted",
        payload:{
            machineDeleted
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            error:[
                error
            ]
        });
    }
});

routerMachines.put('/',async(req,res)=>{
    try {
        const machineData = req.body;
        const machinePut = await machineUserCase.updateMachine(machineData);
        res.json({
            success:true,
            message:"User Updated",
            payload:{
                machinePut
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not update the machine data",
            error:[
                error
            ]
        });
        
    }
});

module.exports = {
    routerMachines
}