const mongoose = require('mongoose');

const { Schema } = mongoose;

const crops = new Schema({
    size:{
        required:true,
        type:String,
        minlength:4,
        maxlength:10
    },
    cropTime:{
        required:true,
        type:String,
        maxlength:10
    },
    wheader:{
        required:true,
        type:String,
        minlength:2
    },
    date:{
        required:true,
        type:Date,
        minlength:2
    },
    id_user:{
        required:false,
        type:String,
        minlength:10
    },
    id_machine:{
        required:false,
        type:String,
        minlength:10
    },
    cropStatus:{
        required:true,
        type:String,
        minlength:4,
        maxlength:15
    }
});

module.exports = { 
    model:mongoose.model('crop',crops),
    crops }