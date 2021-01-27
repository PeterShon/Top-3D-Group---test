/* header */
export function header() {
  const header = document.querySelector('.header')
  window.addEventListener('scroll', lvlScroll)

  lvlScroll()

  function lvlScroll() {
    if (document.documentElement.clientWidth * 0.1 > window.pageYOffset) {
      header.classList.remove('header_onscroll')
    } else {
      header.classList.add('header_onscroll')
    }
  }
}