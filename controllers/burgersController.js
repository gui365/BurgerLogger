var express = require("express");
var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(request, response){
  burger.getAll(function(data) {
    var allBurgers = {
      burgers: data
    };
    response.render("index", allBurgers);
  })
});

router.post("/api/burgers", function(request, response) {
  burger.add("name", req.body.name, function (data) {
    response.json(data);
  })
});

router.put("/api/burgers/:id", function (request, response) {
  var condition = `id = ${request.params.id}`
  burger.update("eaten", condition, function(result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    };
  })
});