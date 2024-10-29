let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Actualizar el índice de la diapositiva actual
    currentSlide += direction;

    // Si el índice es menor que 0, ir a la última diapositiva
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    // Si el índice es mayor o igual al número de diapositivas, ir a la primera
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Desplazar el slider
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}