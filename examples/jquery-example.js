$(document).ready(function() {
  return $(".slider").each(function() {
    var slideBody, slideClicker, slideContainer;
    slideContainer = $(this);
    slideClicker = slideContainer.find(".slide_label");
    slideBody = slideContainer.find(".slide_body");
    slideContainer.find(".slide_body").css({
      display: "none"
    });
    return slideClicker.click(function() {
      return slideBody.toggle();
    });
  });
});