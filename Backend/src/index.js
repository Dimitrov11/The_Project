const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

// Connect to DB
mongoose.connect("mongodb://localhost:27017/The_Project")
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("DB error, ", err.message));

app.use(express.urlencoded({ extended: false }));



app.listen(PORT, console.log(`Server listening on port ${PORT}...`));