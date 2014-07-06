function initialize() {
	$.get( 'images/svg-symbols.svg', function(svg) {
		document.importNode(svg.documentElement,true);
		$('body').prepend(svg.documentElement);
	});

	$('body').removeClass('preload');

	$('.links svg').on('click', function(event) {
		var link = $(event.delegateTarget).attr('goto');

		if (link === 'vsco') {
			window.open('http://thibaut.vsco.co');
		} else if (link === 'twitter') {
			window.open('http://twitter.com/thib_thib');
		} else if (link === 'github') {
			window.open('https://github.com/thibthib');
		} else if (link === 'email') {
			window.location.href = "mailto:t.dutartre@gmail.com";
		}
	});

	$('.infos').on('mouseenter mouseleave', function(event) {
		$('.logo').toggleClass('photo');
	});
}

document.addEventListener("DOMContentLoaded", initialize, false);
