/* tabs */
export function tabs() {
  let fields = document.querySelectorAll('.tabs')

  if (fields) {
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];

      let buttons = field.querySelectorAll('.tabs__tab')
      let bodies = field.querySelectorAll('.tabs__item-body')

      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        const body = bodies[i]
        button.addEventListener('click', setStatus)

        function setStatus() {
          if (!(field.classList.contains('tabs_spoiler'))) {
            field.querySelector('.tabs__tab_active').classList.remove('tabs__tab_active')
            field.querySelector('.tabs__item-body_active').classList.remove('tabs__item-body_active')
            button.classList.add('tabs__tab_active')
            body.classList.add('tabs__item-body_active')
          } else {
            if (button.classList.contains('tabs__tab_active')) {
              button.classList.remove('tabs__tab_active')
              body.style.maxHeight = 0
              body.classList.remove('tabs__item-body_active')
            } else if (field.querySelector('.tabs__tab_active')) {
              field.querySelector('.tabs__tab_active').classList.remove('tabs__tab_active')
              field.querySelector('.tabs__item-body_active').style.maxHeight = 0
              field.querySelector('.tabs__item-body_active').classList.remove('tabs__item-body_active')
              button.classList.add('tabs__tab_active')
              body.style.maxHeight = body.scrollHeight + 'px'
              body.classList.add('tabs__item-body_active')
            } else {
              button.classList.add('tabs__tab_active')
              body.style.maxHeight = body.scrollHeight + 'px'
              body.classList.add('tabs__item-body_active')
            }
          }
        }
      }
    }
  }
}