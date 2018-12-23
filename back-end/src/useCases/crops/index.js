const cropsModel = require('../../models/crops').model;
const userModel = require('../../models/users').model;
const useCasesMachine =require('../machines');
const useCasePlant =require('../plants');

const getAllCrops = async ()=>{
    const allCrops =  await cropsModel.find({}).exec();
    return allCrops;
}

const getPerUserCrops = async (cropId)=>{
    const findUser = await userModel.find({"_id":cropId}).exec();
    //console.log(findUser);
    if(findUser.length==0) return "USER DOES NOT EXIST";
    //console.log(cropId);
    //console.log(cropId._id);
    const userCrops = await cropsModel.find({"id_user":cropId}).exec();
    if(userCrops.length == 0) return "NO CROPS TO THIS USER";
    return userCrops;
}

const newCrop = async (cropData)=>{
    const newCrop = new cropsModel(cropData);
    const cropCreated = await newCrop.save();
    return cropCreated;
}

const findCrops = async(IdUser)=>{
    //console.log("menos nivel",IdUser);
    const cropsFinded = await cropsModel.find({"id_user":IdUser.id_user}).exec();
    //console.log("primer nivel",cropsFinded);
    return cropsFinded;
}

// const findCropsByIdOfUser = async(idUser)=>{
//     console.log("menos nivel",idUser);
//     const cropsFinded = await cropsModel.find({"id_user":idUser._id}).exec();
//     console.log("primer nivel",cropsFinded);
//     return cropsFinded;
// }

const verifyCropsStatus = async(userId)=>{
     const cropsUser = await findCrops(userId);
     //console.log("segundo nivel",cropsUser);
      const activeCrops = cropsUser.map((currentCrop,index)=>{
         if(cropsUser[index].cropStatus=="active"){
             return "activeCrop";
         }else{
             return false;
         } 
      });
     return activeCrops;
}

const checkActivateCropStatus = async(userId) =>{
    const verifyCrop = await verifyCropsStatus(userId);
    console.log("tercer nivel",verifyCrop);
    if(verifyCrop.length>0){
        const activeCrop =verifyCrop.reduce((reducer,current,index)=>{
            if(current=="activeCrop"){
                return "CROP ACTIVE";
            }
            return reducer;
        },[]);
        return activeCrop;
    }
}

const CreateAssignCrop= async (dataCrop) =>{
    const {plantAmount,cropTime,date,cropStatus,id_user,id_plant,id_machine} = dataCrop;
    const getPlant = await useCasePlant.getSinglePlants(id_plant);
    //if(getPlant=="PLANT DOES NOT EXIST") return getPlant;
    const machineSelected= await useCasesMachine.findMachine(id_machine);
    //if(machineSelected=="MACHINES DOES NOT EXIST") return machineSelected;
    const recordStatus = await useCasesMachine.checkRecordStatus(machineSelected);
    //if(recordStatus=="MACHINE INACTIVE") return recordStatus;
    const assignedToUser = await useCasesMachine.checkAssignToUser({id_user,id_machine});
    //if(assignedToUser=="USER DOES NOT EXIST") return assignedToUser;
    //if(assignedToUser=="MACHINE NOT ASSIGNED TO THE USER") return assignedToUser;
    const machineUseStatus = await useCasesMachine.checkuseStatusMachine(machineSelected);
    //if(machineUseStatus=="MACHINE IN USE") return machineUseStatus;
    const checkActiveCrop = await checkActivateCropStatus({"id_user":id_user});
    if(checkActiveCrop=="CROP ACTIVE") throw new Error("CROP ACTIVE");
    if((assignedToUser=="MACHINE ASSIGNED TO THE USER") && (machineUseStatus=="MACHINE IS NOT IN USE") && (getPlant=="PLANT EXIST") && (recordStatus=="MACHINE ACTIVE")){
        //console.log("DENTRO",assignedToUser," :::  ",machineUseStatus,"  ::  ",getPlant,"  :::  ",recordStatus);
        const machineUpdate = await useCasesMachine.updateRecordStatusMachine(id_machine);
        const cropCreated = await newCrop(dataCrop);
        const newCropJsonInfo = {
            CropInfo:cropCreated,
            MachineInfo:machineUpdate
        }
        return newCropJsonInfo;
    }
}

const updateCrop =async(cropData)=>{
    const verifyExist = await cropsModel.findById(cropData._id).exec();
    if(verifyExist==null) throw new Error("Crop does not exist");
    const modifidModel = await cropsModel.findByIdAndUpdate(cropData._id,cropData).exec();
    //console.warn(modifidModel); 
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
    deleteCropId,
    CreateAssignCrop,
    getPerUserCrops,
    findCrops,
    verifyCropsStatus,
    checkActivateCropStatus
    //findCropsByIdOfUser
}