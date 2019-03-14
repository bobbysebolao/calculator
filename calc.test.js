let test = require('tape');
let JSDOM = require("jsdom").JSDOM;
let fs = require('fs');
let html = fs.readFileSync('./calc.html', 'utf8');

const DOM = new JSDOM(html);

global.document = DOM.window.document;

let logic = require('./calc.js');

test("Tape is working", function(t) {
  t.equal(1, 1, "Input 1 should equal 1");
  t.end();
});

test("Adds two numbers", function(t) {
  const actual = logic.sayHello;
  const expected = 5;
  t.equal(actual, expected, "2 + 2 = 5");
  t.end();
});
