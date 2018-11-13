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

async function create(objUser){
    const { firstNameOne } = objUser;
    console.log("existingUser hahah");
    const existingUser = await Users.find({ firstNameOne }).exec();
    
    const userExist = existingUser.length > 0;

    if (userExist) throw new Error('User already exists');

    const NewUsers= new User(objUser);

    const UserCreated = await NewUsers.save();
    return UserCreated;
}

async function deleteUser(id){//al poner asyn sin colocar el await solo lo usamos para mencionar que vamos a regresar una promesa
    //nunca se debe colocar un await dentro del return
   return Users.findByIdAndDelete(id).exec();//exec es un metodo de mongoose
}



module.exports = {
    get,
    findOne,
    create,
    deleteUser
}