const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();
