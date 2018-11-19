const cropsModel = require('../../models/crops').model;

const getAllCrops = async ()=>{
    const allCrops =  await cropsModel.find({}).exec();
    return allCrops;
}

const newCrop = async (cropData)=>{
    const newCrop = new cropsModel(cropData);
    const cropCreated = await newCrop.save();
    return cropCreated;
}

module.exports = {
    getAllCrops,
    newCrop
}