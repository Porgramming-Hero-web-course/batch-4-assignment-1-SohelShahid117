{/*
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
*/

// function getProperty(obj,propsName){
//     // console.log("hello");
//     // console.log(propsName)
//     // console.log(Object.keys(obj))
//     let p = Object.keys(obj)
//     console.log(p)
//     p.forEach(element => {
//         console.log(element)
//         if(element===propsName){
//             console.log(5,element)
//             console.log(obj.element)
//         }
        
//     });

    // for(const props in obj){
    //     // console.log(props)
    //     if(props===propsName){
    //         console.log(1,obj.props)
    //         console.log(2,props)
    //         console.log(3,obj.name)
    //         console.log(4,obj.props)
    //         // return props.propsName;
    //     }
    // }

// }
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

interface Person{
    name:string;
    age:number
}

function getProperty<u extends Person,v extends keyof u>(obj:u,props:v):u[v]{
    // console.log(obj)
    // console.log(props)
    // console.log(obj.props)
    // console.log(obj[props])
    return(obj[props]);
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));



}