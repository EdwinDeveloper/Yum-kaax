//Importamos moongose
const mongoose=require('mongoose');

// Deconstruimos la variable Schema
const { Schema }=mongoose;

//declaramos la variable shema y le asignamos un objeto tipo Shema con el siguiente modelo
const user=new Schema({
    firstNameOne:{
        required:true,
        type: String,
        trim: true,
        maxlength: 30,
        minlength: 1
    },
    firstNameTwo:{
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
    address:{
        required:true,
        trim:true,
        type:String,
        maxlength:60,
        minlength:10
    },
    email:{
        required:false,
        type:String,
        maxlength:40,
        minlength:20
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
        minlength:10,
        type:String
    },
    phoneNumber:{
         required:true,
         type:String,
         minlength:8
    }
});

module.exports = {
    model:mongoose.model('user',user),
    user
}