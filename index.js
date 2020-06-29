var express=require('express');
var cors = require('cors')

var trendingRoute=require('./routes/trending.js');
var searchRoute=require('./routes/search.js');
var getfavRoute=require('./routes/getfav.js');
var addfavRoute=require('./routes/addfav.js');

var app=express();
app.use(cors());

app.set('port',(process.env.PORT||4000));
//app.use(express.static(_dirname+'/models'));

app.use('/',trendingRoute);
app.use('/search',searchRoute);
app.use('/getfav',getfavRoute);
app.use('/addfav',addfavRoute);

app.listen(app.get('port'),function(){
  console.log("Node app is running 0n "+app.get('port'))
});
