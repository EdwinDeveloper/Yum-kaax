const mongoose = require('mongoose');

const { Schema } = mongoose;

const plants = new Schema({
    id_plant:{
        required:true,
        type:number,
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
        required:false,
        type:String,
        minlength:2
    },
    size:{
        required:false,
        type:String,
        minlength:2
    },
    weight:{
        required:false,
        type:String,
        minlength:2
    },
    description:{
        required:true,
        type:String,
        minlength:2,
        maxlength:60
    },
    height:{
        required:false,
        type:String,
        minlength:2
    },
    nutrients:{
        required:true,
        type:String,
        minlength:1,
        maxlength:20
    }
});

module.exports = { plants };