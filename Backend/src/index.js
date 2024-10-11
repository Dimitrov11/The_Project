const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));



app.listen(PORT, console.log(`Server listening on port ${PORT}...`));