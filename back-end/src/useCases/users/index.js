//const mongoose = require('mongoose');

const usersModel = require('../../models/users').model;

async function getAllUsers() {
    const allUsers = await usersModel.find({}).exec();
    return allUsers;
}

const createUser = async (userData) =>{
    const {f,fo,l,a,email,c,y,p,phoneNumber }= userData;
    //console.log(email, phoneNumber);
    const existingPhone = await usersModel.find({phoneNumber}).exec();
    const existingEmail = await usersModel.find({email}).exec();
    const exist = existingPhone.length + existingEmail.length;
    //console.log("se cumplen ambos",exist);
    //console.log("El correo existe : ",existingEmail.length > 0);

    if(exist>0) throw new Error('User Already exist');

        const newUser = new usersModel(userData);
        //console.log(newUser);
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
