export function myJquery() {
  let counter = 0
  setInterval(() => {
    $('.jquery')[0].innerHTML = 'Сообщение выведено с помощью JQuery. Страница запущена ' + counter + ' секунд назад'
    counter++
  }, 1000);
}