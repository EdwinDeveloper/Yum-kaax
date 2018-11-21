const mongoose=require('mongoose');

const { Schema } = mongoose;

const Users=new Schema({
    firstNameOne:{
        required:true,
        type: String,
        trim: true,
        maxlength: 30,
        minlength: 1
    },
    firstNameTwo:{
        type: String,
        trim: true,
        maxlength: 30,
        minlength: 1
    },
    lastName:{
        require:true,
        type:String,
        trim:true,
        maxlength:30,
        minlength:1
    },
    address:{
        required:true,
        trim:true,
        type:String,
        maxlength:60,
        minlength:1
    },
    email:{
        required:false,
        type:String,
        maxlength:40,
        minlength:2
    },
    country:{
        required:true,
        type:String,
        minlength:2
    },
    city:{
        required:true,
        type:String
    },
    password:{
        required:true,
        trim:true,
        maxlength:40,
        minlength:1,
        type:String
    },
    phoneNumber:{
         required:true,
         type:String,
         minlength:8
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