$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,       // Enable center mode
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true, // Enables navigation arrows
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });   
});


