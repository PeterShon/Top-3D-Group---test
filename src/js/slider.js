/* slider */

import Swiper from '../local_modules/swiper/swiper-bundle.esm'

export function slider() {
  var slider = new Swiper('.slider', {
    breakpoints: {
      // when window width is >= 480px
      480: {
        // Optional parameters
        loop: true, //бесконечные слайды
        slidesPerView: 1, //слайдов к показу
        spaceBetween: 0, //расстояние между слайдами
        slidesPerGroup: 1, //количество слайдов на свайп (соблюдать целочисленное деление perView/perGroup)
        allowTouchMove: false, //без свайпов
        autoplay: {
          delay: 5000,
        }
      },
      // when window width is >= 768px
      768: {
        // Optional parameters
        loop: true, //бесконечные слайды
        slidesPerView: 2, //слайдов к показу
        spaceBetween: 20, //расстояние между слайдами
        slidesPerGroup: 1, //количество слайдов на свайп (соблюдать целочисленное деление perView/perGroup)
        allowTouchMove: false, //без свайпов
        autoplay: {
          delay: 5000,
        }
      },
      // when window width is >= 1024px
      1024: {
        // Optional parameters
        loop: true, //бесконечные слайды
        slidesPerView: 2, //слайдов к показу
        spaceBetween: 70, //расстояние между слайдами
        slidesPerGroup: 1, //количество слайдов на свайп (соблюдать целочисленное деление perView/perGroup)
        allowTouchMove: false, //без свайпов
        autoplay: {
          delay: 5000,
        }
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-nav__button_next',
      prevEl: '.slider-nav__button_prev',
    },
    // NameSpace
    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__item',
    slideActiveClass: 'slider__item_active',
    slideDuplicateActiveClass: 'slider__item_duplicate-active',
    slideVisibleClass: 'slider__item_visible',
    slideDuplicateClass: 'slider__item_duplicate',
    slideNextClass: 'slider__item_next',
    slideDuplicateNextClass: 'slider__item_duplicate-next',
    slidePrevClass: 'slider__item_prev',
    slideDuplicatePrevClass: 'slider__item_duplicate-prev',
    slideBlankClass: 'slider__item_invisible-blank',
  })
}