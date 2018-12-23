const express = require('express');
const routerCrops = express.Router();
const useCaseCrops = require('../useCases/crops');
const jwt = require('../lib/jwt');
const auth = require('../middlewares/auth');
routerCrops.use(auth);

routerCrops.get('/',async(req,res)=>{
    try {
        const allCrops = await useCaseCrops.getAllCrops();
        res.json({
        success:true,
        message:"Crops in data base",
        payload:{
            allCrops
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"We can not show the information",
            error:[
                error
            ]
        });
    }
});

routerCrops.post('/find',async(req,res)=>{
    try {
        const userInfo = req.body;
        const token = req.headers.authorization;
        const idUser = await jwt.verify(token);
        const cropsUserFind = await useCaseCrops.getPerUserCrops(idUser.id);
        res.json({
            success:true,
            message:"Crops of the user",
            payload:{
                cropsUserFind
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not show the crops",
            error:[
                error
            ]
        });
    }
});

routerCrops.post('/',async(req,res)=>{
    try {
        const token = await jwt.verify(req.headers.authorization);
        const { plantAmount , cropTime , wheader , date , cropStatus , id_user , id_plant , id_machine} = req.body;
        const cropObject ={
            plantAmount,
            cropTime,
            wheader,
            date,
            cropStatus,
            id_user:token.id,
            id_plant,
            id_machine
        }
        console.log(cropObject);
        const newCrop = await useCaseCrops.newCrop(cropObject);
        res.json({
            success:true,
            message:"Crop created",
            payload:{
                crop:newCrop
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"We can not create the crop",
            error:[
                error
            ]
        });
    }
});

routerCrops.post('/create',async(req,res)=>{
    try {
        const { plantAmount , cropTime , wheader , date , cropStatus , id_plant , id_machine } = req.body;
        const token_decode= await jwt.verify(req.headers.authorization);
        const id_user=token_decode.id;
        const cropObject={
            plantAmount,cropTime,wheader,date,cropStatus,id_user,id_plant,id_machine
        }
        //console.log(cropObject);
        const newCrop = await useCaseCrops.CreateAssignCrop(cropObject);
        res.json({
            success:true,
            message:"Crop Created",
            payload:{
                newCrop
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the crop",
            error:[
                error.message
            ]
        });
    }
});

routerCrops.put('/',async(req,res)=>{
    try {
        const {_id , plantAmount ,cropTime ,wheader,date,cropStatus,id_plant,id_machine} = req.body;
        const token = await jwt.verify(req.headers.authorization);
        const cropObject={
            _id , plantAmount ,cropTime ,wheader,date,cropStatus,id_user:token.id,id_plant,id_machine
        }
        console.log(cropObject);
        const cropPut = await useCaseCrops.updateCrop(cropObject);
        //console.log(cropPut);
        res.json({
        success:true,
        message:"Crops updated",
        payload:{
            cropPut
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:true,
            message:"User can not be updated",
            error:[
                error.message
            ]
        });
    }
});

routerCrops.delete('/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const deleteCrop = await useCaseCrops.deleteCropId(id);
        res.json({
            success:true,
            message:"Crops Eliminated",
            payload:{
                deleteCrop
            }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:true,
            message:"The crops wasn´t eliminated",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerCrops
}
