let test = require('tape');
let JSDOM = require("jsdom").JSDOM;
let fs = require('fs');
let html = fs.readFileSync('./calc.html', 'utf8');

const DOM = new JSDOM(html);

global.document = DOM.window.document;

let calculator = require('./calc.js');

test("Tape is working", function(t) {
  t.equal(1, 1, "Input 1 should equal 1");
  t.end();
});

test("Adds two numbers", function(t) {
  const actual = calculator.calculate('2', 'add', '2');
  const expected = 4;
  t.equal(actual, expected, "2 + 2 = 4");
  t.end();
});

test("Subtracts two numbers", function(t) {
  const actual = calculator.calculate('20', 'subtract', '2');
  const expected = 18;
  t.equal(actual, expected, "20 - 2 = 18");
  t.end();
});

test("Multiplies two numbers", function(t) {
  const actual = calculator.calculate('14', 'multiply', '4');
  const expected = 56;
  t.equal(actual, expected, "14 * 4 = 56");
  t.end();
});

test("Divides two numbers", function(t) {
  const actual = calculator.calculate('17', 'divide', '2');
  const expected = 8.5;
  t.equal(actual, expected, "17 / 2 = 8.5");
  t.end();
});
