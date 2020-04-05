var { db } = require("./Connection");

db.connect();

module.exports = {
  selectQuery: table => "SELECT * FROM " + table
};
