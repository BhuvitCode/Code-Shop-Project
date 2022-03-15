const mongoose = require('mongoose');

const {Schema} = mongoose

const Sub_CategorySchema = new Schema({
    Sub_Category_Name:{
        type: String,
        required: true
    },

    Category_Name:{
        type: String,
        required: true
    }
})


const Sub_Category_Model = mongoose.model('Sub-CategoryModel', Sub_CategorySchema);
Sub_Category_Model.createIndexes()

module.exports = Sub_Category_Model
