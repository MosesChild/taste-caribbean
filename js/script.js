$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});