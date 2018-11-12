const mongoose=require('mongoose');

//let newUserModel = require('../../models/users');
//let newUser = mongoose.model('user',newUserModel);

const Users=require('../../models/users').model;

async function get() {
    const AllUsers= await Users.find({}).exec();
    return AllUsers;
}

function findOne(req,res){
    //console.log(req);
    Users.findOne({
        _id:req.params.id
    }).exec((error,users)=>{
            if(error){
                console.log("There is an error : "+error);
            }else{
                console.log("User Found");
                 console.log(users);
                 res.json({
                     users
                 });
                 return users;
            }   
    });
    
    
}

function createUser(objUser){
    const NewUsers= Users.create(objUser);
    return NewUsers;
}



module.exports = {
    get,
    createUser,
    findOne
}