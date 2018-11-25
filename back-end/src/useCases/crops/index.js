const cropsModel = require('../../models/crops').model;
const userModel = require('../../models/users').model;

const getAllCrops = async ()=>{
    const allCrops =  await cropsModel.find({}).exec();
    return allCrops;
}

const getPerUserCrops = async (cropId)=>{
    const findUser = await userModel.find({"userName":cropId.userName}).exec();
    if(findUser.length==0) return "USER DOES NOT EXIST";
    console.log(cropId);
    console.log(cropId._id);
    const userCrops = await cropsModel.find({"id_user":cropId._id}).exec();
    if(userCrops.length == 0) return "NO CROPS TO THIS USER";
    return userCrops;
}

const CreateAssignCrop= async (dataCrop) =>{
    const {plantAmount,cropTime,date,cropStatus,id_user,id_plant,id_machine} = dataCrop;
    console.log(dataCrop);
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

const assignCrops = (userData) =>{

}

module.exports = {
    getAllCrops,
    newCrop,
    updateCrop,
    deleteCropId,
    CreateAssignCrop,
    getPerUserCrops
}