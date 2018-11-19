const mongoose = require('mongoose');

const { Schema } = mongoose;

const story = new Schema({
    id_story:{
        required:true,
        type:Number
    },
    id_crop:{
        required:true,
        type:number
    },
    amount:{
        required:true,
        type:number
    },
    id_specie:{
        required:true,
        type:Number
    },
    dateStart:{
        required:true,
        type:Date
    },
    dateEnd:{
        required:true,
        type:Date
    },
    amountNutrients:{
        required:true,
        type:String
    },
    temperature:{
        required:true,
        type:number
    },
    humidity:{
        required:true,
        type:String
    }
});

module.exports = {
    story
}