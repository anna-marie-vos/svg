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
	// enter tree-stuffs
function enterTreeStuff() {
	const treeStuffTL = new TimelineMax()
	treeStuffTL
		.staggerFromTo($treeLeaves,0.5,
			{scale: 0.2, autoAlpha:0, transformOrigin:'center bottom'
			},
			{scale: 1, autoAlpha:1, transformOrigin: 'center bottom'
			},
			0.02
		)
		.fromTo($nest,1,
			{y:0, scale: 0.2, autoAlpha: 0, transformOrigin:'center center'
			},
			{y:'-=15', scale:1, autoAlpha: 1, transformOrigin:'center center',
				ease: Elastic.easeOut
			}, '+=0.2'
		)
		.to($nest, 0.3, {y:'+=15', ease: Bounce.easeOut},'-=0.5' )
		.add('nest-pop-in')
		.set($birdHat, {rotation:12, x:'+=6'})
		.to($bird,1.4,{y:'-=39', autoAlpha: 1, ease: Power4.easeInOut},'nest-pop-in+=0.1')
		.add('bird-peaking')
		.set($birdEyes,{autoAlpha:0})
		.set($birdEyes,{autoAlpha:1},'+=0.2')
		.set($birdEyes,{autoAlpha:0},'+=0.3')
		.set($birdEyes,{autoAlpha:1},'+=0.2')
		.add('bird-blinks')
		.to($bird,0.8,{y:'-=34',ease:Power4.easeInOut})
		.to($bird,0.3,{y:'+=8',ease:Back.easeOut})
		.to($birdHat,0.4,{y:'-=12'},'-=0.6')
		.to($birdHat,0.3,{y:0,rotation: 0, x:0, onComplete:startBlinking},'-=0.2')

		function startBlinking() {
			const blinkingTL = new TimelineMax({repeat:-1,repeatDelay:5})
			blinkingTL
				.set($birdEyes,{autoAlpha:0})
				.set($birdEyes,{autoAlpha:1},'+=0.2')
				.set($birdEyes,{autoAlpha:0},'+=1.2')
				.set($birdEyes,{autoAlpha:1},'+=0.2')
			return blinkingTL
		}

	return treeStuffTL
}
	// enter the greeting text
	function enterGreeting() {
		const textTL = new TimelineMax()

		textTL
			.fromTo($textLine1, 1, {y:'-=50',autoAlpha:0},{y:0,autoAlpha:1})
			.fromTo($textLine2, 1, {y:'-=25',autoAlpha:0},{y:0,autoAlpha:1})
			.staggerFromTo($textGreeting, 0.5,{scale:2, autoAlpha:0,transformOrigin:'center center'},
				{scale:1, autoAlpha:1,transformOrigin:'center center'},
				0.2
			)
		return textTL
	}

	// the GO function ...to kick things all off
	function go() {
		console.log('go...');
		const masterTL = new TimelineMax()
		masterTL
			.add(clearStage(),'scene-clear-stage')
			.add(enterFloorVegies(),'scene-floor-veggies')
			.add(enterTreeStuff(),'scene-tree-stuff')
			.add(enterGreeting(),'scene-text-greetings')
	}

go()

})(jQuery);
