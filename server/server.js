var express = require('express');
var app = express(); //lancio express
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname+"/../client");


app.use(bodyparser.json());
app.use(morgan('dev'));

require('./config/database.js')(mongoose);

require('./routes/routes.js')(app, express, path);

app.listen(3003, function(){
  console.log("server in ascolto su http://localhost:3003");
});
