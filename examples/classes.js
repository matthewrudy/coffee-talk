var User;
User = (function() {
  function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  User.prototype.fullName = function() {
    return "" + this.firstName + " " + this.lastName;
  };
  User.prototype.pairingName = function(other) {
    var pair;
    pair = fullName();
    if (other) {
      pair += " " + other;
    }
    return pair;
  };
  return User;
})();