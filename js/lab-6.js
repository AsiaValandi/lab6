$(document).ready(function(){
  $(".wrapper").slick({
    dots: true,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    edgeFriction: true,
    arrows: false,
  });
  $('#but-1').threestatebutton({
    statecount: 3,
    state: 0,
    stateChanged: stateChanged,
  });

  $('#but-2').threestatebutton({
    statecount: 2,
    state: 0,
    stateChanged: stateChanged,
  });

  $(".sw").on("click", ".switch", function() {
    //удаляем активные классы
    $(".sw").find(".active").removeClass("active");
    //добавляем активный классы
    $(this).addClass("active");
    $(".tab-form").eq($(this).index()).addClass("active");
  });
  $("#signButton").click(function(){
    var name = $("Name").val();
    var email = $("email-x").val();
    var password = $("password-x").val();
    var number = $("number-x").val();

    console.log("Sign in" + name);
    console.log("name:" + email);
    console.log("email" + password);
    console.log("code" + number);
  });
  $("#loginButton").click(function(){
    var emaily = $("email-y").val();
    var passwordy = $("password-y").val();

    console.log("name:" + email-y);
    console.log("email" + password-y);
  });
});
function stateChanged(state, source){
  var elements = document.querySelectorAll("[role='presentation']");
  elements[state].click();
}
