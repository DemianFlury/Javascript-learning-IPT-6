"use strict";
seriesOfNumbers(3, 5);
function seriesOfNumbers(number, repetitions) {
    var array = [];
    for(let i = 0; i < repetitions; i++){
        let next = (i + 1) * number;
        array.push(next);
    }
    console.log(array);

}