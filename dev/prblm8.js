"use strict";
/*
Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
*/
function validateKeys(obj, keys) {
    // console.log(obj)
    // console.log(keys)
    // console.log(keys[0] in obj)
    let result = false;
    for (let i = 0; i < keys.length; i++) {
        // console.log(keys[i] in obj)
        result = keys[i] in obj;
    }
    if (result) {
        // console.log(result)
        return result;
    }
    else {
        return result;
    }
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age","abc"]));
console.log(validateKeys(person, ["name", "age"]));
