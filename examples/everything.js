(function() {
  var AdminUser, Child, CleverChild, Giraffe, Gobby, Monkey, SuperAdminUser, User, blackHole, fortyTwo, hello, helloHello, maritalStatus, me, notInterpolated, nothing, places, raffi, sayHello, sayOnce, sayThrice, sayWord12, split, superman, you;
  var __slice = Array.prototype.slice, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  sayOnce = function(word) {
    return word;
  };
  sayThrice = function(word) {
    return word + word + word;
  };
  fortyTwo = function() {
    return 42;
  };
  blackHole = function(input) {};
  nothing = function() {};
  sayWord12 = function() {
    var words;
    words = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return words[11];
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
  maritalStatus = (function() {
    switch (numberOfWives) {
      case 0:
        return "single";
      case 1:
        return "married";
      case 2:
        return "bigamist";
      case 3:
      case 4:
      case 5:
        return "polygamist";
      default:
        return "undefined";
    }
  })();
  hello = "hello";
  sayHello = "say " + hello;
  helloHello = "" + sayHello + " " + hello;
  notInterpolated = 'dont #{sayHello}';
  User = (function() {
    function User(name) {
      this.name = name;
    }
    return User;
  })();
  raffi = new User("Raffi");
  AdminUser = (function() {
    function AdminUser() {
      AdminUser.__super__.constructor.apply(this, arguments);
    }
    __extends(AdminUser, User);
    return AdminUser;
  })();
  SuperAdminUser = (function() {
    function SuperAdminUser() {
      SuperAdminUser.__super__.constructor.apply(this, arguments);
    }
    __extends(SuperAdminUser, AdminUser);
    return SuperAdminUser;
  })();
  superman = new SuperAdminUser("Super Man");
  Child = (function() {
    function Child(name, age) {
      this.name = name;
      this.age = age;
    }
    Child.prototype.sayName = function() {
      return "My name is " + this.name;
    };
    return Child;
  })();
  CleverChild = (function() {
    function CleverChild() {}
    CleverChild.prototype.sayName = function() {
      return CleverChild.__super__.sayName.call(this) + (" and I am " + this.age + " years old");
    };
    return CleverChild;
  })();
  Monkey = (function() {
    function Monkey(food) {
      this.favouriteFood = food;
    }
    return Monkey;
  })();
  me = new Monkey("Banana");
  me.favouriteFood;
  Giraffe = (function() {
    function Giraffe(favouriteFood) {
      this.favouriteFood = favouriteFood;
    }
    return Giraffe;
  })();
  you = new Giraffe("Leaves");
  you.favouriteFood;
  Gobby = (function() {
    function Gobby(name) {
      this.name = name;
    }
    Gobby.prototype.speak = function() {
      return alert("I am " + name);
    };
    return Gobby;
  })();
  $(document).ready(function() {
    var gobby;
    gobby = new Gobby("Jobby");
    return gobby.speak();
  });
}).call(this);
