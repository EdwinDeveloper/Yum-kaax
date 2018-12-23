const express = require('express');

const routerPlants = express.Router();

const useCasePlants = require('../useCases/plants');
const jwt = require('../lib/jwt');
const auth = require('../middlewares/auth');
routerPlants.use(auth);

routerPlants.get('/', async(req,res)=>{
    try {
        
        const allPlants = await useCasePlants.getAllPlants();
        res.json({
            success:true,
            message:"Al the records in the database",
            payload:{
                allPlants
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"We can not show the plants",
            error:[
                error
            ]
        });
    }
});

routerPlants.post('/',async(req,res)=>{
    try {
        const plantData = req.body;
        console.log(plantData);
        const newPlant = await useCasePlants.createPlant(plantData);
        res.json({
            success:true,
            message:"New plant created",
            payload:{
                newPlant
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"We can not create the plant",
            error:[
                error
            ]
        });
    }
});

routerPlants.put('/',async(req,res)=>{
    try {
        const putPlant = req.body;
        console.warn(putPlant);
        const plantPut = await useCasePlants.updatePlant(putPlant);
        res.json({
            success:true,
            message:"Plant updated",
            payload:{
                plantPut
            }
        });       
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not modified the plant",
            error:[
                error
            ]
        });
    }
});

routerPlants.delete('/:id',(req,res)=>{
    try {
        const { id } = req.params;
        console.warn(id);
        const deletedPlant = useCasePlants.deletePlant(id);
        res.json({
            success:true,
            message:"Plant deleted",
            payload:{
                deletedPlant
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not delete the plant",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerPlants
}