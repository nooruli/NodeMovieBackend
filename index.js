var express=require('express');
var routes=require('./routes/Myroutes.js');
var rot=require('./routes/yo.js');
var app=express();

app.set('port',(process.env.PORT||5000));
//app.use(express.static(_dirname+'/models'));

app.use('/',routes);
app.use('/yo',rot);

app.listen(app.get('port'),function(){
  console.log("Node app is running 0n "+app.get('port'))
});
