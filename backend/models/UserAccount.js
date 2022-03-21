const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserAccountSchema = new Schema({

    username:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    PhoneNumber:{
        type: Number,
        required: true
    },

    Country:{
        type: String,
        required: true
    },

    Address:{
        type: String,
        required: true
    },

    State:{
        type: String,
        required: true
    },

    City:{
        type: String,
        required: true
    }
})

const UserAccountModel = mongoose.model('UserAccounts', UserAccountSchema)

UserAccountModel.createIndexes();

module.exports = UserAccountModel