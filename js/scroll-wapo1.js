// Hide all but first image
$(".image-panel").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		TweenMax.set(this, {autoAlpha:0});
	}
});

var ctrl = new ScrollMagic.Controller();

// Set pin for Image container
var containerScene = new ScrollMagic.Scene({
	// triggerElement: '.container0',
	// triggerElement: '#container1',
	// triggerElement: "#chapter1-trigger", // point of execution
	triggerElement: ".image-panel", // point of execution
	// duration: 3500, // was 1300
	duration: $(".caption-panel").height(),
	triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	// offset: -500 // was 320
})
.setPin(".image-panel", {pushFollowers: false})
// .setPin(".image-panel")
.addIndicators()
.addTo(ctrl);

// Set tweens for dissolves
var targetPrev = $(".image-panel").children().eq(0);
let target = $(".image-panel").children().eq(1);
var tl = new TimelineMax();
tl.to(target, 2, {autoAlpha:1})
	.to(targetPrev, 1, {autoAlpha:0});
// var tween = TweenMax.staggerTo("target", 1, {autoAlpha:1}, 1);	


// Scene2 first dissolve
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#container2", // point of execution
  duration: 250 // pin the element for a total of 400px
})
// .setTween(tween)
.setTween(tl)
// .on('start', function() {
// 	console.log("container2 trigger");
// })
.addIndicators()
.addTo(ctrl);
