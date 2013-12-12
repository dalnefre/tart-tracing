/*

readme.js - readme example script

The MIT License (MIT)

Copyright (c) 2013 Dale Schumacher, Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/
"use strict";

var tart = require('../index.js');
var util = require('util');

var tracing = tart.tracing();

var createdBeh = function createdBeh(message) {};
var becomeBeh = function becomeBeh(message) {};

var oneTimeBeh = function oneTimeBeh(message) {
    var actor = this.sponsor(createdBeh); // create
    actor('foo'); // send
    this.behavior = becomeBeh; // become
};

var actor = tracing.sponsor(oneTimeBeh);
actor('bar');

var effect;

console.log('tracing:');
console.log(util.inspect(tracing, {depth: null}));
while ((effect = tracing.dispatch()) != false) {
    console.log('effect:');
    console.log(util.inspect(effect, {depth: null}));
};
console.log('tracing:');
console.log(util.inspect(tracing, {depth: null}));