var express = require('express');
var controller = require('./controllers/catalog-controller');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public/assets'));
controller(app);
app.listen(8000);
console.log('You are listening to port 8000');