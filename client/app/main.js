'use strict';

var utils = require('./utils');
var iso = require('../../portable');
var Square = require('./Square');

console.log("Client side code started");
//console.log(iso.validateId("353"));

var s1 = new Square(5);
var s2 = new Square(10);

console.log(s1.area, s2.area);
console.log(s1.sayName());

//utils.count();