# splat everything
sayWords = (words...) ->
  words.join(", ")
  
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