let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-bg img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Change text
    const currentSlide = slides[currentIndex];
    const title = currentSlide.getAttribute('data-title');
    const description = currentSlide.getAttribute('data-description');

    document.getElementById('hero-title').textContent = title;
    document.getElementById('hero-description').textContent = description;

    // Change active dot 
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Chanage slide aftrer 3s
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startSlideShow();

    document.querySelector('.next').addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            currentSlide(index);
            startSlideShow();
        });
    });
});
