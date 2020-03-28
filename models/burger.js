var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cbController) {
        orm.selectAll("burgers", function (data) {
            cbController(data)
        })
    },
    insertOne: function (newBurger, cbController) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [newBurger, false], function (data) {
            cbController(data)
        })
    },
    // test code for updateOne from Jessie
    updateOne: function (cbController) {
        orm.updateOne("burgers", ["devoured"], [true], function (res) {
            cbController(res);
        });
    }

}

module.exports = burger;
