'use strict';

const btnRight = document.querySelector('.faq__btn_right');
const btnLeft = document.querySelector('.faq__btn_left');
const slider = document.querySelector('.faq__slider');
const slides = document.querySelectorAll('.slide');
const slidesCount = slides.length;
let visibleSlidesCount = 4;
let clicks = 0;

btnRight.addEventListener('click', () => {
  if (clicks < slidesCount - visibleSlidesCount) {
    clicks += 1;
    slider.style.transform = `translateX(${-306 * clicks}px)`;
  }
  if (clicks >= slidesCount - visibleSlidesCount) {
    btnRight.style.opacity = 0;
  }
  btnLeft.style.opacity = 1;
});

btnLeft.addEventListener('click', () => {
  if (clicks > 0) {
    clicks -= 1;
    slider.style.transform = `translateX(${-306 * clicks}px)`;
  }
  if (clicks <= 0) {
    btnLeft.style.opacity = 0;
  }
  btnRight.style.opacity = 1;
});
