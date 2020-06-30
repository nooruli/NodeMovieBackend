const { Client } = require('pg');
var express=require('express');
var router = express.Router();

router.get('/',(req,res)=>{
   
var DATABASE_URL="postgres://ubvrsggnkyomah:a6d43665456f3d123013c69c878738e8edead869a4b26356baa432a01e013931@ec2-35-153-12-59.compute-1.amazonaws.com:5432/d66jmdqke3ae0h";

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query(`SELECT * from movie`, (err, result) => {
  if (err) throw err;
  for (let row of result.rows) {
    console.log(JSON.stringify(row));
  }
  res.json(result.rows);
  client.end();
});
 });

module.exports=router;
