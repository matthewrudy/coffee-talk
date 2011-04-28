# kind of like map
mrs = ("Mrs #{name}" for name in ["A", "B", "C"])

# but we can step it
tens = ("#{n} times" for n in [0..100] by 10)

# or guard it
evenSquares = (n*n for n in [1..10] when n%2==0)