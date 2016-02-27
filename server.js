var express = require('express');
var handlebars = require('handlebars');
var app = express();

app.get('/', function(req, res){
  res.send('hello universe');
});

app.listen(3001, function(){
  console.log('All fired up on three-thousand and one');
});
