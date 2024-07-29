$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true, // Enables navigation arrows
        infinite: true,
        dots: false,
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
