var should = require('should');

var Rx = require('rx');

var rxBundleLast = require('../index');


describe('min is a string', function(){

    it('should throw an error', function(){
        var source = Rx.Observable.from([1, 2, 3, 4]);

        should.throws(function(){
            rxBundleLast(source, '2');
        }, TypeError);
    });
});


describe('max is a string', function(){

    it('should throw an error', function(){
        var source = Rx.Observable.from([1, 2, 3, 4]);

        should.throws(function(){
            rxBundleLast(source, 2, '2');
        }, TypeError);
    });
});


describe('max is bellow max', function(){

    it('should throw an error', function(){
        var source = Rx.Observable.from([1, 2, 3, 4]);

        should.throws(function(){
            rxBundleLast(source, 3, 2);
        }, Error);
    });
});
