(function() {
  var AgedUser, User;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __slice = Array.prototype.slice;
  User = (function() {
    function User(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    return User;
  })();
  AgedUser = (function() {
    __extends(AgedUser, User);
    function AgedUser() {
      var age, others;
      age = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this.age = age;
      AgedUser.__super__.constructor.call(this, others);
    }
    return AgedUser;
  })();
}).call(this);
