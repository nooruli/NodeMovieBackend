var express=require('express');
var fetch=require('node-fetch');

var router = express.Router();


router.get('/:name',(req,res)=>{
  
  var url="https://api.themoviedb.org/3/search/movie?api_key=8b5e3a87ebe14efb138bc4772c8b722c&query="+req.params.name;

  var settings = { method: "Get" };

  fetch(url,settings)
  .then(res=>res.json())
  .then((data)=>{
        res.json(data);
  }
  )
});

module.exports=router;
