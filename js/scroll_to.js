$(function() {



	$('a[href^="#"]').on('click', function(event) {
    	var target = $(this.getAttribute('href'));
      var $window = $(window);

    	if( target.length ) {
      	  event.preventDefault();
      	  $navList.slideToggle();
		  $butLine.toggleClass('open');

      if ($window.width() >= 1000) {
      	  $('html, body').stop().animate({
       	     scrollTop: target.offset().top
        }, 600);
      } else {
        $('html, body').stop().animate({
             scrollTop: target.offset().top - 80
        }, 600);
      }
    }
});

});