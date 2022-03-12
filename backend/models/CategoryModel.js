const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({

    category_name: {
        type: String,
        required: true
    }

})

const CategoryModel = mongoose.model('CategoryModel', CategorySchema);
CategoryModel.createIndexes()

module.exports = CategoryModel
