const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const hamburgerMenu = document.querySelector('.hamburger-menu')

toggleBtn.onclick = function(){
    hamburgerMenu.classList.toggle('open')
    const isOpen = hamburgerMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].clientWidth;

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  const offset = -1 * currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}
