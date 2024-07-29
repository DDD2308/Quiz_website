document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slider.querySelector('.card').offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    leftButton.addEventListener('click', () => {
        const totalCards = slider.querySelectorAll('.card').length;
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    rightButton.addEventListener('click', () => {
        const totalCards = slider.querySelectorAll('.card').length;
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initialize the slider
    updateSlider();
});
