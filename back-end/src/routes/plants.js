const express = require('express');

const routerPlants = express.Router();

const useCasePlants = require('../useCases/plants');

routerPlants.get('/', async(req,res)=>{
    try {
        const allPlants = await useCasePlants.getAllPlants();
        console.log(typeof(allPlants));
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

module.exports = {
    routerPlants
}