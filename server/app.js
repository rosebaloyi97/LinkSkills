// imports || requires dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
const route = require("./route");
require('dotenv').config();
// init
const app = express();
const PORT = process.env.PORT || 5000;

// use middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/linkSkills", route);

// routes
app.use("/", (req, res) => res.status(200).json({ status: "Server up" }));

// server listen
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));
