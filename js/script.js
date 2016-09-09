$(document).ready(function() {

	// OWL CAROUSEL INSTALLATION
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:true
	});
	$("#home-slider").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:false,
		navigation:true,
		navigationText:["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"]

	});

	/* Navigation*/
	var offsettop = $('.navbar').offset().top;
	if (offsettop > 50) {
        $('.navbar').addClass('colored-nav');
        $('.navbar').addClass('gradient-violat');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').removeClass('gradient-violat');
    }
	var num = 200; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.navbar').addClass('colored-nav');
	        $('.navbar').addClass('gradient-violat');
	    } else {
	        $('.navbar').removeClass('colored-nav');
	        $('.navbar').removeClass('gradient-violat');
	    }
	});
 
});