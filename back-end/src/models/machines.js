const mongoose = require('mongoose');
const { Schema } = mongoose;

const machine = new Schema({
    serial_number:{
        required:true,
        type:String,
        minlength:4
    },
    recordStatus:{
        required:false,
        type:String,
        minlength:4
    },
    useStatus:{
        required:false,
        type:String,
        minlength:4
    },
    model:{
        required:true,
        type:String,
        minlength:4
    },
    id_user:{
        require:false,
        type:String,
        minlength:4,
        trim:true
    }
});

module.exports = {
    model: mongoose.model('machine',machine),
    machine
}