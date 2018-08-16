var connection = require("./connection");

var orm = {
  getAll: function(table, cb) {
    connection.query(`SELECT * from ${table}`, (error, results) => {
      if (error) {
        console.log(error);
      };
      cb(results);
    });
  },
  add: function(table, column, value, cb) {
    connection.query(`INSERT INTO ${table} (${column}) VALUES (${value})`, (error, result) => {
      if (error) {
        console.log(error);
      };
      cb(result);
    })
  },
  update: function(table, column, condition, cb) {
    connection.query(`UPDATE ${table} SET ${column} WHERE ${condition}`, (error, result) => {
      if (error) {
        console.log(error);
      };
      cb(result);
    })
  }
}

module.exports = orm;