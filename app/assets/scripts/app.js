$(document).ready(function() {


// reveal content on click

	$('.faqs__reveal').click(function() {
		$(".hidden").hide(400);
		 $(this).next().show();
	});

	// owl carousel


		
	  $('.owl-carousel').owlCarousel({
	  	items: 1,
	  	autoplay: true,
	  	loop: true,
	  	dots: true,
	  	nav:true,
	  	fallbackEasing: true,
	  	dotsEach:true,
	  	lazyLoad:true
	  });

});
