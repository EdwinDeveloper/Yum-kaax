const mongoose = require('mongoose');
const { Schema } = mongoose;

const machine = new Schema({
    serial_number:{
        required:true,
        type:String,
        minlength:4
    },
    status:{
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
        required:false,
        type:String,
        minlength:4
    }
});

module.exports = {
    model: mongoose.model('machine',machine),
    machine
}