require('should');

var Rx = require('rx');

var rxBundleLast = require('../index');


describe('fixed bundle length', function(){

    var result = [];

    before(function(done){

        var source = Rx.Observable.from([1, 2, 3, 4]);


        rxBundleLast(source, 2, 3)
        .subscribe(function(x){
            result.push(x);
        }, null, done)
    });

    it('should emit 3 value', function(){
        result.length.should.be.equal(3);
    });

    it('should emit the first value', function(){
        result[0].should.be.deepEqual([1, 2]);
    });

    it('should emit the second value', function(){
        result[1].should.be.deepEqual([1, 2, 3]);
    });

    it('should emit the third value', function(){
        result[2].should.be.deepEqual([2, 3, 4]);
    });
});
