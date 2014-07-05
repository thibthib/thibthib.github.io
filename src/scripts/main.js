function initialize() {
	$('body').removeClass('preload');

	$('.links svg').on('click', function(event) {
		if ($(event.delegateTarget).attr('goto') === 'vsco') {
			window.open('http://thibaut.vsco.co/?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid');
		} else if ($(event.delegateTarget).attr('goto') === 'twitter') {
			window.open('http://twitter.com/thib_thib');
		} else if ($(event.delegateTarget).attr('goto') === 'github') {
			window.open('https://github.com/thibthib');
		}
	});

	$('.infos').on('mouseenter mouseleave', function(event) {
		$('.logo').toggleClass('photo');
	});
}

document.addEventListener("DOMContentLoaded", initialize, false);
