# single line
sayOnce = (word) -> word

# multilines
sayThrice = (word) ->
  word +
  word +
  word
  
# with no arguments
fortyTwo = -> 42

# with no body
blackHole = (input)->

# with nothing
nothing = ->

# splat everything
sayWord12 = (words...) ->
  words[11]
  
# splat at the end
places = (first, second, rest...) ->
  """
  first:  #{first}
  second: #{second}
  reset:  #{rest}
  """
  
# splat in the middle
split = (first, middle..., last) ->
  "first was #{first}"

maritalStatus = switch numberOfWives
  when 0 then "single"
  when 1 then "married"
  when 2 then "bigamist"
  when 3,4,5 then "polygamist"
  else "undefined"

# "hello"
hello = "hello"

# "say hello"
sayHello = "say #{hello}"

# "say hello hello"
helloHello = "#{sayHello} #{hello}"

# "dont #{sayHello}"
notInterpolated = 'dont #{sayHello}'

# define a class
class User

  # define the constructor
  constructor: (name) -> @name = name
  
# create an instance
raffi = new User "Raffi"

# extend it
class AdminUser extends User

# extend it again
class SuperAdminUser extends AdminUser

superman = new SuperAdminUser "Super Man"

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
    
class Monkey
  # explicit assignment
  constructor: (food) -> @favouriteFood = food 

me = new Monkey "Banana"
me.favouriteFood # "Banana"

class Giraffe
  # argument assignment
  constructor: (@favouriteFood) ->

you = new Giraffe "Leaves"
you.favouriteFood # "Leaves"

class Gobby
  constructor: (@name) ->
  
  speak: -> alert("I am #{name}")
  
$(document).ready ->
  gobby = new Gobby "Jobby"
  gobby.speak()
