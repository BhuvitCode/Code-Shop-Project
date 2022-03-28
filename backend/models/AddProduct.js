const mongoose = require('mongoose');

const {Schema} = mongoose

const ProductSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },

    product_Desc: {
        type: String,
        required: true
    },

    product_Category:{
        type: String,
        required: true
    },

    product_price: {
        type: Number,
        required: true
    },

    product_stock: {
        type: Number,
        required: true
    },

    product_Owned_By_Company_Name: {
        type: String,
        required: true
    },

    product_image_url: {
        type: String,
        required: true
    },

    product_sub_category:{
        type: String,
        required: true
    }
})


const ProductModal = mongoose.model('Products', ProductSchema)

ProductModal.createIndexes();

module.exports = ProductModal