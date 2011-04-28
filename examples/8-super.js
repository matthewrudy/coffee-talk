var Child, CleverChild;
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