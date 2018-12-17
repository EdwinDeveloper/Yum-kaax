//const mongoose = require('mongoose');

const usersModel = require('../../models/users').model;
const jwt = require('../../lib/jwt');
const bcrypt = require('../../lib/bcrypt');

const validateUserExist = async (dataUser)=>{
    let userUserNameExist=[],userEmailExist=[],userPhoneExist=[];
    const {name,lastName,email="",userName="",password,phoneNumber="",serial_number,model} = dataUser;
    if(email !="" && userName !=""){
         userUserNameExist = await usersModel.find({userName}).exec();
         userEmailExist = await usersModel.find({email}).exec();
         if(phoneNumber != ""){
            userPhoneExist = await usersModel.find({phoneNumber}).exec();
            if(userPhoneExist.length>0) throw new Error("PHONE EXIST");
         }
         if(userUserNameExist.length>0) throw new Error("USERNAME EXIST");
         if(userEmailExist.length>0) throw new Error("EMAIL EXIST");
    }
    return false
}

async function getAllUsers() {
    const allUsers = await usersModel.find({}).exec();
    return allUsers;
}


const getSingleUser = async(idUser) =>{
    const singleUser = await usersModel.find({"_id":idUser}).exec();
    if(singleUser.length>0) return singleUser;
    throw new Error("USER DOES NOT EXIST");
}

const createUser = async (userData) =>{
    const {name,
        lastName,
        address="",
        email,
        userName,
        country="",
        city="",
        password,
        phoneNumber=""
     } = userData;

    const existingUserName = await usersModel.find({userName}).exec();
    const existingEmail = await usersModel.find({email}).exec();
    const exist = existingUserName.length + existingEmail.length;
     //console.log("Esi: ",existingEmail.length);
    if(exist>0) throw new Error('User Already exist');

        const hashPassword = await bcrypt.create(password);
        const newUserJson = {
            name,
            lastName,
            address,
            email,
            userName,
            country,
            city,
            password:hashPassword,
            phoneNumber
        }
          const newUser = new usersModel(newUserJson);
          const userCreated = await newUser.save();
          return userCreated;
}

const findUser = (userData) =>{
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
    if(!isValidPassword) throw new Error('Invalid Password');

    const token = await jwt.create({id:userExist._id});
    const userData = {
        id_User:userExist._id,
        userName:userExist.userName,
        token
    }
    return userData;
}

module.exports = {
    getAllUsers,
    createUser,
    findUser,
    deleteUserId,
    loginUser,
    validatePassword,
    validateUserExist,
    getSingleUser
}
