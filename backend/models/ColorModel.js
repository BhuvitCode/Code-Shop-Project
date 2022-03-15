const mongoose = require('mongoose');

const {Schema} = mongoose

const ColorSchema = new Schema({
    color_name: {
        type: String,
        required: true
    },

    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})


const ColorMongooseModel = mongoose.model('Colors', ColorSchema);
ColorMongooseModel.createIndexes()

module.exports = ColorMongooseModel