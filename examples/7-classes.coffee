# define a class
class User

  # define the constructor
  constructor: (name) -> name = @name
  
# create an instance
raffi = new User "Raffi"

# extend it
class AdminUser extends User

# extend it again
class SuperAdminUser extends AdminUser

superman = new SuperAdminUser "Super Man"