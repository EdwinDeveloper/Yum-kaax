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

const updateCrop =async(cropData)=>{
    const modifidModel = await cropsModel.findByIdAndUpdate(cropData._id,cropData).exec();
    console.warn(modifidModel); 
    return modifidModel;
}

const deleteCropId = (id)=>{
    console.warn(id);
    return cropsModel.findByIdAndDelete(id).exec();
}

module.exports = {
    getAllCrops,
    newCrop,
    updateCrop,
    deleteCropId
}