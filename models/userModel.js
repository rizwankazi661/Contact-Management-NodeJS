const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add the user name"],
    },
    emailId: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"],
    },
}, {
    timStamps: true
});

module.exports = mongoose.model("User", userSchema);