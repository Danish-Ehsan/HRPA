$(function() {

	var $archWhl = $('#archWhlImg');
	var $window = $(window);
	var $intelRevo = $('#intelRevoImg')

	var deg = 0;
	//var spinReset = false;

	//var spinCheck = false;
	//var funcCheck = true;

	function spin(e) {
		setInterval(function() {
			if ( (($window.scrollTop() + $window.height()) > e.offset().top) && $window.scrollTop() < (e.offset().top + e.height())) {
				//spinReset = true;
				deg = deg + 0.5;
				console.log(deg);
				e.css('-webkit-transform', 'rotate(' + deg + 'deg)');
			} else if ( $window.scrollTop() > ($intelRevo.offset().top + e.height()) && (($window.scrollTop() + $window.height()) < $archWhl.offset().top) ) {
				//spinReset = true;
				deg = 0;
			}
		}, 100);
	}

	spin($archWhl);
	spin($intelRevo);

/*
	setInterval(function() {
			if ( (($window.scrollTop() + $window.height()) > $archWhl.offset().top) && $window.scrollTop() < ($archWhl.offset().top + $archWhl.height())) {
				spinCheck = true;
				spin();
				funcCheck = false;
			} else {
				spinCheck = false;
				funcCheck = false;
			}
			console.log(deg);
				
	}, 400);


	function spin() {
			if (spinCheck === true && funcCheck === true) {
						funcCheck = true;
						$window.on('scroll', function() {
							$archWhl.css('-webkit-transform', 'rotate(' + deg + 'deg)');
							deg = deg + 1;
						});
						
					}
	}
*/
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