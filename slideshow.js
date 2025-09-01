document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.banner-slider .slide');
    const prev = document.querySelector('.banner-slider .slider-arrow.prev');
    const next = document.querySelector('.banner-slider .slider-arrow.next');
    const dotsContainer = document.querySelector('.banner-slider .slider-dots');
    let current = 0;
    let autoSlideInterval;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        // Dots
        dotsContainer.innerHTML = '';
        slides.forEach((slide, i) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === idx ? ' active' : '');
            dot.onclick = () => {
                current = i;
                showSlide(current);
                resetAutoSlide();
            };
            dotsContainer.appendChild(dot);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
        resetAutoSlide();
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    // Event listeners
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Init
    showSlide(current);
    resetAutoSlide();
});