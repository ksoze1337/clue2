#!/usr/bin/env node
var shorten = 'http://goo.gl/';
var shorten2 = 'http://bit.ly/'
var code = 'hqxZDs';
var code2 = '1j76WFS';

printCode(code2);

function printCode(code) {
  var ascii = '';
  var pretty = '';
  for (var i = 0; i < code.length; i++) {
    ascii += '' + code.charCodeAt(i);
    pretty += (i > 0 ? ',' : '') + code.charCodeAt(i);
  }
  console.log(ascii);
  console.log(pretty);
  var num = parseInt(ascii, 10);
  var factors = factorize(num);
  console.log(factors);
}

function factorize(number, tally) {
  tally = tally || {};
  var found = false;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      tally[i] = tally[i] || 0;
      tally[i]++;
      factorize(number / i, tally);
      found = true;
      break;
    }
  }
  if (!found) {
    tally[number] = 1;
  }
  return tally;
}

function keys(obj) {
  var keys = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  return keys;
}
