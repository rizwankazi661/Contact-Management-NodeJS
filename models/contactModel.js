const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add the contact name'],
    },
    emailId: {
        type: String,
        required: [true, 'Please add the email address'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add the phone number'],
    },
}, {
    timeStamps: true,
})

module.exports = mongoose.model('Contact', contactSchema);