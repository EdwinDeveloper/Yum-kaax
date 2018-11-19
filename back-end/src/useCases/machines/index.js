const machinesModel = require('../../models/machines').model;

const getAllMachines = async () =>{
    const allMachines = await machinesModel.find({}).exec();
    return allMachines;
}

const createMachine = (dataMachine)=>{
    const { serial_number } = dataMachine;
    const existMachine = machinesModel.find({serial_number}).exec();
    const exist = existMachine.length > 0;

    if(exist) throw new Error('This machine already exist');

    const newMachine = new machinesModel(dataMachine);
    const machineCreated = newMachine.save();
    return machineCreated;
}
module.exports = {
    getAllMachines,
    createMachine
}