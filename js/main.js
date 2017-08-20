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

	// enter tree

	// enter the greeting text

	// the GO function ...to kick things all off
	function go() {
		console.log('go...');
		const masterTL = new TimelineMax()
		masterTL
			.add(clearStage(),'scene-clear-stage')
	}

go()

})(jQuery);
