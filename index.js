var express=require('express');
var routes=require('./routes/Myroutes.js');
var rot=require('./routes/yo.js');
var app=express();

app.use('/',routes);
app.use('/yo',rot);

var server =app.listen(4000,function(){});
