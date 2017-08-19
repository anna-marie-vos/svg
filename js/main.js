/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here
	const $backFallingLeaves = $('#brownLeaf, #redLeaf, #orangeLeaf')

	// clear stage
function clearStage() {
	const clearTL = new TimelineMax()
	clearTL
		.set($backFallingLeaves, {autoAlpha:0} )

	return clearTL
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
