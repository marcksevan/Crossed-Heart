const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
    });
}

navSlide();

Set-Cookie: cname=cvalue; SameSite=None; Secure

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length -2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
