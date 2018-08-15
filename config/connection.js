var mysql = require("mysql");
var keys = require("./keys")

var connection = mysql.createConnection(keys);

connection.connect(error => {
  if (error) {
    console.log(error);
    return;
  };
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;