var evenSquares, mrs, n, name, tens;
mrs = (function() {
  var _i, _len, _ref, _results;
  _ref = ["A", "B", "C"];
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    _results.push("Mrs " + name);
  }
  return _results;
})();
tens = (function() {
  var _results;
  _results = [];
  for (n = 0; n <= 100; n += 10) {
    _results.push("" + n + " times");
  }
  return _results;
})();
evenSquares = (function() {
  var _results;
  _results = [];
  for (n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
      _results.push(n * n);
    }
  }
  return _results;
})();