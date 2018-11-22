const machinesModel = require('../../models/machines').model;
const usersModel = require('../../models/users').model;
const userCase = require('../users');

const getAllMachines = async () =>{
    const allMachines = await machinesModel.find({}).exec();
    return allMachines;
}

const assignMachine = async (dataMachine,_id)=>{
    /*Deconstruimos el objeto dataMachine para obtener el serial introducido*/
    const {serial_number , status , model } = dataMachine;
    //console.warn(serial_number,status,model);
    /*Buscamos el usuario usuario por id que hace la operacion*/
    const assingToUser = await usersModel.findById(_id).exec();
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
    if(existingSerial.length > 0) throw new Error('The machine is already assigned');
    /*Si el usuario no lo tiene asignado, se añade el serial nuevo al array
    de seriales*/
    const allIdMachine = [...SerialMachines,serial_number];
    /*Creamos un objeto con el id del usuario que hace el proceso y todos
    los seriales que tiene*/
    const userObject = {
        _id:_id,
        serial_numbers : allIdMachine
    }
    /*Actualizamos el usuario ya con el nuevo serial añadido*/
    const userUpdated = await userCase.findUser(userObject);
    /*Buscamos la maquina que se añadira al usuario en la base de datos*/
    const existMachine = await machinesModel.find({serial_number,model}).exec();
    console.log(existMachine);
    console.log(existMachine[0].status);
    /*Si si existe la maquina procedemos a actualizar el status de esta*/
    if((existMachine.length > 0) && (existMachine[0].status=="inactive"))
        {
            /*creamos un objeto con el id de la maquina y el status activo*/
            const machineJson={
                _id:existMachine[0]._id , status:"active"
            }
            /*Buscamos la maquina y le actualizamos el status con el objeto que creamos*/
            const updateMachine = await machinesModel.findByIdAndUpdate(existMachine[0]._id,machineJson).exec();
            /*Retornamos el resultado*/
            return updateMachine;
        }else{
            throw new Error('The machine does not exist');
        }
}

const unassignMachine = async(machineData)=>{
    const { serial_number , status , model , _id } = machineData; 
    const existinMachine = await machinesModel.find({serial_number}).exec();
    if(existinMachine.length > 0){
        
    }else{
        throw new Error('Machine does not exist');
    }
    console.log("Data unassign : ",existinMachine);
}

const createMachine = async(dataMachine)=>{
        const { serial_number , status , model } = dataMachine;
        const existMachine = await machinesModel.find({serial_number}).exec();
        if( existMachine.length > 0 ) throw new Error('The machine already exist');

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
    createMachine
}