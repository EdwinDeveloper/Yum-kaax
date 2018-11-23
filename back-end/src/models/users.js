const mongoose=require('mongoose');

const { Schema } = mongoose;

const Users=new Schema({
    name:{
        required:true,
        type: String,
        trim: true,
        maxlength: 50,
        minlength: 1
    },
    lastName:{
        require:true,
        type:String,
        trim:true,
        maxlength:50,
        minlength:1
    },
    address:{
        required:false,
        trim:true,
        type:String,
        maxlength:60
    },
    email:{
        required:true,
        type:String,
        maxlength:40,
        minlength:2
    },
    userName:{
        required:true,
        type:String,
        minlength:2
    },
    country:{
        required:false,
        type:String
    },
    city:{
        required:false,
        type:String
    },
    password:{
        type:String,
        required:true,
        trim:true,
        maxlength:70,
        minlength:1
        
    },
    phoneNumber:{
         required:false,
         type:String,
         maxlength:20
    },
    id_crops:{
        required:false,
        type:Array
    },
    serial_numbers:{
        required:false,
        type:Array
    }
});

module.exports = {
    model:mongoose.model('user',Users),
    Users
};