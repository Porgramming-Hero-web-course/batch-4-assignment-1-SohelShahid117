"use strict";
{ /*
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
*/
    function getProperty(obj, props) {
        // console.log(obj)
        // console.log(props)
        // console.log(obj.props)
        // console.log(obj[props])
        return (obj[props]);
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    console.log(getProperty(person, "age"));
}
