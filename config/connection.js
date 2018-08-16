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

// ---------------------------

// connection.query("SELECT * FROM menu", (error, results) => {
//   if(error) {
//     console.log(error);
//   };
//   console.log(results);
//   connection.end();
// });

// -------------------------
// var express = require("express");
// var app = express();

// app.get("/", (request, response) => {
//   var newBurger = {
//     burgers: response
//   }
// });

// ---------------------------
var express = require("express");
var app = express();

app.get("/", (request, response) => {
  

  connection.query("SELECT * FROM menu", (error, results) => {
    if(error) {
      console.log(error);
    };
    
    var newBurger = {
      burgers: results
    }

    response.render("index", newBurger)

  });


});