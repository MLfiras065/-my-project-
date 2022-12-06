
$(document).ready(function(){
  $(".card").hide()
  $(".card1").show(2000)
  
   $(".myButton").click(function(){
    $(".card1").hide(2000)
    $(".card2").hide(2000)
    $(".card2").slideDown(3000)
    $(".card3").hide(2000)
    $(".card3").slideDown(2000)
    $(".card2").animate({height: "100px"});
    $(".card2").animate({height: "-100px"});


  });


});
