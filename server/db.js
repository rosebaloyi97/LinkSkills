const mysql = require("mysql");
require("dotenv").config();
env = require("./");
//LinkSkills database details
const dataseConnection = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

dataseConnection.connect((err) => {
  if (!err) {
    console.log("Database connected successfully");
  } else {
    console.log(err);
  }
});


module.exports = dataseConnection;
