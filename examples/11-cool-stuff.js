var a, b, isTeenager, speakTo, _ref;
isTeenager = function(age) {
  return (20 > age && age > 12);
};
_ref = [1, 2], a = _ref[0], b = _ref[1];
String.prototype.dasherize = function() {
  return this.replace(/_/g, "-");
};
speakTo = function(person, say) {
  if (say == null) {
    say = "Hello";
  }
  return "" + say + " " + person;
};