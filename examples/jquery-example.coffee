# $(document).ready( function(){
#     $(".slider").each(function() {
#       var slideContainer = $(this);
#       
#       var slideClicker = slideContainer.find(".slide_label");
#       var slideBody    = slideContainer.find(".slide_body");
#       
#       // if javascript is enabled we'll hide the body
#       slideContainer.find(".slide_body").css({"display": "none"});
# 
#       slideClicker.click(function() {
#         slideBody.toggle();
#       });
#     });
# });

$(document).ready ->
  $(".slider").each ->
    slideContainer = $(this)
    
    slideClicker = slideContainer.find(".slide_label")
    slideBody    = slideContainer.find(".slide_body")
    
    slideContainer.find(".slide_body").css display: "none"
    slideClicker.click ->
      slideBody.toggle()