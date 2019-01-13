# random

[![NPM version](https://img.shields.io/npm/v/@zcorky/random.svg?style=flat)](https://www.npmjs.com/package/@zcorky/random)
[![NPM quality](http://npm.packagequality.com/shield/%40zcorky%2Frandom.svg)](http://packagequality.com/#?package=@zcorky/random)
[![Coverage Status](https://codecov.io/gh/zcorky/random/branch/master/graph/badge.svg)](https://codecov.io/gh/zcorky/random)
[![Dependencies](https://img.shields.io/david/zcorky/random.svg?style=flat-square)](https://david-dm.org/zcorky/random)
[![Build Status](https://travis-ci.com/zcorky/random.svg?branch=master)](https://travis-ci.com/zcorky/random)
[![Known Vulnerabilities](https://snyk.io/test/npm/@zcorky/random/badge.svg?style=flat-square)](https://snyk.io/test/npm/@zcorky/random)
[![NPM download](https://img.shields.io/npm/dm/@zcorky/random.svg?style=flat-square)](https://www.npmjs.com/package/@zcorky/random)
![license](https://img.shields.io/github/license/zcorky/random.svg)
[![issues](https://img.shields.io/github/issues/zcorky/random.svg)](https://github.com/zcorky/random/issues)

Random number, random string, random from anything> 

## Install

```
$ npm install @zcorky/random
```

## Usage

```js
// typescript, see more in test
import random, { string, from as randomFrom } from '@zcorky/random';

random(0, 10); // random one integer value
// => 8

string(8); // random string, length is 8
// => cdef19ED

randomFrom([ // random one from array of string
  'http://example11.com',
  'http://example12.com',
  'http://example13.com',
]);

randomFrom([ // random 2 from array of string
  'http://example11.com',
  'http://example12.com',
  'http://example13.com',
], 2);
// => ['http://example11.com', 'http://example13.com']
```

## License

MIT © [Moeover](https://moeover.com)
