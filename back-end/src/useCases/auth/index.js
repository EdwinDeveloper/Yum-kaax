const userModel = require('../../models/users').model;
const machinesModel=require('../../models/machines').model;
const userUseCases = require('../../useCases/users');
const machineUseCaes = require('../../useCases/machines');

const signUp = async (dataNewUser)=>{
    const { name , lastName , email , userName , password , serial_number , model }=dataNewUser;
   const existUserData = await userUseCases.validateUserExist(dataNewUser);
   if(existUserData=="PHONE EXIST") return existUserData;
   if(existUserData=="USERNAME EXIST") return existUserData;
   if(existUserData=="EMAIL EXIST") return existUserData;
   if(existUserData==false){/*Si no existe el usuario puede proceder*/
        const existingMachine = await machineUseCaes.validateMachineExist(dataNewUser);
        if(existingMachine=="MACHINE DOES NOT EXIST") return existingMachine;
        if(existingMachine=="MACHINE STATUS ACTIVE") return "MACHINE ASSIGNED"
        if(existingMachine=="MACHINE AVAILABLE"){/*Si si existe la maquina y no esta asignada en la base de datos puede avanzar*/
            const machineModel = {
                serial_number
            }
            const createUserLoggin = await userUseCases.createUser(dataNewUser);
            const userCreatedId = createUserLoggin._id;
            const machineAssigned = await machineUseCaes.assignMachine(machineModel,userCreatedId);
            console.log("login machine assigned",machineAssigned);
            const resulJson ={
                createUserLoggin,
                machineAssigned
            }
            return resulJson;
        }
   }
    //const machineExist = await machinesModel.find({serial_number}).exec();
   
}

module.exports = {
    signUp
}