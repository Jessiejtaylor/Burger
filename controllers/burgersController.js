var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
 // res.redirect("/api/burgers")
  burger.selectAll(function (data) {
    res.render("index", {
      burger_data: data
    })
  })
});



router.post("/api/burgers", function (req, res) {
  var newBurger = req.body.burger_name
  burger.insertOne(newBurger, function (data) {
    res.redirect("/")
  })
})

 



// put route -> back to index
router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result)
    res.sendStatus(200)
  })
})
module.exports = router;
