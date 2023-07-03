//Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

//Use CORS
app.use(cors());

//Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Create Server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    //Console log to show server is running
    console.log('Example app listening at http://%s:%s', host, port);
});

//Get

