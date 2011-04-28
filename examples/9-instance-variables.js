var Giraffe, Monkey, me, you;
Monkey = (function() {
  function Monkey(food) {
    this.favouriteFood = food;
  }
  return Monkey;
})();
me = new Monkey("Banana");
me.favouriteFood;
Giraffe = (function() {
  function Giraffe(favouriteFood) {
    this.favouriteFood = favouriteFood;
  }
  return Giraffe;
})();
you = new Giraffe("Leaves");
you.favouriteFood;