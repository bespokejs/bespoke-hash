[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-hash.png)](http://travis-ci.org/markdalgleish/bespoke-hash)

# bespoke-hash

### Hash routing for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Automatically generate numbered hash routes for your Bespoke.js presentation slides.

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-hash.min.js
[max]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-hash.js

## Usage

First, include both `bespoke.js` and `bespoke-hash.js` in your page.

Then, simply include the plugin when using the `from(selector[, plugins])` method.

```js
bespoke.horizontal.from(selector, {
  hash: true
});
```

## Questions?

Contact me on GitHub or Twitter: [@markdalgleish](http://twitter.com/markdalgleish)

## License

Copyright 2013, Mark Dalgleish  
This content is released under the MIT license  
http://markdalgleish.mit-license.org