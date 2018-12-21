const userModel = require('../../models/users').model;
const machinesModel=require('../../models/machines').model;
const userUseCases = require('../../useCases/users');
const machineUseCaes = require('../../useCases/machines');

const signUp = async (dataNewUser)=>{
    console.log(dataNewUser);
    const { name , lastName , email , userName , password , serial_number , model }=dataNewUser;
   const existUserData = await userUseCases.validateUserExist(dataNewUser)
   if(existUserData=="PHONE EXIST") throw new Error(existUserData);
   //if(existUserData=="USERNAME EXIST") throw new Error(existUserData);
   //if(existUserData=="EMAIL EXIST") throw new Error(existUserData);
   if(existUserData==false){/*Si no existe el usuario puede proceder*/
        const existingMachine = await machineUseCaes.validateMachineExist(dataNewUser);
        //if(existingMachine=="MACHINE DOES NOT EXIST") throw new Error(existingMachine);
        //if(existingMachine=="MACHINE STATUS ACTIVE") throw new Error("MACHINE ASSIGNED");
        //if(existingMachine=="MODELS DOES NOT MATCH") throw new Error(existingMachine);
        if(existingMachine=="MACHINE AVAILABLE"){/*Si si existe la maquina y no esta asignada en la base de datos puede avanzar*/
            const machineModel = {
                serial_number
            }
            const createUserLoggin = await userUseCases.createUser(dataNewUser);
            const userCreatedId = createUserLoggin._id;
            const machineAssigned = await machineUseCaes.assignMachine(machineModel,userCreatedId);
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