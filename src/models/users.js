const mongoose=require('mongoose');

const { Schema }=mongoose;

const shema=new Schema({
    name:{
        required: true,
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
    age:{
        required:true,
        type:number,
    },
    address:{
        required:true,
        trim:true,
        type:String,
        maxlength:60,
        minlength:10
    },
    password:{
        required:true,
        trim:true,
        maxlength:40,
        minlength:10,
        type:String
    }
});

module.exports = {
    model:mongoose.model('user',shema),
    shema
}