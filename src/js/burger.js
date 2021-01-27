/* burger */
export function burger() {
  let burger = document.querySelector('.burger')
  let burgerBtn = burger.querySelector('.burger__button')
  let body = document.querySelector('body')

  burgerBtn.addEventListener('click', setStatus)

  function setStatus() {
    if (burger.classList.contains('burger_active')) {
      burger.classList.remove('burger_active')
      burger.classList.add('burger_unactive')
      body.classList.remove('lock')
    } else {
      burger.classList.add('burger_active')
      burger.classList.remove('burger_unactive')
      body.classList.add('lock')
    }
  }

}