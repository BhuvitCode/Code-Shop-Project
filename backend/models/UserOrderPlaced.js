const mongoose = require('mongoose');

const {Schema} = mongoose

const UserOrderPlacedSchema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    NameOFProduct:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    ProductTotalPrice:{
        type: Number,
        required: true
    },

    ProductQuantity:{
        type: Number,
        required: true
    },

    PhoneNumberOFUser:{
        type: Number,
        required: true
    },

    NameOFTheCountry:{
        type: String,
        required: true
    },

    NameOFTheState:{
        type: String,
        required: true
    },

    NameOFTheCity:{
        type: String,
        required: true
    },

    AddressOfTheUser:{
        type: String,
        required: true
    },

    Product_Brand_Name:{
        type: String,
        required: true
    },

    Product_Order_Status:{
        type: String,
        required: true
    },

    colorOfTheProduct:{
        type: String,
        required: true
    },

    ModeOFPayment:{
        type: String,
        required: true
    }

})

const UserOrderPlacedModel = mongoose.model('UserOrderPlaced', UserOrderPlacedSchema)

UserOrderPlacedModel.createIndexes();

module.exports = UserOrderPlacedModel