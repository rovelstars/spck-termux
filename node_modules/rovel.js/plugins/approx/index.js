(function() {
  'use strict';

  function addCommas(num, opts) {
    if (opts.separator === false) {
      return num.toString();
    }

    if (num < 1000) {
      return num.toString();
    }

    var separator = (typeof opts.separator === 'string' ? opts.separator : ',');

    var out = [],
      digits = Math.round(num).toString().split('');

    digits.reverse().forEach(function(digit, i){
      if (i && i%3 === 0) {
        out.push(separator);
      }
      out.push(digit);
    });

    return out.reverse().join('');
  }

  function formatDec(num, base, opts) {
    var workingNum = num/base;
    var ROUND = Math[opts.round ? 'round' : 'floor'];
    if (opts.decimal === false) {
      num = ROUND(workingNum);
      return num.toString();
    }
    num = workingNum < 10 ? (ROUND(workingNum * 10) / 10) : ROUND(workingNum);
    num = num.toString();
    if (typeof opts.decimal === 'string') {
      num = num.replace('.', opts.decimal);
    }
    return num;
  }

  var THOUSAND = 1000;
  var TEN_THOUSAND = 10000;
  var MILLION = 1000000;
  var BILLION = 1000000000;
  var TRILLION = 1000000000000;

  function approximateNumber(num, opts) {
    var numString;
    opts = opts || {};

    // if we're working on a negative number, convert it to positive and then prefix the final result with a -
    var negative = num < 0;
    num = Math.abs(num); // No need to check if negative

    var thousandsBreak = opts.min10k ? TEN_THOUSAND : THOUSAND;

    if (num < thousandsBreak) {
      numString = addCommas(formatDec(num, 1, opts), opts);
    } else if (num < MILLION) {
      numString =  formatDec(num, THOUSAND, opts) + 'k';
    } else if (num < BILLION) {
      numString =  formatDec(num, MILLION, opts) + 'm';
    } else if (num < TRILLION) {
      numString =  addCommas(formatDec(num,  BILLION, opts), opts) + 'b';
    } else {
      numString = addCommas(formatDec(num,  TRILLION, opts), opts) + 't';
    }

    if (negative) {
      numString = '-' + numString;
    }

    if (opts.capital) {
      numString = numString.toUpperCase();
    }

    if (opts.prefix) {
      numString = opts.prefix + numString;
    }
    if (opts.suffix) {
      numString = numString + opts.suffix;
    }

    return numString;
  }

  approximateNumber.addCommas = addCommas;

  if (typeof module === 'object') {
    // node.js/common js
    module.exports = approximateNumber;
  } else if (typeof define === 'function') {
    // require.js/amd
    define([], approximateNumber);
  } else if(typeof window !== 'undefined') {
    window.approximateNumber = approximateNumber;
  }
}());
