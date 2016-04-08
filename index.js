var http = require('http');
var express = require('express');
var morgan = require('morgan');

var port = 9000;

var app = express();
app.use(morgan('dev'));
app.set('env', 'production');
app.use(express.static('/var/cache/munin/www'));

var server = http.createServer(app);
server.listen(port);
server.on('listening',function(){console.log("Listening on port "+port)});
