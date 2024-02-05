const asyncHandler = require('asyncHandler');
const jwt = require('jwt');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.header.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {

        })
    }
})
