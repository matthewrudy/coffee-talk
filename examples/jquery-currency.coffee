# var CURRENCIES = {
#   HKD: {
#     num: 344,
#     e: 2,
#     currency: "Hong Kong dollar"
#   },
#   SGD: {
#     num: 702,
#     e: 2, 
#     currency: "Singapore dollar"
#   }
# };
# 
# function find_currency(code) {
#   return CURRENCIES[code];
# }

CURRENCIES =
  HKD:
    num: 344
    e: 2
    currency: "Hong Kong dollar"
  SGD:
    num: 702
    e: 2
    currency: "Singpore dollar"
      
findCurrency = (code) ->
  CURRENCIES[code]