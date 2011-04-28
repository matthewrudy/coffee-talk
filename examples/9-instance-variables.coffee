class Monkey
  # explicit assignment
  constructor: (food) -> 
    @favouriteFood = food 
  
me = new Monkey "Banana"
me.favouriteFood # "Banana"

class Giraffe
  # argument assignment
  constructor: (@favouriteFood) ->
  
you = new Giraffe "Leaves"
you.favouriteFood # "Leaves"