var CURRENCIES, findCurrency;
CURRENCIES = {
  HKD: {
    num: 344,
    e: 2,
    currency: "Hong Kong dollar"
  },
  SGD: {
    num: 702,
    e: 2,
    currency: "Singpore dollar"
  }
};
findCurrency = function(code) {
  return CURRENCIES[code];
};