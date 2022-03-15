const mongoose = require('mongoose');

const {Schema} = mongoose


const ReviewSchema = new Schema({

    review_title:{
        type:String,
        required:true
    },

    review_desc:{
        type:String,
        required:true
    },

    product_overall_experience:{
        type:String,
        required:true
    },

    product_rating:{
        type:Number,
        required:true
    },

    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})


const ReviewMongooseModel = mongoose.model('Review', ReviewSchema);
ReviewMongooseModel.createIndexes()

module.exports = ReviewMongooseModel
