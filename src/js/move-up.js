/* move-up */
export function moveUp() {
  //результат проверки нативной поддержки плавного скролла (ie11)
  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
  //получение объектов
  var moveUpItem = document.querySelector('.move-up');
  //вызов функции, добавляющей функции в объект
  setFunc(moveUpItem);
  //вызов функции оценки положения окна при загрузке старицы, для отображения/скрытия скролл-кнопки
  lvlScroll();
  //обработка события onScroll
  window.addEventListener('scroll', lvlScroll)
  //обработка события onClick
  moveUpItem.addEventListener('click', function () {
    if (supportsNativeSmoothScroll) {
      //обработка кода по условию "если есть скролл"
      if (window.pageYOffset) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      if (window.pageYOffset) {
        scrollToElem('#header');
      }
    }
  })

  //изменение статуса объекта
  function fz_hider() {
    this.classList.remove('move-up_visible');
  }
  function fz_shower() {
    this.classList.add('move-up_visible');
  }
  //запись функций в каждый анимируемый объект
  function setFunc(moveUpItem) {
    moveUpItem.hider = fz_hider;
    moveUpItem.shower = fz_shower;
  }

  //функция, определяющая статус объектов по высоте скролла
  function lvlScroll() {
    if (document.documentElement.clientWidth * 0.05 > window.pageYOffset) {
      moveUpItem.hider();
    } else {
      moveUpItem.shower();
    }
  }
}