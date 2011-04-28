# "hello"
hello = "hello"

# "say hello"
sayHello = "say #{hello}"

# "say hello hello"
helloHello = "#{sayHello} #{hello}"

# "dont #{sayHello}"
notInterpolated = 'dont #{sayHello}'