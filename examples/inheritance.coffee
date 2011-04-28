class User
  constructor: (@firstName, @lastName) ->
  
class AgedUser extends User
  constructor: (@age, others...) -> super(others...)