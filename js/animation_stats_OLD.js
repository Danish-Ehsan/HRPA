$(function () {

	var $window = $(window);
	var $statList = $('.statAnim');
	var $statListText = [];

	//var statObj = {};
/*
	function ObjConst(element) {
		this.element = element;
		this.textString = $(element).text();
		this.text = parseInt(this.textString);
		this.counted = false;

		this.count = 
			function count(stat) {
				var loopCount = 0;
				var $statTextString = stat.text();
				var $statText = parseInt($statTextString);
				console.log(stat);


			countInterval = setInterval(function() {
				if (loopCount < $statText) {
					loopCount++;
					stat.text(loopCount);
					console.log('loopCount= ' + loopCount);
				}		
			},40);
		};
	}

	var statObj = [];

	for (var i = 0; i < $statList.length; i++) {
		statObj[i] = new ObjConst($statList[i]);
		console.log(statObj[i]);
		console.log('Obj1 text= ' + statObj[i].text);
		console.log('Obj1 textString= ' + statObj[i].textString);
	}

	var $statObj = $(statObj);

	setInterval(function() {
		statObj.each(function() {
			if (($window.scrollTop() + $window.height()) > $(this).offset().top + 200 ) {
				statObj[i].count;
			}
		});
	});




	setInterval(function() {
		for (var i = 0; i < statObj.length; i++) {
			if (($window.scrollTop() + $window.height()) > $statObj.offset().top + 200 ) {
				statObj[i].count;
			}
		}
	}, 200);
*/



	//$statList.eq(1).text(50);
/*
	for (var i = 0; i < $statList.length; i++) {
		$statListText[i] = $statList.eq(i).text();
		$statListText[i] = parseInt($statListText[i]);
		console.log($statList.eq(i).text());
		console.log($statListText[i]);
		console.log('i=' + i);
	}
*/

	//console.log($statListText[0] + 5);
/*
	setTimeout(function() {
		setTimeout(function() {
		for (var ii = 0; ii < $statListText[1]; ii++) {
			
				$statList.eq(1).text(ii);
				console.log($statList.eq(1).text());
				console.log('ii='+ii);
			
		}
		},1000);
	},2000);
*/


	

	function count(stat) {
		var loopCount = 0;
		var $statTextString = stat.text();
		var $statText = parseInt($statTextString);
		console.log(stat);


		countInterval = setInterval(function() {
			if (loopCount < $statText) {
				loopCount++;
				stat.text(loopCount);
				console.log('loopCount= ' + loopCount);
			}		
		},40);
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
	var statCheck = 0;

	setInterval(function() {
		$statList.each(function() {
			if ( (($window.scrollTop() + $window.height()) > $(this).offset().top + 200) && statCheck === 0 ) {
				statCheck = 1;
			}
			if (statCheck === 1) {
				count($(this));
			}
		});
	}, 10);
	

});