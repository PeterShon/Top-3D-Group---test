/* scroll-parallax effect */
export function scrollParallax() {
  var rocket1 = new Rellax('.scroll-parallax__item_1', {
    center: true,
    speed: 2
  });
  var rocket2 = new Rellax('.scroll-parallax__item_2', {
    center: true,
    speed: 5
  });
  var rocket3 = new Rellax('.scroll-parallax__item_3', {
    center: true,
    speed: 10
  });
  var planet = new Rellax('.scroll-parallax__item_4', {
    center: true,
    speed: -4
  });
}