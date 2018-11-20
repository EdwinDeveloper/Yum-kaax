const machinesModel = require('../../models/machines').model;

const getAllMachines = async () =>{
    const allMachines = await machinesModel.find({}).exec();
    return allMachines;
}

const createMachine = async (dataMachine)=>{
    const { id ,serial_number } = dataMachine;
    console.log(serial_number);
    const existMachine = await machinesModel.find({serial_number}).exec();
    console.log(existMachine);
    const exist = existMachine.length > 0;

    if(exist) throw new Error('This machine already exist');

    const newMachine = new machinesModel(dataMachine);
    const machineCreated = newMachine.save();
    return machineCreated;
}

const deleteMachine = (id)=>{
    const machineDeleted = machinesModel.findByIdAndDelete(id).exec();
    return machineDeleted;
}

module.exports = {
    getAllMachines,
    createMachine,
    deleteMachine
}