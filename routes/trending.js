
var express=require('express');
var router = express.Router();
var fetch=require('node-fetch');

router.get('/',(req,resp)=>{

 var url ="https://api.themoviedb.org/3/movie/top_rated?api_key=53d7e674926499a485a2f6bed92cdedb";

var settings = { method: "Get" };
fetch(url, settings)
    .then(res => res.json())
    .then((data) => {
        console.log((data));
        resp.json(data);
    });
});

module.exports=router;
