// contactModel.js
// var mongoose = require('mongoose');
const {Schema,model}=require('mongoose');
// Setup schema
var contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    phone: {
        type: String
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
module.exports = model('contact', contactSchema);


