/*
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
*/
function sumArray(a:number[]):number{
    let sum =0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }
    return sum;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([1, 2, 3, 4, 5]))