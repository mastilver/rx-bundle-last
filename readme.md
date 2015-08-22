# rx-bundle-last [![Build Status](https://travis-ci.org/mastilver/rx-bundle-last.svg?branch=master)](https://travis-ci.org/mastilver/rx-bundle-last)[![Coverage Status](https://coveralls.io/repos/mastilver/rx-bundle-last/badge.svg?branch=master&service=github)](https://coveralls.io/github/mastilver/rx-bundle-last?branch=master)

> Emit an array of the latest emitted value


## Install

```
$ npm install --save rx-bundle-last
```


## Usage

```js

var rxBundleLast = require('rx-bundle-last');

var source = getData(); // get an Observable

var bundledSource = rxBundleLast(source, 5);

bundledSource.forEach(function(array){
    assert.equal(array.length, 5);
});


```


## API

### rxBundleLast(source, min, [max])

#### source

*Required*  
Type: `Observable`

From which the bundled source is created

#### min

*Required*  
Type: `int`

The minimum size the emitted array will be

#### max

Type: `int`  
Default: min

The maximum size the emitted array will be


## License

MIT © [Thomas Sileghem](https://github.com/mastilver)
