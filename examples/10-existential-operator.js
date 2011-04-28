typeof value != "undefined" && value !== null;
typeof value != "undefined" && value !== null ? value : someDefault;
typeof value != "undefined" && value !== null ? value : value = someDefault;
if (typeof value != "undefined" && value !== null) {
  value.someMethod();
}