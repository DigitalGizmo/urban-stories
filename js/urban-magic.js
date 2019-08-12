$(function() {
	var controller = new ScrollMagic.Controller();

	// var blockTween = new TweenMax.to('#block', 1.5, {
	// 	backgroundColor: 'red'
	// });

	TweenMax.set(".fadeIn1", {autoAlpha:0});
	var tween1 = TweenMax.staggerTo(".fadeIn1", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn2", {autoAlpha:0});
	var tween2 = TweenMax.staggerTo(".fadeIn2", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn3", {autoAlpha:0});
	var tween3 = TweenMax.staggerTo(".fadeIn3", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn4", {autoAlpha:0});
	var tween4 = TweenMax.staggerTo(".fadeIn4", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn5", {autoAlpha:0});
	var tween5 = TweenMax.staggerTo(".fadeIn5", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn6", {autoAlpha:0});
	var tween6 = TweenMax.staggerTo(".fadeIn6", 1, {autoAlpha:1}, 1);	

	// TweenMax.set(".fadeIn3", {autoAlpha:0});
	// var tween2 = TweenMax.staggerTo(".fadeIn2", 1, {autoAlpha:1}, 1);	

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container0',
	    duration: 3500, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container1',
	    duration: 360 // was 300
	    // offset: 320
	})
	.setTween(tween1)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container2',
	    duration: 360 // was 300
	    // offset: 320
	})
	.setTween(tween2)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container3',
	    duration: 360 
	})
	.setTween(tween3)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container4',
	    duration: 360 
	})
	.setTween(tween4)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container5',
	    duration: 360 
	})
	.setTween(tween5)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container6',
	    duration: 360 
	})
	.setTween(tween6)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

});


// var textScroll = $(".text-scroll")

// imagify returns the corresponding html for image
function imagify(slug) {
  var out = `<img src="images/` + slug + `.jpg">`
  return out
}

// Scrolling app
new Vue({
	// el: '#scrolling-part',
	el: '#app',
	data: {
		message: "A work in progress",
		currImage	: imagify("south-mall-at-night"),
		southMall 	: imagify("south-mall-at-night"),
		albany  	: imagify("albany-aerial-photo")
	}

})

app.currImage = app.southMall


