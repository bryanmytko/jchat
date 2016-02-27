var express = require('express');
var app = express();
var port = 3001;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port, function(){
  console.log(`All fired up on ${port}`);
});
