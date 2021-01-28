/* burger */
export function burger() {
  let burger = document.querySelector('.burger')
  let topLine = document.querySelector('.header__top-line')
  let navBtn = document.querySelector('.burger__title_nav')
  let categoryBtn = document.querySelector('.burger__title_category')
  let nav = document.querySelector('.burger__nav')
  let category = document.querySelector('.burger__category')
  let burgerBtn = burger.querySelector('.burger__button')
  let body = document.querySelector('body')

  burgerBtn.addEventListener('click', setStatus)
  navBtn.addEventListener('click', setStatusNav)
  categoryBtn.addEventListener('click', setStatusNav)

  function setStatus() {
    if (burger.classList.contains('burger_active')) {
      topLine.classList.remove('header__top-line_active')
      burger.classList.remove('burger_active')
      burger.classList.add('burger_unactive')
      body.classList.remove('lock')
    } else {
      topLine.classList.add('header__top-line_active')
      burger.classList.add('burger_active')
      burger.classList.remove('burger_unactive')
      body.classList.add('lock')
    }
  }

  function setStatusNav() {
    if (nav.classList.contains('burger__nav_active')) {
      navBtn.classList.remove('js_active')
      categoryBtn.classList.add('js_active')
      nav.classList.remove('burger__nav_active')
      category.classList.add('burger__category_active')
    } else {
      navBtn.classList.add('js_active')
      categoryBtn.classList.remove('js_active')
      nav.classList.add('burger__nav_active')
      category.classList.remove('burger__category_active')
    }
  }

}