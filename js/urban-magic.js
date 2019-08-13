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

	// blank image
	TweenMax.set(".fadeIn7", {autoAlpha:0});
	var tween7 = TweenMax.staggerTo(".fadeIn7", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn20", {autoAlpha:0});
	var tween20 = TweenMax.staggerTo(".fadeIn20", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn21", {autoAlpha:0});
	var tween21 = TweenMax.staggerTo(".fadeIn21", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn22", {autoAlpha:0});
	var tween22 = TweenMax.staggerTo(".fadeIn22", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn23", {autoAlpha:0});
	var tween23 = TweenMax.staggerTo(".fadeIn23", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn24", {autoAlpha:0});
	var tween24 = TweenMax.staggerTo(".fadeIn24", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn25", {autoAlpha:0});
	var tween25 = TweenMax.staggerTo(".fadeIn25", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn26", {autoAlpha:0});
	var tween26 = TweenMax.staggerTo(".fadeIn26", 1, {autoAlpha:1}, 1);	

	// fade. Using fade 7 image
	TweenMax.set(".fadeIn27", {autoAlpha:0});
	var tween27 = TweenMax.staggerTo(".fadeIn27", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn40", {autoAlpha:0});
	var tween40 = TweenMax.staggerTo(".fadeIn40", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn41", {autoAlpha:0});
	var tween41 = TweenMax.staggerTo(".fadeIn41", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn42", {autoAlpha:0});
	var tween42 = TweenMax.staggerTo(".fadeIn42", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn43", {autoAlpha:0});
	var tween43 = TweenMax.staggerTo(".fadeIn43", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn44", {autoAlpha:0});
	var tween44 = TweenMax.staggerTo(".fadeIn44", 1, {autoAlpha:1}, 1);	

	TweenMax.set(".fadeIn45", {autoAlpha:0});
	var tween45 = TweenMax.staggerTo(".fadeIn45", 1, {autoAlpha:1}, 1);	


	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container0',
	    // duration: 3500, // was 1300
	    offset: 380 // was 320
	})
	// .setTween(tween)
	.setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container1',
	    duration: 360,
	    offset: -50
	    // offset: 320
	})
	.setTween(tween1)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container2',
	    duration: 360,
	    offset: -50
	    // offset: 320
	})
	.setTween(tween2)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container3',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween3)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container4',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween4)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container5',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween5)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container6',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween6)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	// fade for chapt division
	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container7',
	    duration: 360,
	    offset: -100
	})
	.setTween(tween7)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	// 1st Plan image
	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container20',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween20)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container21',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween21)
	// .setPin("#imagesequence")
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container22',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween22)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container23',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween23)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container24',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween24)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container25',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween25)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container26',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween26)
	.addIndicators()
	.addTo(controller);


	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container27',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween27)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container40',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween40)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container41',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween41)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container42',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween42)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container43',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween43)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container44',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween44)
	.addIndicators()
	.addTo(controller);

	var containerScene = new ScrollMagic.Scene({
	    triggerElement: '#container45',
	    duration: 360,
	    offset: -50
	})
	.setTween(tween45)
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


