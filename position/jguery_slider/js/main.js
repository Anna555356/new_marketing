$(function() {

    $('.slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        Infinite: true,
        arrows: false,
        // speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,

        speed: 300,
        fade: true,
        cssEase: 'linear',
    });

    $('.slider-text').slick({
        dots:true,
        arrows:false,

    });

})

