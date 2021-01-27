/* slider */

import Swiper from '../local_modules/swiper/swiper-bundle.esm'

export function slider() {
  var slider = new Swiper('.slider', {
    // Optional parameters
    loop: true, //бесконечные слайды
    slidesPerView: 3, //слайдов к показу
    spaceBetween: 30, //расстояние между слайдами
    slidesPerGroup: 1, //количество слайдов на свайп (соблюдать целочисленное деление perView/perGroup)
    shortSwipes: false, //включение/отключение функции короткого свайпа
    longSwipesMs: 70, //длительность длинного свайпа в МС
    // If we need pagination
    pagination: {
      el: '.slider__pagination',
      type: 'bullets', // Can be "bullets", "fraction", "progressbar" or "custom"
      clickable: 'true',

      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet_active',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.slider__scrollbar',
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