$(function() {

	var $archWhl = $('#archWhlImg');
	var $window = $(window);

	var deg = 0;

	$window.on('scroll', function() {
			if ( (($window.scrollTop() + $window.height()) > $archWhl.offset().top) && ($window.scrollTop() < ($archWhl.offset().top + $archWhl.height())) ) {
				deg = deg + 0.4;
				console.log(deg);
				$archWhl.css('-webkit-transform', 'rotate(' + deg + 'deg)');
			}
	});

/*
	function spin() {
			if ( (($window.scrollTop() + $window.height()) > this.offset().top) && (this.scrollTop() < (this.offset().top + this.height())) ) {
					deg = deg + 0.4;
					console.log(deg);
					this.css('-webkit-transform', 'rotate(' + deg + 'deg)');
			}
		}
	

	$archWhl.on('scroll', function() {
		spin();
	});
*/

});