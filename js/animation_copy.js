$(function() {

	var $window = $(window);
	var $copy = $('.copyAnim');
	var $headAnim = $('.headerAnim');

	$copy.css({'opacity': '0', 'right': '50px'}); //, 'left': 'auto'});

	$headAnim.hide().css({'opacity': '0', 'right': '50px'});

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
				if (($window.scrollTop() + 500) >= ($(this).offset().top)) {
					animate($(this));
				}
			}
		});
	}, 100);

	setTimeout(function() {
		$headAnim.show();
		animate($headAnim);
	}, 800);

/*
	$(window).on('load', function() {
		$headAnim.show().animate();
	});
*/
});