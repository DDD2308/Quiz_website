$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 2, // Show 2 cards at a time
        slidesToScroll: 1, // Scroll 1 card at a time
        arrows: true, // Show navigation arrows
        infinite: true, // Infinite looping
        dots: true, // Show dots for navigation
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 card at a time on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});
