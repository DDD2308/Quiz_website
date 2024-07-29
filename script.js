document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const cardWidth = slider.querySelector('.card').offsetWidth;
    const visibleCards = 2; // Number of cards to show at a time
    let currentIndex = 0;

    function updateSlider() {
        const offset = currentIndex * -cardWidth * visibleCards;
        slider.style.transform = `translateX(${offset}px)`;
    }

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    rightButton.addEventListener('click', () => {
        const totalCards = slider.querySelectorAll('.card').length;
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initialize the slider
    updateSlider();
});
