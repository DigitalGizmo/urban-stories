$(function() {

	TweenMax.set(".fade", {autoAlpha:0});

	var ctrl = new ScrollMagic.Controller();

	// Set pin for Image container
	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '.container0',
	    // duration: 3500, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#imagesequence")
	.addIndicators()
	.addTo(ctrl);

	// Create scenes
	$(".container").each(function(i) {
		// let target2 = $(this).find("p.last-paragraph");
		// let target1 = $(".fade").eq(i-1).find("p");
		var targetPrev = $(".fade").eq(i-1);
		// Fix to fade 1st caption
		if (i == 0) {
			targetPrev = $(".fade0")
		}

		let target = $(".fade").eq(i);
		// console.log(" -- index: " + i);	
		// console.log(" -- target: " + target.html());	

		var tl = new TimelineMax();
		tl.to(target, 1, {autoAlpha:1})
			.to(targetPrev, 1, {autoAlpha:0});

		// test dim container text	
		// tl.to(target2, 1, {autoAlpha:0.5});

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 360,
			offset: -50
			// triggerHook: 0.5
			// duration: "50%",
		})
		.setTween(tl)
		.addIndicators()
		.addTo(ctrl);
	});


});

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


