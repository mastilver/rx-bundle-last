'use strict';


module.exports = function (source, min, max) {

    if(max == null){
        max = min;
    }

    if(typeof min !== 'number' || typeof max !== 'number'){
        throw new TypeError('min and max should be numbers');
    }

    if(min > max){
        throw new Error('min can\'t be superior to max');
    }

    source = source
    .scan(function(acc, x){
        acc.push(x);
        return acc;
    }, [])
    .filter(function(x){
        return x.length >= min;
    })
    .map(function(x){
        return x.slice(-max);
    });

    return source
};
