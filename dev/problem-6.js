"use strict";
/*
Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
*/
// function updateProfile(obj1:Profile,obj2:Profile){
function updateProfile(obj1, obj2) {
    // console.log(obj1)
    // console.log(keyo)
    // for (const key in obj1) {
    //   if (Object.prototype.hasOwnProperty.call(obj1, key)) {
    //     const element = obj1[key];
    //     // console.log(element)
    //     console.log(key)
    //   }
    // }
    // console.log(...obj1,...obj2)
    // console.log({...obj1,...obj2})
    return (Object.assign(Object.assign({}, obj1), obj2));
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
