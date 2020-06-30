const { Client } = require('pg');
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
  var DATABASE_URL="postgres://ubvrsggnkyomah:a6d43665456f3d123013c69c878738e8edead869a4b26356baa432a01e013931@ec2-35-153-12-59.compute-1.amazonaws.com:5432/d66jmdqke3ae0h";

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

  var temp1=`${data.original_title}`;
  var original_title=temp1.replace("'","^");
  var temp2=`${data.overview}`;
  var overview=temp2.replace("'","^");
       
client.connect();

client.query(`insert into movie values('${data.adult}','${data.backdrop_path}','${data.id}','${data.original_language}','${original_title}','${overview}','${data.release_date}','${data.vote_average}','${data.vote_count}','${data.popularity}')`, (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
  });
    res.json({status:"true"});
   });

module.exports=router;
