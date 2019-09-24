
$(".image-sequence").children().each(function(i) {
	// Skip first image -- it's a pin, not a transition
	if (i > 0) {
		TweenMax.set(this, {autoAlpha:0});
	}
});

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

let target = $(".image-sequence").children().eq(1);

TweenMax.set(".fadeIn", {autoAlpha:0});
var tween = TweenMax.staggerTo("target", 1, {autoAlpha:1}, 1);	


// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: $(window).height() - 100, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1") // the element we want to pin
.addIndicators()
.addTo(controller);

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#dissolve-trigger2", // point of execution
  duration: 250 // pin the element for a total of 400px
})
.setPin("#pinned-element2") // the element we want to pin
// .setTween(tween)
.addIndicators()
.addTo(controller);
