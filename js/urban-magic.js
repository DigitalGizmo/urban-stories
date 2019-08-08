$(function() {
	var controller = new ScrollMagic.Controller();

	// var blockTween = new TweenMax.to('#block', 1.5, {
	// 	backgroundColor: 'red'
	// });

	TweenMax.set(".fadeIn", {autoAlpha:0});
	var tween = TweenMax.staggerTo(".fadeIn", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn2", {autoAlpha:0});
	var tween2 = TweenMax.staggerTo(".fadeIn2", 1, {autoAlpha:1}, 1);	

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container',
	    duration: 980, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container2',
	    duration: 360 // was 300
	    // offset: 320
	})
	.setTween(tween)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container3',
	    duration: 400 // was 300
	    // offset: 320
	})
	.setTween(tween2)
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


