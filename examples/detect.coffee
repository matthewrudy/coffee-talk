SPIES = [
  {name: "Matthew", spy: no}
  {name: "Steve",   spy: yes}
  {name: "Eddie",   spy: no}
]

Array::detect = (func) ->
  for element in this
    if func(element)
      return element
      
Array::select = (func) ->
  (element for element in this when func(element))
  
theSpy   = SPIES.detect (person) -> person.spy == true
nonSpies = SPIES.select (person) -> person.spy != true
