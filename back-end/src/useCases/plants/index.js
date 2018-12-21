const plantsModel = require('../../models/plants').model;

const getAllPlants = async () =>{
    const plants = await plantsModel.find({}).exec();
    return plants;
}

const getSinglePlants = async(id_plant)=>{
    const getPlant = await plantsModel.findById(id_plant).exec();
    if(getPlant==null) throw new Error("PLANT DOES NOT EXIST");
    return "PLANT EXIST";
}

const createPlant = async (dataPlant)=>{
    console.log(dataPlant);
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
    getSinglePlants,
    createPlant,
    updatePlant,
    deletePlant
}