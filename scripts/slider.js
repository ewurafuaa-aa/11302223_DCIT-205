document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    let isTransitioning = false;

    function showSlide(index) {
        if (!isTransitioning) {
            isTransitioning = true;
            const newPosition = -index * (100 / sliderItems.length) + '%';
            slider.style.transform = 'translateX(' + newPosition + ')';
            currentIndex = index;
        }
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(prevIndex);
    }

    // Set an interval for automatic slide change (optional)
    setInterval(nextSlide, 7000); // Change slide every 7 seconds (adjust as needed)

    // Enable slide transition after each transition end
    slider.addEventListener('transitionend', function () {
        isTransitioning = false;
    });

    // Event listeners for navigation arrows
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    // Debounce the window resize event to update the slide width dynamically
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            const slideWidth = 100 / sliderItems.length;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(' + (-currentIndex * slideWidth) + '%)';
            setTimeout(function () {
                slider.style.transition = 'transform 0.5s ease-in-out';
            }, 0);
        }, 200);
    });
});
