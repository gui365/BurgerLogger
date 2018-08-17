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
    // console.log(value);
    connection.query(`INSERT INTO ${table} (${column}) VALUES (?)`, [value], (error, result) => {
      if (error) {
        console.log(error);
        return;
      };
      cb(result);
    })
  },
  update: function(table, change, condition, cb) {
    connection.query(`UPDATE ${table} SET ${change} WHERE ${condition.toString()}`, (error, result) => {
      if (error) {
        console.log(error);
      };
      cb(result);
    })
  }
}

module.exports = orm;