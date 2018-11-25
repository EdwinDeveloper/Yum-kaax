const mongoose = require('mongoose');

const { Schema } = mongoose;

const plants = new Schema({
    name:{
        required:true,
        type:String,
        minlength:2
    },
    specie:{
        required:true,
        type:String,
        minlength:2
    },
    type:{
        required:true,
        type:String,
        minlength:2
    },
    color:{
        required:true,
        type:String,
        minlength:2
    },
    size:{
        required:true,
        type:String,
        minlength:2
    },
    weight:{
        required:true,
        type:String,
        minlength:2
    },
    description:{
        required:true,
        type:String,
        minlength:2,
        maxlength:200
    },
    height:{
        required:true,
        type:String,
        minlength:2
    },
    nutrients:{
        required:true,
        type:Array
    },
    growTime:{
        required:true,
        type:String,
        minlength:3
    }
});

module.exports = { 
    model:mongoose.model('plants',plants),
    plants };