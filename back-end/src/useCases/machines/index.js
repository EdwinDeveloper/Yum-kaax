const machinesModel = require('../../models/machines').model;
const usersModel = require('../../models/users').model;
const userCase = require('../users');

const validateMachineExist = async(machineData)=>{
    const { serial_number , model } = machineData;
    const existMachine = await machinesModel.find({serial_number}).exec();
    if(existMachine.length>0){
        const compareModel = existMachine[0].model == model;
        if(!compareModel) throw new Error("MODELS DOES NOT MATCH");
        if(existMachine[0].recordStatus=="active") throw new Error("MACHINE ASSIGNED");
        return "MACHINE AVAILABLE";
    }else{
        throw new Error("MACHINE DOES NOT EXIST");
    }
}

const getAllMachines = async () =>{
    const allMachines = await machinesModel.find({}).exec();
    return allMachines;
}

const findMachine = async (idMachine)=>{
    const machineSelected = await machinesModel.find({"_id":idMachine}).exec();
    if(machineSelected.length==0) throw new Error("MACHINES DOES NOT EXIST");
    return machineSelected;
}

const checkuseStatusMachine =  async(machineData)=>{
    const {useStatus} = machineData[0];
    if(useStatus=="true") throw new Error("MACHINE IN USE");
    if(useStatus=="false"){
        return "MACHINE IS NOT IN USE"
    }
    return "PROBLEM IN checkuseStatusMachine";
}

const checkRecordStatus = async (machineData)=>{
    const {recordStatus} = machineData[0];
    if(recordStatus=="active"){
        return "MACHINE ACTIVE";
    }else{
        throw new Error("MACHINE INACTIVE");
    }
}

const updateRecordStatusMachine = async(id_machine) =>{
     const machineUpdated = await machinesModel.findByIdAndUpdate(id_machine,{"useStatus":"true"}).exec();
    return machineUpdated;
}

// const findOneOrManyMachine = (machineData)=>{
//     const {_id="",serial_number="",recordStatus="",useStatus="",model=""}=machineData;
//     const machineSelected = machinesModel.find({_id,serial_number,recordStatus,useStatus,model}).exec();
//     return machineSelected;
// }

const checkAssignToUser = async({id_user,id_machine}) =>{
    const userSelected = await userCase.getSingleUser(id_user);
    //if(userSelected=="USER DOES NOT EXIST") return userSelected;
    const userSerials =userSelected[0].serial_numbers;
    const machineSelected=await machinesModel.findById(id_machine).exec();
    //console.log("machine Selected",machineSelected);
    //console.log("user selected",userSelected);
    console.log("User Selected",userSerials)
    const machineSerial = machineSelected.serial_number;

    //console.log("serials",machineSerial);
    const userMachineAsign = userSerials.reduce((reduce,currentSerial,index)=>{
        if(currentSerial == machineSerial){
            return [...reduce, currentSerial];
        }
        return reduce;
        //throw new Error("MACHINE IS NOT ASSIGNED TO THE USER");
    }, []);
    if(userMachineAsign.length>0){
        return "MACHINE ASSIGNED TO THE USER";
    }else{
        throw new Error("MACHINE NOT ASSIGNED TO THE USER");
    }
}

