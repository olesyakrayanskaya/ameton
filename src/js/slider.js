'use strict';

const btnRight = document.querySelector('.faq__btn_right');
const btnLeft = document.querySelector('.faq__btn_left');
const slider = document.querySelector('.faq__slider');
const slides = document.querySelectorAll('.slide');
const slide = document.querySelector('.slide');
const slideWidth = slide.offsetWidth;
let slideMrg = 24;
const slidesCount = slides.length;
let visibleSlidesCount = 4;
let clicks = 0;

const md = window.matchMedia('(max-width: 967px)');

if (md.matches) {
  visibleSlidesCount = 3;
}

const sm = window.matchMedia('(max-width: 670px)');

if (sm.matches) {
  visibleSlidesCount = 2;
  slideMrg = 12;
}

const xsm = window.matchMedia('(max-width: 480px)');

if (xsm.matches) {
  visibleSlidesCount = 1;
  slideMrg = 0;
}

btnRight.addEventListener('click', () => {
  if (clicks < slidesCount - visibleSlidesCount) {
    clicks += 1;
    slider.style.transform = `translateX(${-(slideWidth + slideMrg) * clicks}px)`;
  }
  if (clicks >= slidesCount - visibleSlidesCount) {
    btnRight.style.opacity = 0;
  }
  btnLeft.style.opacity = 1;
});

btnLeft.addEventListener('click', () => {
  if (clicks > 0) {
    clicks -= 1;
    slider.style.transform = `translateX(${-(slideWidth + slideMrg) * clicks}px)`;
  }
  if (clicks <= 0) {
    btnLeft.style.opacity = 0;
  }
  btnRight.style.opacity = 1;
});
