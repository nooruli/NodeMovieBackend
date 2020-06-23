var express=require('express');
var router = express.Router();


router.get('/:id',(req,res)=>{res.send('This is yo route'+req.params.id)});

module.exports=router;