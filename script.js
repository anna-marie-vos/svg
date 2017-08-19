// logo id == '#logo1'

console.log("hello")
$(document).ready(function(){
  animateLogo();
})

//TweenMax.to('#logo1', 1, {x:850, y:830, ease: Power4.easeInOut})
function animateLogo() {
  TweenMax.to('#logo1', 1, {x:850})
}
//TweenMax.to('#logo1', 1, {y:830, delay:1})

//TweenMax.from('#logo1', 1, {x:850})

// TweenMax.fromTo('#logo1', 1,
//   {autoAlpha:1, x:0,y:830},
//   {autoAlpha:0.2,x:850, y:830}
// )
