const mongoose = require('mongoose');

const {Schema} = mongoose;

const RedeemSchema = new Schema({
    RedeemNumber:{
        type: Number,
        required: true
    },

    RedeemPrice:{
        type: Number,
        required: true
    },

})


const RedeemCodeModel = mongoose.model('RedeemCode', RedeemSchema)

RedeemCodeModel.createIndexes();

module.exports = RedeemCodeModel