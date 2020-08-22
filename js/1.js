$(document).ready(function() {
    $('.header_burger').click(function(event){
       $('.header_burger,.header_menu').toggleClass('active'); 
       $('body').toggleClass('lock'); 
    });
    $('.header_menu').click(function(event){
       $('.header_burger,.header_menu').removeClass('active'); 
       $('body').removeClass('lock'); 
    });
});
if($(document).height() <= $(window).height()){
    $(".footer").addClass("navbar-fixed-bottom");
}

$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow:4,
        slidesToScroll:4,
        speed: 1200,
        easing: 'ease',
        autoplay:true, 
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        centerMode: false,
        waitForAnimate: false
    });
});
