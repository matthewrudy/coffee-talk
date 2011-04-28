var SPIES, nonSpies, theSpy;
SPIES = [
  {
    name: "Matthew",
    spy: false
  }, {
    name: "Steve",
    spy: true
  }, {
    name: "Eddie",
    spy: false
  }
];
Array.prototype.detect = function(func) {
  var element, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    element = this[_i];
    if (func(element)) {
      return element;
    }
  }
};
Array.prototype.select = function(func) {
  var element, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    element = this[_i];
    if (func(element)) {
      _results.push(element);
    }
  }
  return _results;
};
theSpy = SPIES.detect(function(person) {
  return person.spy === true;
});
nonSpies = SPIES.select(function(person) {
  return person.spy !== true;
});