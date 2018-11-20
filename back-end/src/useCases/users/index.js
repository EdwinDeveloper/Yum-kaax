//const mongoose = require('mongoose');

const usersModel = require('../../models/users').model;

async function getAllUsers() {
    const allUsers = await usersModel.find({}).exec();
    return allUsers;
}

const createUser = async (userData) =>{
    const { firstNameOne,firstNameTwo,lastName }= userData;
    //console.log(firstNameOne, firstNameTwo, lastName);
    const existingUsers = await usersModel.find({firstNameOne}).exec();

    const exist = existingUsers.length > 0;
    console.log(exist);

    if(exist) throw new Error('User Already exist');
    
        const newUser = new usersModel(userData);
        console.log(newUser);
        const userCreated = await newUser.save();
        
        return userCreated;
     
}

const findUser = (userData) =>{
    //console.log(userData._id);
    return usersModel.findByIdAndUpdate(userData._id, userData).exec();
}

const deleteUserId = (id)=>{
    //console.log(id);
    return usersModel.findByIdAndDelete(id).exec();
}

module.exports = {
    getAllUsers,
    createUser,
    findUser,
    deleteUserId
}
