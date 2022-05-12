const mongoose = require('mongoose');

const {Schema} = mongoose;

const RedeemPointSchema = new Schema({
    User_Id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    TotalRedeemPoints:{
        type: Number,
        required: true
    },

})


const RedeemPointMongooseModel = mongoose.model('RedeemPoints', RedeemPointSchema)

RedeemPointMongooseModel.createIndexes();

module.exports = RedeemPointMongooseModel