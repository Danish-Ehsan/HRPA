$(function() {

	var $window = $(window);
	var $copy = $('.copyAnim');

	$copy.css({'opacity': '0', 'right': '50px'}); //, 'left': 'auto'});

	function animate(e) {
			e.css({
			'opacity': '1',
			'right': '0px'});
	};

	setInterval(function() {
		$copy.each(function() {
			if ($window.width() > 600) {
				if (($window.scrollTop() + 650) >= ($(this).offset().top)) {
					animate($(this));
				}
			} else {
				if (($window.scrollTop() + 550) >= ($(this).offset().top)) {
					animate($(this));
				}
			}
		});
	}, 100);

});