//funcionamento do carrossel
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none'); // Esconde todos os slides
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0; // Volta para o primeiro slide
    slides[slideIndex].style.display = 'block'; // Mostra o slide atual
}

// Altera o slide
function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].style.display = 'none'; // Esconde o slide atual
    slideIndex += n; // Atualiza o índice do slide
    if (slideIndex >= slides.length) slideIndex = 0; // Volta para o primeiro slide
    if (slideIndex < 0) slideIndex = slides.length - 1; // Volta para o último slide
    slides[slideIndex].style.display = 'block'; // Mostra o novo slide
}

// Inicializa o carrossel
showSlides();
setInterval(showSlides, 3000); // Altera automaticamente a cada 3 segundos
