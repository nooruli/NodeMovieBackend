
var express=require('express');
var router = express.Router();
var fetch=require('node-fetch');

router.get('/',(req,resp)=>{

 let url ="https://api.themoviedb.org/3/movie/top_rated?api_key=53d7e674926499a485a2f6bed92cdedb";

let settings = { method: "Get" };
var dataa=new Object();
fetch(url, settings)
    .then(res => res.json())
    .then((data) => {
        console.log((data));
        dataa=(data);
        resp.json(dataa);
    });
});

module.exports=router;