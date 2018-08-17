var express = require("express");
var app = express();

var burger = require("../models/burger.js")

var controller = function (app) {
  app.get("/", function(request, response){
    burger.getAll(function(data) {
      var allBurgers = {
        burgers: data
      };
      response.render("index", allBurgers);
    })
  });
  
  app.post("/api/burgers", function(request, response) {
    var nameBurger = request.body.name;
    burger.add("name", nameBurger, function (data) {
      response.json(data);
    })
  });
  
  app.put("/api/burgers/:id", function (request, response) {
    var condition = `id = ${request.params.id}`;
    var change = `eaten=true`;
    
    burger.update(change, condition, function(result) {
      if (result.changedRows == 0) {
        return response.status(404).end();
      } else {
        response.status(200).end();
      };
    })
  });
}

module.exports = controller;