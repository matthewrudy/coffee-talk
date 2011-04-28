var places, sayWords, split;
var __slice = Array.prototype.slice;
sayWords = function() {
  var words;
  words = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return words.join(", ");
};
places = function() {
  var first, rest, second;
  first = arguments[0], second = arguments[1], rest = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
  return "first:  " + first + "\nsecond: " + second + "\nreset:  " + rest;
};
split = function() {
  var first, last, middle, _i;
  first = arguments[0], middle = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), last = arguments[_i++];
  return "first was " + first;
};