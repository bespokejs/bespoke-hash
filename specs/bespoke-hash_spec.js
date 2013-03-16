(function() {
	"use strict";

	describe("bespoke-hash", function() {

		var PARENT_TAG = 'article',
			SLIDE_TAG = 'section',
			NO_OF_SLIDES = 10,
			article,
			slides,
			deck;

		var createDeck = function() {
				slides = [];

				article = document.createElement(PARENT_TAG);
				for (var i = 0; i < NO_OF_SLIDES; i++) {
					slides.push(document.createElement(SLIDE_TAG));
					article.appendChild(slides[i]);
				}

				document.body.appendChild(article);

				deck = bespoke.from(PARENT_TAG, {
					hash: true
				});
			},
			destroyDeck = function() {
				document.body.removeChild(article);
			};

		describe("given a valid hash is present on page load", function() {

			beforeEach(function() {
				this.activeSlideN = 2;
				window.location.hash = this.activeSlideN;
			});

			describe("when the deck is created", function() {
			
				beforeEach(createDeck);
				afterEach(destroyDeck);

				it("should activate the slide referenced in the hash", function() {
					expect(deck.slides[this.activeSlideN - 1].classList.contains('bespoke-active')).toBe(true);
				});

			});

		});

		describe("given a deck has been created", function() {

			beforeEach(createDeck);
			afterEach(destroyDeck);

			describe("when a slide is activated", function() {

				beforeEach(function() {
					this.activeSlideIndex = 3;
					deck.slide(this.activeSlideIndex);
				});

				it("should set the hash to match the nth active slide", function() {
					expect(window.location.hash).toBe('#' + (this.activeSlideIndex + 1));
				});

			});

			describe("when the hash changes to a number", function() {

				var activeSlideN;

				beforeEach(function() {
					runs(function() {
						activeSlideN = 5;
						window.location.hash = activeSlideN;
					});

					// Wait for next tick
					waits(0);
				});
				
				it("should activate the slide referenced in the hash", function() {
					expect(deck.slides[activeSlideN - 1].classList.contains('bespoke-active')).toBe(true);
				});

			});

		});

	});

}());