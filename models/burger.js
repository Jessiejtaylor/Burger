var orm = require("../config/orm.js");

var burger = {
selectAll: function(cbController){
       orm.selectAll("burgers", function(data){
             cbController(data)
       })
},
insertOne: function(newBurger,cbController){
   orm.insertOne("burgers", ["burger_name", "devoured"], [newBurger, false], function(data){
       cbController(data)
   })
}

}

module.exports = burger;
