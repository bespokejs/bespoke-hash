(function(bespoke) {

	bespoke.plugins.hash = function(deck) {
		var parseHash = function() {
				var hash, slideNumberOrName;
				(hash = window.location.hash.slice(1)) &&
					((slideNumberOrName = parseInt(hash, 0)) &&
						deck.slide(slideNumberOrName - 1)) ||
					deck.slides.forEach(function(slide, i) {
						if (slide.getAttribute('data-bespoke-hash') === hash) {
							deck.slide(i);
						}
					});
			};

		deck.on('activate', function(e) {
			var slideName = e.slide.getAttribute('data-bespoke-hash');
			window.location.hash = slideName || e.index + 1;
		});

		window.addEventListener('hashchange', parseHash);

		parseHash();
	};

}(bespoke));