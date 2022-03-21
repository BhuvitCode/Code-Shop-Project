const mongoose = require('mongoose');

const {Schema} = mongoose;

const WishListSchema = new Schema({
    User_Name:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    Product_Identfier:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // TotalAmountOFAllTheProducts:{
    //     type: Number,
    //     required: true
    // }
})


const WishlistMongooseModel = mongoose.model('Wishlist', WishListSchema)

WishlistMongooseModel.createIndexes();

module.exports = WishlistMongooseModel