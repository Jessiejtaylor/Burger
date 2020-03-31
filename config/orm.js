
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

 

var orm = {
  selectAll: function(tableName, cbModel){
    connection.query("select * from ?? ", tableName, function(err,data){
      cbModel(data)
    })
  },
  insertOne: function(tableName, columnNames, values, cbModel){
var sqlStatement =     connection.query("insert into ?? (??, ??) values(?, ?)", [tableName, columnNames[0], columnNames[1], values[0], values[1]], function(err,data){
      cbModel(data)
    })
    console.log(sqlStatement.sql)
  },
   updateOne: function(tableName, columnNames, values, cbModel){
   var sqlStatement =   connection.query("update ?? set ?? = ? where ?? = ?", [tableName, columnNames[0], values[0], columnNames[1], values[1]], function(error, data){
       cbModel(data)
     })

     console.log(sqlStatement.sql)
   }

}

module.exports = orm;
