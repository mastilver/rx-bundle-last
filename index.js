'use strict';


module.exports = function (source, min, max) {

    if(max == null){
        max = min;
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
