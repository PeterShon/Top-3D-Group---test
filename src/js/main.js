import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { parallax } from '../js/parallax.js'
import { burger } from '../js/burger.js'
import { slider } from '../js/slider.js'
import { tabs } from '../js/tabs.js'
import { header } from '../js/header.js'
import { select } from '../js/select.js'
import { feedback } from '../js/feedback.js'
import { stairs } from '../js/stairs.js'
import { video } from '../js/video.js'
import { animAppear } from '../js/anim-appear.js'
import { scrollParallax } from '../js/scroll-parallax.js'
import { tilt } from '../js/tilt.js'
require(`fslightbox`)
require(`../local_modules/choices.js/public/assets/scripts/choices.min`)
require(`../local_modules/rellax/rellax.min`)
require(`../local_modules/vanilla-tilt/dist/vanilla-tilt.min`)

document.addEventListener(`DOMContentLoaded`, start())

function start() {
  moveUp()
  popups()
  parallax()
  burger()
  slider()
  tabs()
  header()
  select()
  feedback()
  stairs()
  video()
  animAppear()
  scrollParallax()
  tilt()
}
