[![Build Status](https://img.shields.io/travis/bespokejs/bespoke-hash/master.svg?style=flat)](http://travis-ci.org/bespokejs/bespoke-hash) [![Coverage Status](https://img.shields.io/coveralls/bespokejs/bespoke-hash/master.svg?style=flat)](https://coveralls.io/r/bespokejs/bespoke-hash)

# bespoke-hash

Hash Routing for [Bespoke.js](https://github.com/bespokejs/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/bespokejs/bespoke-hash/master/dist/bespoke-hash.min.js
[max]: https://raw.github.com/bespokejs/bespoke-hash/master/dist/bespoke-hash.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  hash = require('bespoke-hash');

bespoke.from('article', [
  hash()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.hash()
]);
```

Starting from `#1`, all routes are numbered by default.

### Named Routes

If you'd like to use named hash routes instead, add `data-bespoke-hash` attributes to your slide markup.

```html
<article>
  <section data-bespoke-hash="catchy-title"></section>
  <section data-bespoke-hash="shameless-plug"></section>
  <section data-bespoke-hash="controversial-statement"></section>
  <section data-bespoke-hash="explanation-of-controversial-statement"></section>
  <section data-bespoke-hash="shameless-self-promotion"></section>
</article>
```

Alternatively, you can specify the value using `id` attributes in your slide markup.

```html
<article>
  <section id="catchy-title"></section>
  <section id="shameless-plug"></section>
  <section id="controversial-statement"></section>
  <section id="explanation-of-controversial-statement"></section>
  <section id="shameless-self-promotion"></section>
</article>
```

If both the `data-bespoke-hash` and `id` attributes are used, `data-bespoke-hash` wins. When looking for a match, the plugin consults the `data-bespoke-hash` attribute on a slide first, then the `id` attribute.

## Package managers

### npm

```bash
$ npm install bespoke-hash
```

### Bower

```bash
$ bower install bespoke-hash
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/bespokejs/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
