// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var connection = require('./config/connection.js');

//console.log(connection);
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

//body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"})); 
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });

 connection.query('SELECT * FROM burgers', function(err, thingsFromDB){
   console.log(thingsFromDB);
 });