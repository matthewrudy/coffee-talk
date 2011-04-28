# define a class
class Child
  constructor: (@name, @age) ->
  
  sayName: -> "My name is #{@name}"

# and a subclass with a difference
class CleverChild

  # say it
  sayName: -> super() +
  
    # then be a bit smart
    " and I am #{@age} years old"