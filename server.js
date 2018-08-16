var express = require("express");
var bodyParser = require("body-parser");

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up express
var PORT = process.env.PORT || 3000;
var app = express();

// Set up port
app.listen(PORT, function() {
  console.log(`Server listening on PORT: ${PORT}`);
});

// Set up static files folder
app.use(express.static("public"));

// Set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/catsController.js");
app.use(routes);