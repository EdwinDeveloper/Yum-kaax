const plantsModel = require('../../models/plants').model;

const getAllPlants = async () =>{
    const plants = await plantsModel.find({}).exec();
    console.log(plants);
    return plants;
}

const createPlant = async (dataPlant)=>{
    const {name} = dataPlant;
    const existPlant = await plantsModel.find({name}).exec();
    const exist = existPlant.length > 0;

    if(exist) throw new Error('This plant already exists');

    const newPlant = new plantsModel(dataPlant);
    const plantCreated = newPlant.save();
    return plantCreated;
}

const updatePlant = async(dataPlant)=>{
    console.warn(dataPlant);
    const plantModified = await plantsModel.findByIdAndUpdate(dataPlant._id,dataPlant).exec();
    return plantModified;

}

const deletePlant = (id) =>{
    console.warn(id);
    return plantsModel.findByIdAndDelete(id).exec();
}

module.exports = {
    getAllPlants,
    createPlant,
    updatePlant,
    deletePlant
}