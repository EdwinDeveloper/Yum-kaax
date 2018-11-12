const mongoose=require('mongoose');

//let newUserModel = require('../../models/users');
//let newUser = mongoose.model('user',newUserModel);

const Users=require('../../models/users').model;

async function get() {
    const AllUsers= await Users.find({}).exec();
    return AllUsers;
}

function createUser(objUser){
    const NewUsers= Users.create(objUser);
    return NewUsers;
}

module.exports = {
    get,
    createUser
}