let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function changeSlide(direction) {
  clearInterval(slideInterval);
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
  slideInterval = setInterval(nextSlide, 3000);
}

function goToSlide(index) {
  clearInterval(slideInterval);
  currentSlide = index;
  showSlide(currentSlide);
  slideInterval = setInterval(nextSlide, 3000);
}