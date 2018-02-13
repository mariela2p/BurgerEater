var connection = require('./connection.js');
var orm ={
selectAll: function(cb){
    connection.query('SELECT * FROM burgers', function(err, thingsFromDB){
        console.log(thingsFromDB);
        cb(thingsFromDB);
      });
}, //?

insertOne: function(){
    
}, //?

updateOne: function(){
    
} //?
};
module.exports = orm;