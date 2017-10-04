$(function() {

	var $window = $(window);
	var $copy = $('.copyAnim');

	$copy.css({'opacity': '0', 'right': '50px'}); //, 'left': 'auto'});

	function animate(e) {
			e.animate({
			opacity: '1',
			right: '0px'
		}, 1000);
	};

	setInterval(function() {
		$copy.each( function() {
			if (($window.scrollTop() + 650) >= ($(this).offset().top)) {
				animate($(this));
			};
		});
	}, 100);

});