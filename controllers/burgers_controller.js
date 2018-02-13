var express = require('express');
var router = express.Router();
var orm = require('../config/orm.js')

router.get("/", function(req, res){
    console.log("we got it");
    res.render("index");
});
router.get("/burgers", function(req, res){
   orm.selectAll(function(thingsFromDB){
       res.json(thingsFromDB);
   });
});
module.exports = router;
