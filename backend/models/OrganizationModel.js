const mongoose = require('mongoose');

const {Schema} = mongoose;

const OraganizationSchema = new Schema({

    Oraganization_Name: {
        type: String,
        required: true
    },

    Oraganization_Email: {
        type: String,
        required: true
    },

    Oraganization_Helpline_PhoneNumber: {
        type: Number,
        required: true
    },

    Oraganization_HeadQuater_Address: {
        type: String,
        required: true
    },

    Organization_Founder_Name: {
        type: String,
        required: true
    },

    Organization_Password: {
        type: String,
        required: true
    },

    Organization_Description: {
        type: String,
        required: true
    },
})

const OrganizationMongooseModel = mongoose.model('Organizations', OraganizationSchema)

OrganizationMongooseModel.createIndexes();

module.exports = OrganizationMongooseModel