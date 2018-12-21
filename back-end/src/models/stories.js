const mongoose = require('mongoose');
const { Schema } = mongoose;

const stories = new Schema({
    nutriens:{
        required:true,
        type:[Object]
    },
    date:{
        required:true,
        type:Date,
        
    }
});

module.exports = {
    model:mongoose.model("storie",stories),
    stories
}