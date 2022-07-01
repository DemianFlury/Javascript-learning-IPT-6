"use strict";
var array1 = ["dirne"];
var array2 = ["rinde"];
console.log(isAnagram(array1, array2));
array1 = ["birne"];
console.log(isAnagram(array1, array2));


function isAnagram(a, b) {
    let counter = 0;
    a = a[0].split('');    
    b = b[0].split('');
    a = a.sort();
    b = b.sort();

    for(let i = 0; i < a.length; i++){
        if (a[i] == b[i]){
            counter++;
        }
    }

    if(counter == a.length){
        return true;
    }

    else{
        return false;
    }
}