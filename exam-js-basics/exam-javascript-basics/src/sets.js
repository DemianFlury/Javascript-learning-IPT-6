"use strict";
var array1 = [1, 2, 3, 4, 5, 6, 7], array2 = [5, 6, 7, 7, 8, 9];
var result = [];
console.log(intersect(array1, array2));
console.log(union(array1, array2));
console.log(subtract(array1, array2));
console.log(combine(array1, array2));

function intersect(a, b) {
    return a.filter((i) => b.includes(i));
}

function union(a, b) {

    for(let i = 0; i < (a.length + b.length); i++){
        if(!a.includes(b[i]) && typeof b[i] != 'undefined')
        {
                a.push(b[i]);
        }
    }
    return a;
}

function subtract(a, b) {
    return a.filter((i) => !b.includes(i));
}

function combine(a, b) {
    var innerarray = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            innerarray.push(a[i], b[j]);
            result.push(innerarray);
            innerarray=[];
        }
    }
    return result;
}