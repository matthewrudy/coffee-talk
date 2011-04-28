var maritalStatus;
maritalStatus = (function() {
  switch (numberOfWives) {
    case 0:
      return "single";
    case 1:
      return "married";
    case 2:
      return "bigamist";
    case 3:
    case 4:
    case 5:
      return "polygamist";
    default:
      return "undefined";
  }
})();