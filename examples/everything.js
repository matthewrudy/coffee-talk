(function() {
  var AdminUser, Child, CleverChild, Giraffe, Monkey, SuperAdminUser, User, blackHole, fortyTwo, hello, helloHello, me, notInterpolated, nothing, raffi, sayHello, sayOnce, sayThrice, superman, you;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
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
}).call(this);
