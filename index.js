var express=require('express');
var cors = require('cors')

var trending=require('./routes/trending.js');
var search=require('./routes/search.js');

var app=express();
app.use(cors());

app.set('port',(process.env.PORT||4000));
//app.use(express.static(_dirname+'/models'));

app.use('/',trending);
app.use('/search',search);

app.listen(app.get('port'),function(){
  console.log("Node app is running 0n "+app.get('port'))
});
