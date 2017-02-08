var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded();

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/customerlist', urlParser, function(req, res){
    console.log('got a request for customers')
     res.send(list.toString());

     console.log(req.body.name);
     res.end('User input:' + '\n' + req-body.name);
});

var server = app.listen(8088, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('express app listening to %h %p', host, port);
});