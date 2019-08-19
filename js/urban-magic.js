$(function() {

	// TweenMax.set(".fade", {autoAlpha:0});
	// TweenMax.set(".fade", {autoAlpha:0});
	// TweenMax.set(".fade0", {autoAlpha:0});
	TweenMax.set(".chapter-title", {autoAlpha:0});

	// Shorter way? how to ref children in gsap?
	$("#imagesequence").children().each(function(i) {
		// Skip first image -- it's a pin, not a transition
		if (i > 0) {
			TweenMax.set(this, {autoAlpha:0});
		}
	});



	var ctrl = new ScrollMagic.Controller();

	// Set pin for Image container
	var containerScene = new ScrollMagic.Scene({
	    // triggerElement: '.container0',
	    triggerElement: '#container1',
	    // duration: 3500, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#imagesequence")
	// .setPin("#chap-title")
	.addIndicators()
	.addTo(ctrl);

	// Set pin for Chapter title?
	var containerScene = new ScrollMagic.Scene({
	    // triggerElement: '.container0',
	    triggerElement: '#container1',
	    // duration: 3500, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#chapter-sequence")
	.addTo(ctrl);

	// Create scenes
	// // $(".container").each(function(i) {
	// Loop through all divs in text-panel
	// Hmm, how to skip first one?
	$(".text-panel").children().each(function(i) {
		// Skip first image -- it's a pin, not a transition
		if (i > 0) {
			// let target2 = $(this).find("p.last-paragraph");
			// let target1 = $(".fade").eq(i-1).find("p");

			// var targetPrev = $(".fade").eq(i-1);
			var targetPrev = $("#imagesequence").children().eq(i-1);

			// Fix to fade 1st caption
			// if (i == 0) {
			// 	targetPrev = $(".fade0")
			// }

			let target = $("#imagesequence").children().eq(i);
			// TweenMax.set(target, {autoAlpha:0});
			// console.log(" -- index: " + i);	
			// console.log(" -- target: " + target.html());	
			// console.log(" -- target class: " + target.attr('class'));	
			// console.log(" -- target class: " + target.attr('class').split(' ')[1]);	

			var tl = new TimelineMax();
			// Base trans condition on second class
			// if (target.attr('class').split(' ')[1] == 'chap-end') {
			if (target.attr('class') == 'chap-end') {
				tl.set(target, {autoAlpha:1})
					.from(target, 2, {xPercent: 100})
					.to(targetPrev, 2, {xPercent: -100}, 0)
					.to("#chapter-sequence", 2, {xPercent: -100}, 0);
					// .eventCallback("onComplete", setChapTitle, [1]); 
			// } else if (target.attr('class').split(' ')[1] == 'chap-begin') {
			} else if (target.attr('class') == 'chap-begin') {
				// $("#chap-title").html("The Plan");
				tl.set(target, {autoAlpha:1})
					.from(target, 2, {xPercent: -100})
					.to("#chapter-sequence", 2, {xPercent: 0}, 0)
					.to(targetPrev, 2, {xPercent: 100});
					// .eventCallback("onStart", 
					// 	setChapTitle, 
					// 	[target.attr('class').split(' ')[2]]);   
			} else {
				tl.to(target, 2, {autoAlpha:1})
					.to(targetPrev, 1, {autoAlpha:0});			
			}

			// test dim container text	
			// tl.to(target2, 1, {autoAlpha:0.5});

			new ScrollMagic.Scene({
				triggerElement: this,
				duration: 460,
				offset: -50
				// triggerHook: 0.5
				// duration: "50%",
			})
			.setTween(tl)
			.addIndicators()
			.addTo(ctrl);

		} // end if i > 0
	});

	// Handle Chapter Titles
	$(".chapter").each(function(i) {
		var targetPrev = $(".chapter-title").eq(i-1);
		// Fix to fade 1st caption
		if (i == 0) {
			targetPrev = $(".chapter1")
		}
		let target = $(".chapter-title").eq(i);

		var tlt = new TimelineMax();
		// tlt.to(target, .1, {autoAlpha:1})
		// 	.to(targetPrev, .1, {autoAlpha:0});
		tlt.to(targetPrev, .1, {autoAlpha:0})
			.to(target, .1, {autoAlpha:1});
		// tlt.set(target, {autoAlpha:1})
		// 	.set(targetPrev, {autoAlpha:0});

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 10,
			offset: -50
		})
		.setTween(tlt)
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


