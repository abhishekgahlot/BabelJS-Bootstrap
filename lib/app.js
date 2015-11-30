'use strict';

var express = require('express');
var app = express();
var iso = require('../portable');

console.log(iso.validateId('USER_123'));

var server = require('http').createServer(app);

app.use('/', express.static(__dirname + '/../dist', { maxAge: 1000000 }));

server.listen(9000, () => console.log("App Started"));
