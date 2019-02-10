var express = require('express');
var cors = require('cors');

var servecontrol = require('./controllers/controller');

const app = express();
app.use(express.static('./public'));

app.use(cors());

var corsOptions = {
    origin: 'http://127.0.0.1',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


servecontrol(app);

app.listen(4000, '127.0.0.1',(err)=>{
    if (err) console.log(err);
    else console.log("Listening on Port 4000..")
});

