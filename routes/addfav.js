var pg = require('pg');
var express=require('express');
var fetch=require('node-fetch');
var router = express.Router();

router.get('/:id',(req,res)=>{
   let url=`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=53d7e674926499a485a2f6bed92cdedb`;
   
  var settings={method:"GET"};
    fetch(url,settings)
  .then(res=>res.json())
  .then(data=>
  {

      var conString = "postgres://ebobuoul:uz8TZ_oQueJ768MnuGmUoxWtN5Lv_ws9@ruby.db.elephantsql.com:5432/ebobuoul" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  
  client.query(`insert into movie values('${data.adult}','${data.backdrop_path}','${data.id}','${data.original_language}','${data.original_title}','${data.overview}','${data.release_date}','${data.vote_average}','${data.vote_count}','${data.popularity}')`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("added to favourites");
    client.end();
  });
});
  res.json({status:"true"});
   
  });
   
   });

module.exports=router;
