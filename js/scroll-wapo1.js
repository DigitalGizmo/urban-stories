
var ctrl = new ScrollMagic.Controller();

// ----- Chapter 1 ----
// Hide all but title and first image
$("#image-sequence1").children().each(function(i) {
	// Skip fist child, the title, and first image -- it's a pin, not a transition
	if (i > 0) {
		TweenMax.set(this, {autoAlpha:0});
	}
});

// Set pin for first chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter1-trigger", // point of execution
	duration: $("#chapter1").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter1-trigger", {pushFollowers: false})
// .setPin("#image-sequence1")
.addIndicators()
.addTo(ctrl);

// Set pin for first GALLERY Image container
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#image-sequence1", // point of execution
	duration: $("#caption-sequence1").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -50 // was 320
})
.setPin("#image-sequence1", {pushFollowers: false})
// .setPin("#image-sequence1")
.addIndicators()
.addTo(ctrl);


// Create scenes
// Loop through all divs in text-panel
$("#caption-sequence1").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = $("#image-sequence1").children().eq(i -1);
		let target = $("#image-sequence1").children().eq(i);

		var tl = new TimelineMax();
		// Base transitin condition class name
		// "this" is not a jQuery object, so need straight JS
		tl.to(target, 2, {autoAlpha:1})
			.to(targetPrev, 1, {autoAlpha:0});			

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 350, // pin the element for a total of 400px
			triggerHook: .8, // trigger low in the viewport
		})
		.setTween(tl)
		// .on('start', function() {
		// 	console.log("-- targPrev: " + i + " target: " + (i+1));
		// })
		.addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});


// ----- Chapter 2 ----
// Hide all but title and first image
$("#image-sequence2").children().each(function(i) {
	// Skip fist child, the title, and first image -- it's a pin, not a transition
	if (i > 1) {
		TweenMax.set(this, {autoAlpha:0});
	}
});

// Set pin for 2nd chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter2-trigger", // point of execution
	duration: $("#chapter2").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter2-trigger", {pushFollowers: false})
// .setPin("#image-sequence1")
.addIndicators()
.addTo(ctrl);


// Set pin for Image container
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#image-sequence2", // point of execution
	duration: $("#caption-sequence2").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -50 // was 320
})
.setPin("#image-sequence2", {pushFollowers: false})
// .setPin("#image-sequence1")
.addIndicators()
.addTo(ctrl);


// Create scenes
// Loop through all divs in text-panel
$("#caption-sequence2").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = $("#image-sequence2").children().eq(i);
		let target = $("#image-sequence2").children().eq(i + 1);

		var tl = new TimelineMax();
		// Base transitin condition class name
		// "this" is not a jQuery object, so need straight JS
		tl.to(target, 2, {autoAlpha:1})
			.to(targetPrev, 1, {autoAlpha:0});			

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 350, // pin the element for a total of 400px
			triggerHook: .8, // trigger low in the viewport
		})
		.setTween(tl)
		.on('start', function() {
			console.log("-- Chap2 targPrev: " + i + " target: " + (i+1));
		})
		.addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});



