import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { burger } from '../js/burger.js'
import { slider } from '../js/slider.js'
import { header } from '../js/header.js'
import { select } from '../js/select.js'
import { feedback } from '../js/feedback.js'
import { animAppear } from '../js/anim-appear.js'
require(`fslightbox`)
require(`../local_modules/choices.js/public/assets/scripts/choices.min`)

document.addEventListener(`DOMContentLoaded`, start())

function start() {
  moveUp()
  popups()
  burger()
  slider()
  header()
  select()
  feedback()
  animAppear()
}
