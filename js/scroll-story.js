// Midway on shifting element objects and names to arrays in order to 
// create multi-chapter loops for each task.

var ctrl = new ScrollMagic.Controller();

// Defin arrays for target elements

var imageSeqElems = [$("#image-sequence1"), $("#image-sequence2")];
var imageSeqNames = ["#image-sequence1", "#image-sequence2"];


// ----- Hide images ----
// Hide all but title and first image
// $("#image-sequence1").children().each(function(i) {
imageSeqElems[0].children().each(function(i) {
	// Skip fist child, the title, and first image -- it's a pin, not a transition
	if (i > 0) {
		TweenMax.set(this, {autoAlpha:0});
	}
});

// Hide all but title and first image
imageSeqElems[1].children().each(function(i) {
	// Skip fist child, the title, and first image -- it's a pin, not a transition
	if (i > 1) {
		TweenMax.set(this, {autoAlpha:0});
	}
});


// --- Pin Chapter Titles ---
// Set pin for first chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter1-title", // point of execution
	duration: $("#chapter1").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter1-title", {pushFollowers: false})
.addIndicators()
.addTo(ctrl);

// Set pin for 2nd chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter2-title", // point of execution
	duration: $("#chapter2").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter2-title", {pushFollowers: false})
.addIndicators()
.addTo(ctrl);

// Set pin for 3rd chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter3-title", // point of execution
	duration: $("#chapter3").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter3-title", {pushFollowers: false})
.addIndicators()
.addTo(ctrl);

// Set pin for 4th chapter TITLE
var containerScene = new ScrollMagic.Scene({
	triggerElement: "#chapter4-title", // point of execution
	duration: $("#chapter4").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin("#chapter4-title", {pushFollowers: false})
.addIndicators()
.addTo(ctrl);



// --- Pin Gallery images
// Set pin for first GALLERY Image container
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[0], // point of execution
	duration: $("#caption-sequence1").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -50 // was 320
})
.setPin(imageSeqNames[0], {pushFollowers: false})
.addIndicators()
.addTo(ctrl);

// Set pin for Image container
var containerScene = new ScrollMagic.Scene({
	triggerElement: imageSeqNames[1], // point of execution
	duration: $("#caption-sequence2").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	offset: -50 // was 320
})
.setPin(imageSeqNames[1], {pushFollowers: false})
.addIndicators()
.addTo(ctrl);



// Create scenes
// Loop through all divs in text-panel
$("#caption-sequence1").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = imageSeqElems[0].children().eq(i -1);
		let target = imageSeqElems[0].children().eq(i);

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



// Create scenes
// Loop through all divs in text-panel
$("#caption-sequence2").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		// Current target is +1 because 1st div in image panel is title
		var targetPrev = imageSeqElems[1].children().eq(i);
		let target = imageSeqElems[1].children().eq(i + 1);

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
		// 	console.log("-- Chap2 targPrev: " + i + " target: " + (i+1));
		// })
		.addIndicators()
		.addTo(ctrl);
	} // end if i > 0
});



