$(function() {


	var ctrl = new ScrollMagic.Controller();

	// Set pin for Image container
	var containerScene = new ScrollMagic.Scene({
	    // triggerElement: '.container0',
	    triggerElement: '#container1',
	    // duration: 3500, // was 1300
	    duration: $(".caption-panel").height(),
	    offset: -500 // was 320
	})
	// .setPin(".image-panel")
	.setPin(".pinable")
	// .setPin("#image-sequence")
	.addIndicators()
	.addTo(ctrl);

});
