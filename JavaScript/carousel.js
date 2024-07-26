document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const numSlides = slides.length;

    let clonedFirst = slides[0].cloneNode(true);
    let clonedLast = slides[numSlides - 1].cloneNode(true);

    sliderWrapper.appendChild(clonedFirst);
    sliderWrapper.insertBefore(clonedLast, slides[0]);

    let currentIndex = 1;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function goToSlide(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function goToNextSlide() {
        currentIndex++;
        if (currentIndex > numSlides) {
            currentIndex = 1;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(0)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease';
                goToSlide(currentIndex);
            }, 50);
        } else {
            goToSlide(currentIndex);
        }
    }

    function goToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = numSlides - 1;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(-${numSlides * 100}%)`;
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 0.5s ease';
                goToSlide(currentIndex);
            }, 50);
        } else {
            goToSlide(currentIndex);
        }
    }

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        goToNextSlide();
        autoSlideInterval = setInterval(goToNextSlide, 3000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        goToPrevSlide();
        autoSlideInterval = setInterval(goToNextSlide, 3000);
    });

    let autoSlideInterval = setInterval(goToNextSlide, 3000);
});
