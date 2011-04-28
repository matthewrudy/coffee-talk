# chained comparisons
isTeenager = (age) -> 20 > age > 12

# multiple assignment
[a,b] = [1,2]

# monkeypatching
String::dasherize = ->
  this.replace /_/g, "-"
  
# argument defaults
speakTo = (person, say="Hello") ->
  "#{say} #{person}"