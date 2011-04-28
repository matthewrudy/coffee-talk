maritalStatus = switch numberOfWives
  when 0 then "single"
  when 1 then "married"
  when 2 then "bigamist"
  when 3,4,5 then "polygamist"
  else "undefined"