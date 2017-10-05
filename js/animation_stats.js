$(function () {

	var $window = $(window);
	var $statList = $('.statAnim');
	var $statsCont = $('#statsContainer')
	var statCheck = 0;

	function count(stat) {
		var loopCount = 0;
		var $statTextString = stat.text();
		var $statText = parseInt($statTextString);
		//console.log(stat);
		statCheck = 1;


		countInterval = setInterval(function() {
			if (loopCount < $statText) {
				loopCount++;
				stat.text(loopCount);
				//console.log('loopCount= ' + loopCount);
			}		
		}, 30);
	}
	

	setInterval(function() {
			if ( (($window.scrollTop() + $window.height()) > $statsCont.offset().top + 200) && statCheck === 0 ) {
				for (var i = 0; i < $statList.length; i++) {
					count($statList.eq(i));
				}
				
			}
	}, 100);
	

});