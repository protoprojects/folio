
$( document ).ready(function() {
	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
		columnWidth: 50,
		gutter: 2,
		isFitWidth: true,
		itemSelector: '.item'
	});
	
});

