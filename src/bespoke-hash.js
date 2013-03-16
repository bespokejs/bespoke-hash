(function(bespoke) {

	bespoke.plugins.hash = function(deck) {
		var parseHash = function() {
				var hash, slideN;
				(hash = window.location.hash.slice(1)) &&
					(slideN = parseInt(hash, 0)) &&
						deck.slide(slideN - 1);
			};

		deck.on('activate', function(e) {
			window.location.hash = e.index + 1;
		});

		window.addEventListener('hashchange', parseHash);

		parseHash();
	};

}(bespoke));