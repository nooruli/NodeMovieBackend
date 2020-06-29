var pg = require('pg');
var express=require('express');
var router = express.Router();

var conString = "postgres://ebobuoul:uz8TZ_oQueJ768MnuGmUoxWtN5Lv_ws9@ruby.db.elephantsql.com:5432/ebobuoul" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * from movie', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    
    router.get("/",(req,res)=>{res.send(result.rows)});
   
    client.end();
  });
});


module.exports=router;
