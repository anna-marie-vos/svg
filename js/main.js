/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here
	const $backFallingLeaves = $('#brownLeaf, #redLeaf, #orangeLeaf')
	const $textLine1 = $('.text-line-1')
	const $textLine2 = $('.text-line-2')
	const $textGreeting = $('.text-greeting')
	const $treeLeaves = $('[id^=treeleaf]')
	const $floorLeaves = $('[id^=floorleaf]')
	const $bird = $('#Bird')
	const $birdHat = $bird.find('#BirdHat')
	const $birdEyes = $bird.find('#leftEye, #rightEye')
	const $nest = $('#NestAndLeaves')
	const $tree = $('#tree_trunk')
	const $cardContainer = $('.card.container')
	// clear stage
function clearStage() {
	const clearTL = new TimelineMax()
	clearTL
		.set($backFallingLeaves, {autoAlpha:0} )
		.set($textLine1, {autoAlpha:0} )
		.set($textLine2, {autoAlpha:0} )
		.set($textGreeting, {autoAlpha:0} )
		.set($treeLeaves, {autoAlpha:0} )
		.set($bird,{y:'+=65', autoAlpha:0})
		.set($nest, {autoAlpha:0} )
		.set($tree, {autoAlpha:0} )
		.set($floorLeaves, {y:'+=275', onComplete:showContainer})

	return clearTL
}

function showContainer() {
	$cardContainer.css('display', 'block')
}
	// enter floor vegetation
function enterFloorVegies() {
	const fleavesTL = new TimelineMax()
	fleavesTL
		.staggerTo($floorLeaves, 1, {y:0, ease:Back.easeInOut},0.01)
		.fromTo($tree,1.1,{scaleY:0.2, autoAlpha:0, transformOrigin:'centre bottom' },
			{scaleY:1,autoAlpha:1, transformOrigin:'centre bottom', ease: Back.easeInOut})
		.fromTo($tree,0.8,{scaleX:0.2, autoAlpha:0, transformOrigin:'centre bottom' },
			{scaleX:1,autoAlpha:1, transformOrigin:'centre bottom', ease: Back.easeInOut},'-=0.9')

	return fleavesTL
}
	// enter tree

	// enter the greeting text

	// the GO function ...to kick things all off
	function go() {
		console.log('go...');
		const masterTL = new TimelineMax()
		masterTL
			.add(clearStage(),'scene-clear-stage')
			.add(enterFloorVegies(),'scene-floor-veggies')
	}

go()

})(jQuery);
