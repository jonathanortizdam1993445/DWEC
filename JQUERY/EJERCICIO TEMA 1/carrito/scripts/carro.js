jQuery(document).ready(function(){
    $(".item").css("background", "#cecece");
    $("#cart_items").css("border","4px solid black");
    $("img").css("border","1px solid blue");
    $(".item > label").css("text-decoration","underline");
    $("#cart_container button").css("color","red");
    $(".item > label+label").css("color", "white");
    $("input, *:contains('€')").css("color","green");
    $("div:empty").css("background","yellow");
    $(".item:first,.item:last").css("background","red");
    $("[src*='camiseta']").css("border","1px solid green")
});



















