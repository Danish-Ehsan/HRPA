$(function () {

	var $window = $(window);
	var $statList = $('.statAnim');
	//var $statListText = [];
	var statCheck = 0;

	function count(stat) {
		var loopCount = 0;
		var $statTextString = stat.text();
		var $statText = parseInt($statTextString);
		console.log(stat);
		statCheck++;


		countInterval = setInterval(function() {
			if (loopCount < $statText) {
				loopCount++;
				stat.text(loopCount);
				console.log('loopCount= ' + loopCount);
			}		
		}, 25);
	}

/*
	$statList.each(function() {
		$this.on('click', function() {
		count;
		});
	});


	for (var i = 0; i < $statList.length; i++) {
		count($statList.eq(i));
	}
*/


	

	setInterval(function() {
		$statList.each(function() {
			//statCheck = false;
			if ( (($window.scrollTop() + $window.height()) > $(this).offset().top + 200) && statCheck <= 2 ) {
				count($(this));
			}
		});
	}, 100);
	

});