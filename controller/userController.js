const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc Register the user
// @route POST api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { userName, emailId, password } = req.body;
    if (!userName || !emailId || !password) {
        res.status(404);
        throw new Error("All fields are mandatory.");
    }
    const userAvailable = await User.findOne({ emailId });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered.");
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        userName,
        emailId,
        password: hashPassword
    })
    console.log(`User created ${user}`);
    res.json({
        message: "User Registered successfully"
    })
})

// @desc Login the user
// @POST api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
        res.status(404);
        throw new Error("All fields are mandatory.");
    }
    const user = await User.findOne({ emailId });
    // Compare password
    if ((user) && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                userName: user.userName,
                emailId: user.emailId,
                id: user.id,
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );
        res.status(200).json({ accessToken });
    }
    else {
        res.status(401);
        throw new Error("email or password is not valid")
    }
})

// @desc Current user information
// @GET api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Current user information"
    })
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}