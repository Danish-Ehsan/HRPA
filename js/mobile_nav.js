$(function () {

	$navList = $('#mobNav ul');
	var $navButton = $("#navButton");
	$butLine = $('.navBtnLine');

	$navList.hide();


	$navButton.on('click', function() {
		$navList.slideToggle();
		$butLine.toggleClass('open');
	});

});