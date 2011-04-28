class User
  # just set the variable
  constructor: (@firstName, @lastName) ->
  
  # single line method
  fullName: -> "#{@firstName} #{@lastName}"

  # multi line method
  pairingName: (other) ->
    pair = fullName()
    if other
      pair += " #{other}"
    pair
  