const assignMachine = async (dataMachine,_id)=>{
    /*Deconstruimos el objeto dataMachine para obtener el serial introducido*/
    const {serial_number , recordStatus , model } = dataMachine;
    //console.warn(serial_number,status,model);
    /*Buscamos el usuario usuario por id que hace la operacion*/
    
    const assingToUser = await usersModel.findById(_id).exec();
    //console.log(_id);
    /*Asignamos el array de id de maquinas una variable*/
    const SerialMachines = assingToUser.serial_numbers;
    /*Utilizamos reduce para comparar los elementos del array con el serial mandado
    por el usuario*/
    
    const existingSerial = SerialMachines.reduce((reducer,currentSerial,index)=>{
        /*comparamos la iteracion actual con el valor del serial introducido
        por el usuario,si si es igual lo acumulamos en un array y lo retornamos*/
        if(currentSerial == serial_number) return [...reducer,currentSerial];
        /*Retornamos todo el array*/
        return reducer;
    },[]);
    /*Si existinSerial tiene algo dentro por ende el serial introducido marca
    error y no deja asignarlo al usuario*/
    if(existingSerial.length > 0) return 'MACHINE ALREADY ASSIGNED';
    /*Si el usuario no lo tiene asignado, se añade el serial nuevo al array
    de seriales*/
    const allIdMachine = [...SerialMachines,serial_number];
    /*Creamos un objeto con el id del usuario que hace el proceso y todos
    los seriales que tiene*/
    //console.log(allIdMachine);
    const userObject = {
        _id:_id,
        serial_numbers : allIdMachine
    }
    /*Actualizamos el usuario ya con el nuevo serial añadido*/
    const userUpdated = await userCase.findUser(userObject);
    /*Buscamos la maquina que se añadira al usuario en la base de datos*/
    const existMachine = await machinesModel.find({serial_number}).exec();
    /*Si si existe la maquina procedemos a actualizar el status de esta*/
    if((existMachine.length > 0) && (existMachine[0].recordStatus=="inactive"))
        {
            /*creamos un objeto con el id de la maquina y el status activo*/
            const machineJson={
                _id:existMachine[0]._id , 
                recordStatus:"active",
                id_user:_id
            }
            /*Buscamos la maquina y le actualizamos el status con el objeto que creamos*/
            const updateMachine = await machinesModel.findByIdAndUpdate(existMachine[0]._id,machineJson).exec();
            /*Retornamos el resultado*/
            //console.log(updateMachine);
            return updateMachine;
        }else{
            return "MACHINE DOES NOT EXIST"
        }
}

const unassignMachine = async(machineData)=>{
    const { serial_number , recordStatus , model , _id } = machineData; 
    const existinMachine = await machinesModel.find({serial_number}).exec();
    
    const idExistingMachine = existinMachine[0]._id;
    const idUserAssigned = existinMachine[0].id_user;
    if(idUserAssigned=="") throw new Error("THE MACHINE IS NOT ASSIGNED");
    if(existinMachine[0].useStatus=="true") throw new Error("THE MACHINE IS IN USE");
    console.log("data",idUserAssigned);
    if(existinMachine.length > 0){
             const machineJson = {
                recordStatus:"inactive",
                 id_user:""
             }
             const userMachineAssigned = await usersModel.findById(idUserAssigned).exec();
             const serialsMachineUserAssigned = userMachineAssigned.serial_numbers;

             const finalIdsMachineAssigned = serialsMachineUserAssigned.reduce((reducer,currentSerial,index)=>{
                 if(currentSerial != serial_number) return [...reducer,currentSerial];
                 return reducer;
             },[]);
             const updateSerialsJson = {
                 serial_numbers:finalIdsMachineAssigned
             }
             const userSerialsAssigned = await usersModel.findByIdAndUpdate(idUserAssigned,updateSerialsJson).exec();  
             const machineUnAssigned = await machinesModel.findByIdAndUpdate(idExistingMachine,machineJson).exec();
             //console.log(userSerialsAssigned);
             return machineUnAssigned;
    }else{
        throw new Error('Machine does not exist');
    }
    //console.log("Data unassign : ",existinMachine);
}

const createMachine = async(dataMachine)=>{
        const { serial_number , recordStatus , model } = dataMachine;
        const existMachine = await machinesModel.find({serial_number}).exec();
        if( existMachine.length > 0 ) return 'SERIAL NUMBER EXIST';
        const newMachine = new machinesModel(dataMachine);
        const machineCreated = newMachine.save();
        return machineCreated;
}

const deleteMachine = (id)=>{
    const machineDeleted = machinesModel.findByIdAndDelete(id).exec();
    return machineDeleted;
}

const updateMachine = (machineData)=>{
    const machineUpdated = machinesModel.findByIdAndUpdate(machineData._id,machineData).exec();
    return machineUpdated;
}

module.exports = {
    getAllMachines,
    assignMachine,
    unassignMachine,
    deleteMachine,
    updateMachine,
    createMachine,
    validateMachineExist,
    findMachine,
    checkuseStatusMachine,
    checkAssignToUser,
    checkRecordStatus,
    updateRecordStatusMachine
}