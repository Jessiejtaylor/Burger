var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
     
  burger.selectAll(function(data){
    res.render("index", {
      burger_data: data
    })
  })
});



router.post("/api/burgers",function(req,res){
  var newBurger = req.body.burger_name
  burger.insertOne(newBurger,function(data){
      res.redirect("/")
  })
})

router.get("/burgers", function(req, res) {
  //FIXME:
});

// post route -> back to index


// put route -> back to index


module.exports = router;
