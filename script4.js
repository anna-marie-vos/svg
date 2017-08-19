$(document).ready(function(){
  MasterTime()
})


function MasterTime() {
  const masterTl = new TimelineMax()
  masterTl
    .to('#logo1', 1, {x:850})
    .to('#logo2', 1, {y:830},'-=0.5')
    .to('#logo3', 1, {y:'-=850'},'-=0.5')
}

function showBigLogo(color) {
  var bigL = document.querySelector('#bigLogo');

  TweenMax.set(bigL, {
    autoAlpha: 1,
    fill: color
  });
}
