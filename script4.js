$(document).ready(function(){
  MasterTime()
})


function MasterTime() {
  const masterTl = new TimelineMax()
  masterTl
    .add('beggining') //this is a label
    .to('#logo1', 1, {x:850})
    .add('endLogo1')
    .to('#logo2', 1, {y:830 },'endLogo1-=0.5')
    .to('#logo3', 1, {x:'-=850', onComplete: showBigLogo},'-=0.5') //onCompleteis a callback
}

function showBigLogo(color) {
  const bigL = document.querySelector('#bigLogo')
  TweenMax.set(bigL, {
    autoAlpha:1
  })
}
