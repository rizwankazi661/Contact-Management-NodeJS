const { CONSTANTS } = require("../contants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case CONSTANTS.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case CONSTANTS.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case CONSTANTS.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case CONSTANTS.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case CONSTANTS.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            console.log("No error. All good!");
            break;
    }
};

module.exports = errorHandler;