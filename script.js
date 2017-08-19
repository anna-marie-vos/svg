// logo id == '#logo1'
$(document).ready(function(){
  animateAllLogos();
})

function animateLogo() {
  // TweenMax.to('#logo1', 1, {x:850, y:830, ease: Power4.easeInOut} )

  // TweenMax.to('#logo1', 1, {x:850})
  // TweenMax.to('#logo1', 1, {y:830, delay:1})

  // TweenMax.from('#logo1', 1, {x:850})

  TweenMax.fromTo('#logo1', 1,
    {autoAlpha:1, x:0,y:830},
    {autoAlpha:0.2,x:850, y:830}
  )
}

function animateAllLogos() {
    // TweenMax.to(['#logo1','#logo2','#logo3'], 1, {y:830})
    // TweenMax.staggerTo(['#logo1','#logo2','#logo3'], 1, {y:830}, 0.25)
    // TweenMax.staggerFrom(['#logo1','#logo2','#logo3'], 1, {y:830}, 0.25)
    TweenMax.staggerFromTo(['#logo1','#logo2','#logo3'], 1, {y:300}, {y:830, ease:Bounce.easeOut }, 0.25)

}
