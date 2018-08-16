var orm = require("../config/orm");

var burger = {
  getAll: function(cb) {
    orm.getAll("menu", function(response){
      cb(response);
    })
  },
  add: function(column, value, cb) {
    orm.add("menu", column, value, function(response){
      cb(response);
    });
  },
  update: function(column, condition, cb) {
    orm.update("menu", column, condition, function(response){
      cb(response);
    })
  }
};

module.exports = burger;