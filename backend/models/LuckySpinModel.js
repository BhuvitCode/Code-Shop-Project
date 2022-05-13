const mongoose = require('mongoose');

const {Schema} = mongoose;

const LuckySpinSchema = new Schema({
    LuckyItem:{
        type: String,
        required: true
    },

    LuckyNumber:{
        type: Number,
        required: true
    },

    
})


const LuckySpinMongooseModel = mongoose.model('LuckyDrawItems', LuckySpinSchema)

LuckySpinMongooseModel.createIndexes();

module.exports = LuckySpinMongooseModel