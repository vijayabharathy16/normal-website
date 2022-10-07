
$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
        $('.navbar').addClass('bg-navbar');
        }else{
            $('.navbar').removeClass('bg-navbar');
        }
    });
    let links = $('.navbar-nav a.nav-links');
    links.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });

    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed:300,
        slidesToShow:1,
        adaptiveHeight: true
    });
});


