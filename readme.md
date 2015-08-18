# rx-bundle-last [![Build Status](https://travis-ci.org/mastilver/rx-bundle-last.svg?branch=master)](https://travis-ci.org/mastilver/rx-bundle-last)[![Coverage Status](https://coveralls.io/repos/mastilver/rx-bundle-last/badge.svg?branch=master&service=github)](https://coveralls.io/github/mastilver/rx-bundle-last?branch=master)

> My wicked module


## Install

```
$ npm install --save rx-bundle-last
```


## Usage

```js

var rxBundleLast = require('rx-bundle-last');

var source = getData();

var bundledSource = rxBundleLast(source)(5);

bundledSource.forEach(function(array){
    assert.equal(array.length, 5);
});


```


## API

### rxBundleLast(source)(length)

#### source

*Required*  
Type: `Observable`

From which we create the bundled source

#### length

*Required*  
Type: `int`

Size of the array the source will output


## License

MIT © [Thomas Sileghem](https://github.com/mastilver)
