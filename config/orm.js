
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableName, cbModel){
    connection.query("select * from ?? ", tableName, function(err,data){
      cbModel(data)
    })
  },
  insertOne: function(tableName, columnNames, values, cbModel){
    connection.query("insert into ?? (??, ??) values(?, ?)", [tableName, columnNames[0], columnNames[1], values[0], values[1]], function(err,data){
      cbModel(data)
    })
  },
  // updateOne: function(tableName, columnValues, condition, cbModel){
  //   var queryString = "UPDATE " + tableName;

  //   queryString += " SET ";
  //   queryString += objToSql(columnValues);
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   connection.query(queryString, function(err,result) {
  //     if (err) throw err;
  //     cbModel(result)
  //   })
  // }

}

module.exports = orm;
