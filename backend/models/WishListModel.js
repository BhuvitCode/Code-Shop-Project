const mongoose = require('mongoose');

const {Schema} = mongoose;

const WishListSchema = new Schema({
    User_Name:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    Product_Identfier:{
        type: String,
        required: true
    },

    Product_Name:{
        type: String,
        required: true
    },

    Product_Price:{
        type: Number,
        required: true
    },

    Product_Image_Url:{
        type: String,
        required: true
    },

    Product_Stock:{
        type: Number,
        required: true
    },

    Product_Desc:{
        type: String,
        required: true
    },

})


const WishlistMongooseModel = mongoose.model('Wishlist', WishListSchema)

WishlistMongooseModel.createIndexes();

module.exports = WishlistMongooseModel