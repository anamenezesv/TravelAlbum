// No arquivo "item.js"
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const maxSlides = slides.length - 1;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = currentSlide < maxSlides ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : maxSlides;
    showSlide(currentSlide);
}

// Inicializa o carrossel
showSlide(currentSlide);

// Adiciona eventos de clique para os botões "Anterior" e "Próximo"
document.getElementById('prevItem').addEventListener('click', prevSlide);
document.getElementById('nextItem').addEventListener('click', nextSlide);
