const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const PORT = process.env.PORT || 50001;

app.use(express.json()); // express as a middleware in order (Whenever we need to send data from client to server we need to use a body parser)
app.use("/api/contacts", require('./routes/contactRoutes')); // known as middleware
app.use("/api/users", require('./routes/userRoutes')); // known as middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})



























// app.get('/api/contacts', (req, res) => {

//     // res.send("Get All Contacts")

//     res.json({
//         message: "Get all contacts"
//     }) // if you want to send response as a json without status

//     // res.status(200).json({
//     //     message: "Get all contacts"
//     // }) // if you want to send response as a json with status
// })