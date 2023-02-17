
 let toggle =document.getElementById('all');
 let side_menu = document.getElementById('side_menu')

 document.onclick = function(e){
   if(e.target.id !=='side_menu' && e.target.id !=='all' ){
      all.classList.remove('active');
       side_menu.classList.remove('active')
   }
}

     toggle.onclick = function(){
      all.classList.toggle('active');
      side_menu.classList.toggle('active')

     }
  //============== 720px menu====================//
  const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.slider-container');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
let currentSlide = 0;
let slideInterval;

function startSlide() {
  slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function pauseSlide() {
  clearInterval(slideInterval);
}

leftArrow.addEventListener('click', () => {
  pauseSlide();
  goToSlide(currentSlide - 1);
});

rightArrow.addEventListener('click', () => {
  pauseSlide();
  goToSlide(currentSlide + 1);
});

startSlide();
