const machinesModel = require('../../models/machines').model;
const usersModel = require('../../models/users').model;
const userCase = require('../users');

const getAllMachines = async () =>{
    const allMachines = await machinesModel.find({}).exec();
    return allMachines;
}

const createMachine = async (dataMachine,_id)=>{
    const {serial_number,status,model } = dataMachine;
    //console.log(_id);
    const assingToUser = await usersModel.findById(_id).exec();
    /*Asignamos el array de id de maquinas una variable*/
    const idMachines = assingToUser.serial_numbers;
    const allIdMachine = [...idMachines,serial_number];
    const userObject = {
        _id:_id,
        serial_numbers : allIdMachine
    }
    //console.log(userObject);
    const userUpdated = await userCase.findUser(userObject);
    //console.log(userUpdated);
    const existMachine = await machinesModel.find({serial_number}).exec();
    const exist = existMachine.length > 0;

    if(exist) throw new Error('This machine already exist');
    const newMachineObj = {
        serial_number,status,model
    }
    console.log(newMachineObj);
    const newMachine = new machinesModel(newMachineObj);
    const machineCreated = newMachine.save();
    return machineCreated;
}

const deleteMachine = (id)=>{
    const machineDeleted = machinesModel.findByIdAndDelete(id).exec();
    return machineDeleted;
}

const updateMachine = (machineData)=>{
    //const { id } = machineData;
    //console.log(id);
    const machineUpdated = machinesModel.findByIdAndUpdate(machineData._id,machineData).exec();
    return machineUpdated;
}

module.exports = {
    getAllMachines,
    createMachine,
    deleteMachine,
    updateMachine
}