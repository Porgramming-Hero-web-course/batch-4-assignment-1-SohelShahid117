"use strict";
/*
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]

*/
function removeDuplicates(a) {
    // const b =new Set(a);
    // return [...b]
    let b = [];
    a.forEach((x) => {
        if (!b.includes(x)) {
            b.push(x);
        }
    });
    return b;
    //   console.log(b);
}
// console.log(removeDuplicates([1, 21, 21, 3, 44, 44, 5, 77, 99, 99, 1]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
