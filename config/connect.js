// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "fu2vizll4cfuirvk",
  password: "z7bkbh9o4rzq5htx",
  database: "fqqddqlef63mjh54"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;