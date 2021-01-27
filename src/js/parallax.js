/* parallax effect */
export function parallax() {
  setFunc()
  window.addEventListener('resize', () => {
    setFunc()
  })

  //адаптив
  function setFunc() {
    let items = []
    items.words = document.querySelectorAll('.parallax__text')
    let boundFunc = parallax.bind(null, items.words)
    if (window.matchMedia("(max-width: 767px)").matches) {

      document.removeEventListener('mousemove', boundFunc)
    } else {
      document.addEventListener('mousemove', boundFunc)
    }
  }

  //эффект
  function parallax(words, e) {
    //console.log([e, words])
    let clientWidth = window.innerWidth
    let clientHeight = window.innerHeight
    let posX = -(-clientWidth / 2 + e.clientX)
    let posY = -(-clientHeight / 2 + e.clientY)
    if (words) {
      words.forEach(text => {
        text.style.transform = `translate(${posX / 100 * text.dataset.mt}px, ${posY / 100 * text.dataset.mt}px)`
      });
    }
  }
}