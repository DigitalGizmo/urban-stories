$(function() {


	TweenMax.set(".chapter-title", {autoAlpha:0});
	TweenMax.set(".chapter1", {autoAlpha:1});

	// Shorter way? how to ref children in gsap?
	$("#image-sequence").children().each(function(i) {
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
	    duration: $(".text-panel").height(),
	    offset: 320 // was 320
	})
	// .setPin(".image-panel")
	.setPin("#image-sequence")
	.addIndicators()
	.addTo(ctrl);


	// Create scenes
	// // $(".container").each(function(i) {
	// Loop through all divs in text-panel
	// Hmm, how to skip first one?
	$(".text-panel").children().each(function(i) {
		// Skip first image -- it's a pin, not a transition
		if (i > 0) {

			var targetPrev = $("#image-sequence").children().eq(i-1);
			let target = $("#image-sequence").children().eq(i);
			// console.log(" -- index: " + i);	
			// console.log(" -- target: " + target.html());	
			// console.log(" -- target class: " + target.attr('class'));	
			// console.log(" -- target class: " + target.attr('class').split(' ')[1]);	

			var tl = new TimelineMax();
			// Base transitin condition class name
			// "this" is not a jQuery object, so need straight JS
			if (this.className == 'chap-end') {
				// console.log()
				tl.set(target, {autoAlpha:1})
					.from(target, 2, {yPercent: 100})
					.to(targetPrev, 2, {yPercent: -100}, 0);

					// .to("#chapter-sequence", .5, {autoAlpha: 0});

					// .to("#chapter-sequence", 2, {yPercent: -100}, 0);
					// .eventCallback("onComplete", setChapTitle, [1]); 
			} else if (this.className == 'chapter') {
				// $("#chap-title").html("The Plan");
				tl.set(target, {autoAlpha:1})
					.from(target, 2, {yPercent: 100})
					.to(targetPrev, 2, {yPercent: -100});

					// .to("#chapter-sequence", .5, {autoAlpha: 1});


					// .to("#chapter-sequence", 2, {yPercent: 0}, 0)
					// .eventCallback("onStart", 
					// 	setChapTitle, 
					// 	[target.attr('class').split(' ')[2]]);   
			} else {
				tl.to(target, 2, {autoAlpha:1})
					.to(targetPrev, 1, {autoAlpha:0});			
			}

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


	// Handle Chapter Endings
	$(".chap-end").each(function(i) {
		// var targetPrev = $(".chapter-title").eq(i-1);

		var targetPrev = $(".chapter-title").eq(i);
		
		// Fix to fade 1st caption
		// if (i == 0) {
		// 	targetPrev = $(".chapter1")
		// }

		var tlt = new TimelineMax();

		console.log(" -- i: " + i +", class: " + this.className.split(' ')[1]);

		tlt.to(targetPrev, .1, {autoAlpha:0})

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 10,
			offset: -50
		})
		.setTween(tlt)
		.addIndicators()
		.addTo(ctrl);
	});


	// Handle Chapter beginnings
	$(".chap-begin").each(function(i) {
		// Plus one -- because really it's the "next" chapter
		let target = $(".chapter-title").eq(i+1);

		var tlt = new TimelineMax();

		console.log(" -- begin i: " + i +", class: " + this.className.split(' ')[1]);

		tlt.to(target, .1, {autoAlpha:1});

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: 10,
			offset: -50
		})
		.setTween(tlt)
		.addIndicators()
		.addTo(ctrl);
	});

	// --------- Map -------------
	// Set pin for wide map
	var containerScene = new ScrollMagic.Scene({
	    // triggerElement: '.container0',
	    triggerElement: '#wide-map',
	    // duration: $(".text-panel").height(),
	    offset: 320 // was 320
	})
	.setPin("#map-container")
    .on('start', function () {
        // console.log("passed trigger");
        // setPoint defined in simpl-map.js
        setPoint(42.6503, -73.758, 15, 'none');
    	// treatmap.setView([42.5, -72], 11) ;
    })
	.addIndicators()
	.addTo(ctrl);

	// Add Take area before zooming
	var mapScene = new ScrollMagic.Scene({
	    triggerElement: '#thing3'
	    // duration: 3500, // was 1300
	    // duration: $(".text-panel").height(),
	    // offset: 200 // was 320
	})
    .on('start', function () {
        // setPoint defined in simpl-map.js
        setPoint(42.6503, -73.758, 15, 'take');
    })
	.addIndicators()
    .addTo(ctrl);

	// Add Take area before zooming
	var mapScene = new ScrollMagic.Scene({
	    triggerElement: '#thing4'
	    // duration: 3500, // was 1300
	    // duration: $(".text-panel").height(),
	    // offset: 200 // was 320
	})
    .on('start', function () {
        // setPoint defined in simpl-map.js
        setPoint(42.649912, -73.762082, 16, 'take');
    })
	.addIndicators()
    .addTo(ctrl);

    // Second thing
	var mapScene = new ScrollMagic.Scene({
	    triggerElement: '#thing5'
	    // duration: $(".text-panel").height(),
	    // offset: 200 // was 320
	})
    .on('start', function () {
        setPoint(42.651189, -73.756739, 17, 'none');
    })
	.addIndicators()
    .addTo(ctrl);





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


