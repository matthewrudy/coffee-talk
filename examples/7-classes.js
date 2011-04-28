var AdminUser, SuperAdminUser, User, raffi, superman;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
User = (function() {
  function User(name) {
    name = this.name;
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