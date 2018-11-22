//const mongoose = require('mongoose');

const usersModel = require('../../models/users').model;
const jwt = require('../../lib/jwt');
const bcrypt = require('../../lib/bcrypt');

async function getAllUsers() {
    const allUsers = await usersModel.find({}).exec();
    return allUsers;
}

const createUser = async (userData) =>{
    const {firstNameOne,
        firstNameTwo,
        lastName,
        address,
        email,
        country,
        city,
        password,
        phoneNumber
     } = userData;

    console.log("firstData",userData);
    const existingPhone = await usersModel.find({phoneNumber}).exec();
    const existingEmail = await usersModel.find({email}).exec();
    const exist = existingPhone.length + existingEmail.length;

    if(exist>0) throw new Error('User Already exist');

        const hashPassword = await bcrypt.create(password);
        const newUserJson = {
            firstNameOne,
            firstNameTwo,
            lastName,
            address,
            email,
            country,
            city,
            password:hashPassword,
            phoneNumber
        }
            console.log("Second data",newUserJson, typeof hashPassword);
          const newUser = new usersModel(newUserJson);
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

const validatePassword = async(email,password)=>{
    
    const userExist = await usersModel.findOne({email}).exec();
    return bcrypt.verify(password , userExist.password);
}

const loginUser = async (email , password)=>{
    //console.log(email,password);
    const userExist = await usersModel.findOne({email}).exec();
    if(!userExist) throw new Error('User does not exist');
    const isValidPassword = await validatePassword(userExist.email , password);
    //console.log(isValidPassword);
    if(!isValidPassword) throw new Error('Invalid Password');

    return jwt.create({id:userExist._id});
}

module.exports = {
    getAllUsers,
    createUser,
    findUser,
    deleteUserId,
    loginUser,
    validatePassword
}
